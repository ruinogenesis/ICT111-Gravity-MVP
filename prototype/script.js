/* Gravity Sprint 2 (v0.3) — ICT111 Lab 11
   Frontend-only prototype: data.json seed → localStorage (FR-04).
   Sprint 2 additions: My Listings screen (seller self-service, US-07), buyer request status,
   sort options, product metrics PM-01..PM-08 with CSS bar charts (FR-12), data.json source.
   All user text is rendered with textContent (never innerHTML) — Lab 09 risk R-04 fix.
   All people and records below are fictional sample data. */

"use strict";

/* ---------- Seed data (from /data/sample-*.csv) ---------- */
var CATEGORIES = ["Furniture", "Appliances", "Textbooks", "Electronics", "Clothing", "Other"]; // expanded per Lab 08 finding (Issue 10)

var seedUsers = [
  { id: "U001", name: "Su Su",    email: "su.su@rsu.ac.th",    role: "student", verified: true  },
  { id: "U002", name: "Kaung M.", email: "kaung.m@rsu.ac.th",  role: "student", verified: true  },
  { id: "U003", name: "Pim N.",   email: "pim.n@rsu.ac.th",    role: "student", verified: false },
  { id: "U004", name: "Nine",     email: "nine.k@rsu.ac.th",   role: "student", verified: true  }
];

var seedListings = [
  { id: "GL-001", title: "Wooden study desk",        cat: "Furniture",   price: 800,  cond: "Good",     area: "Dorm A lobby",        desc: "Solid desk with drawer. Must go before June 30 flight.", photo: "🛋", sellerId: "U001", status: "Available", date: "2026-07-14" },
  { id: "GL-002", title: "Mini fridge 45L",          cat: "Appliances",  price: 1500, cond: "Like new", area: "Building 6",          desc: "Used one semester. Includes small freezer box.",         photo: "🧊", sellerId: "U001", status: "Reserved",  date: "2026-07-15" },
  { id: "GL-003", title: "ICT111 textbook",          cat: "Textbooks",   price: 250,  cond: "Good",     area: "ICT building",        desc: "Light highlights in chapters 1-4.",                      photo: "📚", sellerId: "U002", status: "Available", date: "2026-07-15" },
  { id: "GL-004", title: "Office chair with wheels", cat: "Furniture",   price: 450,  cond: "Fair",     area: "Dorm B lobby",        desc: "Small scratch on armrest. Very comfortable.",            photo: "🛋", sellerId: "U004", status: "Sold",      date: "2026-07-16", soldDate: "2026-07-19" },
  { id: "GL-005", title: "Electric kettle 1.5L",     cat: "Appliances",  price: 200,  cond: "Good",     area: "Dorm A lobby",        desc: "Works perfectly.",                                       photo: "🍳", sellerId: "U002", status: "Available", date: "2026-07-16" },
  { id: "GL-006", title: "Calculus textbook set",    cat: "Textbooks",   price: 400,  cond: "Like new", area: "Library meetup point", desc: "Two volumes, no writing inside.",                       photo: "📚", sellerId: "U004", status: "Reserved",  date: "2026-07-17" },
  { id: "GL-007", title: "Desk lamp LED",            cat: "Electronics", price: 150,  cond: "Good",     area: "Student union",       desc: "Warm/cool light modes, USB powered.",                    photo: "📱", sellerId: "U001", status: "Available", date: "2026-07-18" },
  { id: "GL-008", title: "Winter jacket size M",     cat: "Clothing",    price: 300,  cond: "Good",     area: "Dorm B lobby",        desc: "Warm jacket, perfect for exchange semester abroad.",     photo: "👕", sellerId: "U002", status: "Sold",      date: "2026-07-17", soldDate: "2026-07-21" }
];

var seedRequests = [
  { id: "CR-001", listingId: "GL-002", buyerId: "U004", status: "Accepted", date: "2026-07-16" },
  { id: "CR-002", listingId: "GL-001", buyerId: "U002", status: "Pending",  date: "2026-07-18" },
  { id: "CR-003", listingId: "GL-008", buyerId: "U004", status: "Accepted", date: "2026-07-20" },
  { id: "CR-004", listingId: "GL-003", buyerId: "U004", status: "Declined", date: "2026-07-19" }
];

/* Lab 08 validation evidence (fixed numbers from /data/validation-results.csv) */
var VALIDATION = { testers: 5, taskSuccess: 93.3, avgFeedback: 4.30, avgInterest: 4.40 };

/* Sprint 2: data.json is the documented seed source (FR-04). It loads when served over
   http(s) — e.g. GitHub Pages — and falls back to the embedded seed arrays when the
   page is opened as a local file (fetch on file:// is blocked by browsers). */
function tryLoadDataJson() {
  if (window.location.protocol === "file:") { return; }
  fetch("data.json").then(function (r) { return r.json(); }).then(function (d) {
    if (!localStorage.getItem("gravityListings") && d && d.listings) {
      users = d.users; listings = d.listings; requests = d.requests;
      persist();
      renderAll();
    }
  }).catch(function () { /* keep embedded seed */ });
}

/* ---------- Storage (FR-04) ---------- */
function load(key, seed) {
  try {
    var raw = localStorage.getItem(key);
    if (raw) { return JSON.parse(raw); }
  } catch (e) { /* corrupted -> self-heal from seed */ }
  return JSON.parse(JSON.stringify(seed));
}
function persist() {
  localStorage.setItem("gravityUsers", JSON.stringify(users));
  localStorage.setItem("gravityListings", JSON.stringify(listings));
  localStorage.setItem("gravityRequests", JSON.stringify(requests));
}
var users = load("gravityUsers", seedUsers);
var listings = load("gravityListings", seedListings);
var requests = load("gravityRequests", seedRequests);

function resetData() {
  users = JSON.parse(JSON.stringify(seedUsers));
  listings = JSON.parse(JSON.stringify(seedListings));
  requests = JSON.parse(JSON.stringify(seedRequests));
  persist();
  selectedCat = "All";
  currentDetailId = null;
  showScreen("home");
  renderAll();
  flash(el("admin-msg"), "ok", "Demo data reset to seed state.");
}

/* ---------- Demo role (simulated login, technical-architecture.md §5) ---------- */
var DEMO_ROLE_USER = { buyer: "U004", seller: "U001", admin: null };
var role = "buyer";
function currentUser() {
  var id = DEMO_ROLE_USER[role];
  return id ? findUser(id) : null;
}

/* ---------- Helpers ---------- */
function el(id) { return document.getElementById(id); }
function findUser(id) { for (var i = 0; i < users.length; i++) { if (users[i].id === id) { return users[i]; } } return null; }
function findListing(id) { for (var i = 0; i < listings.length; i++) { if (listings[i].id === id) { return listings[i]; } } return null; }
function statusClass(s) {
  if (s === "Available") { return "status st-available"; }
  if (s === "Reserved") { return "status st-reserved"; }
  if (s === "Removed") { return "status st-removed"; }
  return "status st-sold";
}
function flash(node, kind, text) {
  node.className = "msg " + kind;
  node.textContent = text;
  node.classList.remove("hidden");
}
function nextId(prefix, arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    var n = parseInt(arr[i].id.split("-")[1], 10);
    if (n > max) { max = n; }
  }
  return prefix + "-" + String(max + 1).padStart(3, "0");
}
function today() { return new Date().toISOString().slice(0, 10); }

/* ---------- Navigation (SPA screens) ---------- */
var SCREENS = ["home", "browse", "sell", "mylistings", "detail", "dashboard", "register", "admin"];
function showScreen(name) {
  for (var i = 0; i < SCREENS.length; i++) {
    el("screen-" + SCREENS[i]).classList.toggle("hidden", SCREENS[i] !== name);
  }
  var links = document.querySelectorAll("#main-nav a");
  for (var j = 0; j < links.length; j++) {
    links[j].classList.toggle("active", links[j].getAttribute("data-screen") === name);
  }
  if (name === "browse") { renderCards(); }
  if (name === "mylistings") { renderMyListings(); }
  if (name === "dashboard") { renderDashboard(); }
  if (name === "admin") { renderAdmin(); }
  window.scrollTo(0, 0);
}

/* ---------- S-03 Browse: chips, filters, cards (FR-05, FR-06) ---------- */
var selectedCat = "All";

function renderChips() {
  var wrap = el("cat-chips");
  wrap.textContent = "";
  var cats = ["All"].concat(CATEGORIES);
  cats.forEach(function (c) {
    var chip = document.createElement("span");
    chip.className = "cat" + (c === selectedCat ? " selected" : "");
    chip.textContent = c;
    chip.onclick = function () { selectedCat = c; renderChips(); renderCards(); };
    wrap.appendChild(chip);
  });
}

function listingMatchesFilters(l) {
  var q = el("search").value.trim().toLowerCase();
  var min = parseFloat(el("price-min").value);
  var max = parseFloat(el("price-max").value);
  var showSold = el("show-sold").checked;
  if (l.status === "Removed") { return false; }
  if (!showSold && l.status === "Sold") { return false; }
  if (selectedCat !== "All" && l.cat !== selectedCat) { return false; }
  if (!isNaN(min) && l.price < min) { return false; }
  if (!isNaN(max) && l.price > max) { return false; }
  if (q && (l.title + " " + l.area).toLowerCase().indexOf(q) === -1) { return false; }
  return true;
}

function sortedListings() {
  var mode = el("sort-select") ? el("sort-select").value : "new";
  var arr = listings.slice();
  if (mode === "priceAsc") { arr.sort(function (a, b) { return a.price - b.price; }); }
  else if (mode === "priceDesc") { arr.sort(function (a, b) { return b.price - a.price; }); }
  else { arr.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); }); }
  return arr;
}

function renderCards() {
  var wrap = el("cards");
  wrap.textContent = "";
  var shown = 0;
  sortedListings().forEach(function (l) {
    if (!listingMatchesFilters(l)) { return; }
    shown++;
    var card = document.createElement("div");
    card.className = "card" + (l.status !== "Available" ? " dim" : "");
    var photo = document.createElement("div");
    photo.className = "card-photo";
    photo.textContent = l.photo || "📦";
    var body = document.createElement("div");
    var h = document.createElement("h4");
    h.textContent = l.title; /* textContent: R-04 XSS fix */
    var meta = document.createElement("p");
    meta.textContent = l.cat + " · " + l.price + " THB · " + l.area;
    var st = document.createElement("span");
    st.className = statusClass(l.status);
    st.textContent = l.status;
    var seller = findUser(l.sellerId);
    var sellerP = document.createElement("p");
    sellerP.textContent = "Seller: " + (seller ? seller.name : "?") + (seller && seller.verified ? " ✓ verified" : "");
    body.appendChild(h); body.appendChild(meta); body.appendChild(st); body.appendChild(sellerP);
    card.appendChild(photo); card.appendChild(body);
    card.onclick = function () { openDetail(l.id); };
    wrap.appendChild(card);
  });
  el("empty-msg").classList.toggle("hidden", shown !== 0);
}

/* ---------- S-02 Sell (FR-03, FR-10, FR-11) ---------- */
function fillCategorySelect() {
  var sel = el("f-cat");
  CATEGORIES.forEach(function (c) {
    var o = document.createElement("option");
    o.textContent = c;
    sel.appendChild(o);
  });
}

function postListing() {
  var msg = el("form-msg");
  var title = el("f-title").value.trim();
  var cat = el("f-cat").value;
  var price = el("f-price").value;
  var cond = el("f-cond").value;
  var area = el("f-area").value;
  var desc = el("f-desc").value.trim();
  var photo = el("f-photo").value;

  if (!title || !cat || !price || !cond || !area) {
    flash(msg, "err", "Please complete required fields.");
    return;
  }
  if (Number(price) <= 0 || isNaN(Number(price))) {
    flash(msg, "err", "Price must be a positive number.");
    return;
  }
  /* duplicate-listing warning (FR-10, risk R-09) */
  var dup = listings.some(function (l) {
    return l.status !== "Removed" && l.title.toLowerCase() === title.toLowerCase() && l.cat === cat;
  });
  if (dup && !postListing.confirmedDup) {
    postListing.confirmedDup = true;
    flash(msg, "err", "A listing with the same title and category already exists. Press \"Post listing\" again if this is really a different item.");
    return;
  }
  postListing.confirmedDup = false;

  var seller = currentUser() || findUser("U001");
  listings.push({
    id: nextId("GL", listings), title: title, cat: cat, price: Number(price), cond: cond,
    area: area, desc: desc, photo: photo, sellerId: seller.id, status: "Available", date: today()
  });
  persist();
  ["f-title", "f-price", "f-desc"].forEach(function (id) { el(id).value = ""; });
  ["f-cat", "f-cond", "f-area", "f-photo"].forEach(function (id) { el(id).value = ""; });
  flash(msg, "ok", "Listing posted successfully — status: Available. Buyers can now find it on the Browse page.");
}

/* ---------- S-04 Detail (FR-07, FR-08, FR-15) ---------- */
var currentDetailId = null;

function openDetail(id) {
  var l = findListing(id);
  if (!l) { return; }
  currentDetailId = id;
  el("d-title").textContent = l.title;
  el("d-price").textContent = l.price;
  el("d-cat").textContent = l.cat;
  el("d-cond").textContent = l.cond;
  el("d-area").textContent = l.area;
  el("d-date").textContent = l.date;
  el("d-desc").textContent = l.desc || "—";
  el("d-photo").textContent = l.photo || "📦";
  var seller = findUser(l.sellerId);
  el("d-seller").textContent = seller ? seller.name : "?";
  el("d-verified").textContent = seller && seller.verified ? "✓ Verified RSU student" : "verification pending";
  var st = el("d-status");
  st.textContent = l.status;
  st.className = statusClass(l.status);
  var note = el("d-status-note");
  if (l.status === "Reserved") {
    note.textContent = "Reserved = a buyer already agreed with the seller. Not final — if the deal falls through it becomes Available again. You cannot request contact while an item is Reserved.";
  } else if (l.status === "Sold") {
    note.textContent = "This item has been sold.";
  } else {
    note.textContent = "";
  }
  var btn = el("contact-btn");
  var existing = requests.some(function (r) {
    var me = currentUser();
    return me && r.listingId === id && r.buyerId === me.id && r.status !== "Declined";
  });
  btn.disabled = (l.status !== "Available") || existing || role === "admin";
  btn.textContent = existing ? "Request sent" : (l.status === "Available" ? "Request contact" : "Item " + l.status.toLowerCase());
  el("contact-explainer").classList.add("hidden");
  el("contact-msg").classList.add("hidden");
  showScreen("detail");
}

function requestContact() {
  var me = currentUser();
  var msg = el("contact-msg");
  if (!me) {
    flash(msg, "err", "Switch the demo role to Buyer or Seller to send a request.");
    return;
  }
  if (!me.verified) {
    flash(msg, "err", "Only verified RSU students can request contact (NFR-04).");
    return;
  }
  var l = findListing(currentDetailId);
  if (!l || l.status !== "Available") { return; }
  if (l.sellerId === me.id) {
    flash(msg, "err", "This is your own listing.");
    return;
  }
  requests.push({ id: nextId("CR", requests), listingId: l.id, buyerId: me.id, status: "Pending", date: today() });
  persist();
  el("contact-btn").disabled = true;
  el("contact-btn").textContent = "Request sent";
  el("contact-explainer").classList.remove("hidden"); /* Lab 08 fix: what-happens-next explainer (Issue 7) */
  flash(msg, "ok", "Contact request sent to the seller.");
}

/* ---------- S-08 My Listings (Sprint 2: FR-02, FR-08, US-06, US-07) ---------- */
function setStatus(l, s) {
  l.status = s;
  if (s === "Sold") { l.soldDate = today(); }
  persist();
}

function renderMyListings() {
  var me = currentUser();
  var intro = el("mylistings-intro");
  var mmsg = el("my-msg");
  var ltbody = el("my-listings-table").querySelector("tbody");
  var rtbody = el("my-requests-table").querySelector("tbody");
  var stbody = el("my-sent-table").querySelector("tbody");
  ltbody.textContent = ""; rtbody.textContent = ""; stbody.textContent = "";

  function emptyRow(tbody, text) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  if (!me) {
    intro.textContent = "Switch the demo role to Buyer or Seller to see your own listings and requests. (Admin manages the whole marketplace from the Admin view.)";
    emptyRow(ltbody, "—"); emptyRow(rtbody, "—"); emptyRow(stbody, "—");
    return;
  }
  intro.textContent = "Signed in as " + me.name + " (demo). Update your own item statuses here — buyers see changes immediately (FR-08).";

  /* my items + status self-service (US-07: seller updates status without admin) */
  var mine = listings.filter(function (l) { return l.sellerId === me.id && l.status !== "Removed"; });
  if (mine.length === 0) { emptyRow(ltbody, "You have no active listings — post one from \"Sell an item\"."); }
  mine.forEach(function (l) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = l.title + " (" + l.price + " THB) ";
    var st = document.createElement("span");
    st.className = statusClass(l.status);
    st.textContent = l.status;
    td1.appendChild(st);
    var td2 = document.createElement("td");
    ["Available", "Reserved", "Sold"].forEach(function (s) {
      if (s === l.status) { return; }
      var b = document.createElement("button");
      b.className = "row-btn";
      b.textContent = "Mark " + s;
      b.onclick = function () {
        setStatus(l, s);
        renderMyListings();
        flash(mmsg, "ok", "\"" + l.title + "\" is now " + s + ". " + (s === "Reserved" ? "Buyers can no longer request contact until you make it Available again." : ""));
      };
      td2.appendChild(b);
    });
    tr.appendChild(td1); tr.appendChild(td2);
    ltbody.appendChild(tr);
  });

  /* incoming requests on my items (US-06: seller accepts — moved out of admin in Sprint 2) */
  var incoming = requests.filter(function (r) {
    var l = findListing(r.listingId);
    return l && l.sellerId === me.id;
  });
  if (incoming.length === 0) { emptyRow(rtbody, "No contact requests for your items yet."); }
  incoming.forEach(function (r) {
    var l = findListing(r.listingId);
    var buyer = findUser(r.buyerId);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = (buyer ? buyer.name : "?") + " → " + (l ? l.title : "?") + " [" + r.status + "]" +
      (r.status === "Accepted" && buyer ? " — buyer contact: " + buyer.email : "");
    var td2 = document.createElement("td");
    if (r.status === "Pending") {
      var acc = document.createElement("button");
      acc.className = "row-btn";
      acc.textContent = "Accept";
      acc.onclick = function () {
        r.status = "Accepted";
        persist();
        renderMyListings();
        flash(mmsg, "ok", "Accepted — you and " + (buyer ? buyer.name : "the buyer") + " can now see each other's RSU email (nothing else is shared, FR-15).");
      };
      var dec = document.createElement("button");
      dec.className = "row-btn danger";
      dec.textContent = "Decline";
      dec.onclick = function () {
        r.status = "Declined";
        persist();
        renderMyListings();
        flash(mmsg, "ok", "Declined. No contact information was shared.");
      };
      td2.appendChild(acc); td2.appendChild(dec);
    } else { td2.textContent = "—"; }
    tr.appendChild(td1); tr.appendChild(td2);
    rtbody.appendChild(tr);
  });

  /* my sent requests (Sprint 2: buyer can finally see request state — Lab 08 confusion fix) */
  var sent = requests.filter(function (r) { return r.buyerId === me.id; });
  if (sent.length === 0) { emptyRow(stbody, "You have not requested contact for any item."); }
  sent.forEach(function (r) {
    var l = findListing(r.listingId);
    var seller = l ? findUser(l.sellerId) : null;
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var text = (l ? l.title : "?") + " — " + r.status;
    if (r.status === "Accepted" && seller) { text += " — seller contact: " + seller.email; }
    if (r.status === "Pending") { text += " (waiting for the seller)"; }
    td.textContent = text;
    tr.appendChild(td);
    stbody.appendChild(tr);
  });
}

/* ---------- S-05 Dashboard + product metrics (FR-12, PM-01..PM-08) ---------- */
function barChart(container, rows) {
  /* rows: [[label, count], ...] — pure DOM, no innerHTML */
  container.textContent = "";
  var max = 1;
  rows.forEach(function (r) { if (r[1] > max) { max = r[1]; } });
  rows.forEach(function (r) {
    var row = document.createElement("div");
    row.className = "chart-row";
    var lab = document.createElement("span");
    lab.className = "chart-label";
    lab.textContent = r[0];
    var track = document.createElement("div");
    track.className = "chart-track";
    var bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.width = Math.round((r[1] / max) * 100) + "%";
    var val = document.createElement("span");
    val.className = "chart-value";
    val.textContent = r[1];
    track.appendChild(bar);
    row.appendChild(lab); row.appendChild(track); row.appendChild(val);
    container.appendChild(row);
  });
}

function computeMetrics() {
  var active = listings.filter(function (l) { return l.status !== "Removed"; });
  var counts = { Available: 0, Reserved: 0, Sold: 0 };
  active.forEach(function (l) { if (counts[l.status] !== undefined) { counts[l.status]++; } });
  var sold = active.filter(function (l) { return l.status === "Sold"; });
  var sellThrough = active.length ? Math.round((sold.length / active.length) * 1000) / 10 : 0;
  var topCat = "—", topN = 0;
  CATEGORIES.forEach(function (c) {
    var n = active.filter(function (l) { return l.cat === c; }).length;
    if (n > topN) { topN = n; topCat = c; }
  });
  var accepted = requests.filter(function (r) { return r.status === "Accepted"; }).length;
  var decided = requests.filter(function (r) { return r.status !== "Pending"; }).length;
  var acceptRate = decided ? Math.round((accepted / decided) * 1000) / 10 : 0;
  var daysSum = 0, daysN = 0;
  sold.forEach(function (l) {
    if (l.date && l.soldDate) {
      var d = (new Date(l.soldDate) - new Date(l.date)) / 86400000;
      if (d >= 0) { daysSum += d; daysN++; }
    }
  });
  var avgDays = daysN ? Math.round((daysSum / daysN) * 10) / 10 : null;
  var verified = users.filter(function (u) { return u.verified; }).length;
  return {
    total: active.length, counts: counts, sellThrough: sellThrough,
    topCat: topCat + (topN ? " (" + topN + ")" : ""), requests: requests.length,
    acceptRate: acceptRate, avgDays: avgDays, verified: verified, usersTotal: users.length
  };
}

function statCard(wrap, value, label) {
  var d = document.createElement("div");
  d.className = "stat";
  var b = document.createElement("b");
  b.textContent = value;
  var sp = document.createElement("span");
  sp.textContent = label;
  d.appendChild(b); d.appendChild(sp);
  wrap.appendChild(d);
}

function renderDashboard() {
  var m = computeMetrics();
  var active = listings.filter(function (l) { return l.status !== "Removed"; });

  var wrap = el("stat-cards");
  wrap.textContent = "";
  statCard(wrap, m.total, "Total listings");
  statCard(wrap, m.counts.Available, "Available");
  statCard(wrap, m.counts.Reserved, "Reserved");
  statCard(wrap, m.counts.Sold, "Sold");
  statCard(wrap, m.requests, "Contact requests");

  barChart(el("cat-chart"), CATEGORIES.map(function (c) {
    return [c, active.filter(function (l) { return l.cat === c; }).length];
  }));
  barChart(el("status-chart"), [
    ["Available", m.counts.Available],
    ["Reserved", m.counts.Reserved],
    ["Sold", m.counts.Sold]
  ]);

  var mc = el("metric-cards");
  mc.textContent = "";
  statCard(mc, m.total, "PM-01 Total listings");
  statCard(mc, m.counts.Available + " / " + m.counts.Reserved + " / " + m.counts.Sold, "PM-02 Avail / Res / Sold");
  statCard(mc, m.sellThrough + "%", "PM-03 Sell-through rate");
  statCard(mc, m.topCat, "PM-04 Top category");
  statCard(mc, m.requests + " (" + m.acceptRate + "% accepted)", "PM-05 Contact requests");
  statCard(mc, m.avgDays === null ? "n/a" : m.avgDays + " days", "PM-06 Avg time to Sold");
  statCard(mc, m.verified + " / " + m.usersTotal, "PM-07 Verified users");

  var vc = el("validation-cards");
  vc.textContent = "";
  statCard(vc, VALIDATION.testers, "Testers");
  statCard(vc, VALIDATION.taskSuccess + "%", "PM-08 Task success (Lab 08)");
  statCard(vc, VALIDATION.avgFeedback + " / 5", "Avg feedback");
  statCard(vc, VALIDATION.avgInterest + " / 5", "Avg interest");
}

/* ---------- S-07 Register (FR-10, FR-15) ---------- */
function register() {
  var msg = el("register-msg");
  var name = el("r-name").value.trim();
  var email = el("r-email").value.trim().toLowerCase();
  if (!name || !email) {
    flash(msg, "err", "Please complete required fields.");
    return;
  }
  if (name.length < 2) {
    flash(msg, "err", "Display name must be at least 2 characters.");
    return;
  }
  if (!/^[a-z0-9._%+-]+@rsu\.ac\.th$/.test(email)) {
    flash(msg, "err", "Registration rejected: only @rsu.ac.th email addresses are accepted (NFR-04).");
    return;
  }
  if (users.some(function (u) { return u.email === email; })) {
    flash(msg, "err", "This RSU email is already registered.");
    return;
  }
  users.push({ id: nextId("U", users), name: name, email: email, role: "student", verified: false });
  persist();
  el("r-name").value = "";
  el("r-email").value = "";
  flash(msg, "ok", "Registered! Next step: one-time in-person student ID check with the Gravity team — we look at your ID once and store nothing. (Simulated in this demo: the admin marks you verified.)");
}

/* ---------- S-06 Admin (FR-08, FR-09) ---------- */
function renderAdmin() {
  var amsg = el("admin-msg");

  /* pending users */
  var utbody = el("admin-users").querySelector("tbody");
  utbody.textContent = "";
  var pendingUsers = users.filter(function (u) { return !u.verified; });
  if (pendingUsers.length === 0) {
    var tr0 = document.createElement("tr");
    var td0 = document.createElement("td");
    td0.textContent = "No accounts waiting for verification.";
    tr0.appendChild(td0);
    utbody.appendChild(tr0);
  }
  pendingUsers.forEach(function (u) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = u.name + " (" + u.email + ")";
    var td2 = document.createElement("td");
    var btn = document.createElement("button");
    btn.className = "row-btn";
    btn.textContent = "Confirm in-person ID check → verify";
    btn.onclick = function () {
      u.verified = true;
      persist();
      renderAdmin();
      flash(amsg, "ok", u.name + " is now verified. (No ID data stored — boolean flag only.)");
    };
    td2.appendChild(btn);
    tr.appendChild(td1); tr.appendChild(td2);
    utbody.appendChild(tr);
  });

  /* contact requests */
  var rtbody = el("admin-requests").querySelector("tbody");
  rtbody.textContent = "";
  requests.forEach(function (r) {
    var l = findListing(r.listingId);
    var buyer = findUser(r.buyerId);
    var seller = l ? findUser(l.sellerId) : null;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = r.id + ": " + (buyer ? buyer.name : "?") + " → " + (l ? l.title : "?") + " [" + r.status + "]";
    var td2 = document.createElement("td");
    if (r.status === "Pending") {
      var acc = document.createElement("button");
      acc.className = "row-btn";
      acc.textContent = "Accept (as seller)";
      acc.onclick = function () {
        r.status = "Accepted";
        persist();
        renderAdmin();
        flash(amsg, "ok", "Accepted. Contact revealed to both sides (demo): buyer " + (buyer ? buyer.email : "?") + " ↔ seller " + (seller ? seller.email : "?") + ". RSU emails only — nothing else is shared (FR-15).");
      };
      var dec = document.createElement("button");
      dec.className = "row-btn danger";
      dec.textContent = "Decline";
      dec.onclick = function () {
        r.status = "Declined";
        persist();
        renderAdmin();
        flash(amsg, "ok", "Request declined. No contact information was shared.");
      };
      td2.appendChild(acc); td2.appendChild(dec);
    } else {
      td2.textContent = "—";
    }
    tr.appendChild(td1); tr.appendChild(td2);
    rtbody.appendChild(tr);
  });

  /* listings management */
  var ltbody = el("admin-listings").querySelector("tbody");
  ltbody.textContent = "";
  listings.forEach(function (l) {
    if (l.status === "Removed") { return; }
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = l.id + ": " + l.title + " [" + l.status + "]";
    var td2 = document.createElement("td");
    ["Available", "Reserved", "Sold"].forEach(function (s) {
      if (s === l.status) { return; }
      var b = document.createElement("button");
      b.className = "row-btn";
      b.textContent = "→ " + s;
      b.onclick = function () {
        setStatus(l, s);
        renderAdmin();
        flash(amsg, "ok", l.title + " status updated to " + s + ". Change is visible on all screens immediately (FR-08).");
      };
      td2.appendChild(b);
    });
    var rm = document.createElement("button");
    rm.className = "row-btn danger";
    rm.textContent = "Remove";
    rm.onclick = function () {
      if (window.confirm("Remove listing \"" + l.title + "\"? This cannot be undone in the demo.")) {
        l.status = "Removed";
        persist();
        renderAdmin();
        flash(amsg, "ok", "Listing removed (FR-09, confirmation required per FR-10).");
      }
    };
    td2.appendChild(rm);
    tr.appendChild(td1); tr.appendChild(td2);
    ltbody.appendChild(tr);
  });
}

/* ---------- Render everything ---------- */
function renderAll() {
  renderChips();
  renderCards();
  renderMyListings();
  renderDashboard();
  renderAdmin();
}

/* ---------- Wire up events ---------- */
document.addEventListener("DOMContentLoaded", function () {
  fillCategorySelect();
  renderAll();

  /* nav */
  document.querySelectorAll("#main-nav a").forEach(function (a) {
    a.onclick = function (e) {
      e.preventDefault();
      showScreen(a.getAttribute("data-screen"));
    };
  });
  document.querySelectorAll("[data-goto]").forEach(function (b) {
    b.onclick = function (e) {
      e.preventDefault();
      showScreen(b.getAttribute("data-goto"));
    };
  });

  /* role switch */
  el("role-select").onchange = function () {
    role = this.value;
    renderMyListings();
    if (currentDetailId) { openDetail(currentDetailId); showScreen(role === "admin" ? "admin" : "detail"); }
  };

  /* browse filters */
  el("search").oninput = renderCards;
  el("price-min").oninput = renderCards;
  el("price-max").oninput = renderCards;
  el("show-sold").onchange = renderCards;
  el("sort-select").onchange = renderCards;

  /* Sprint 2: try loading seed from data.json (works on GitHub Pages) */
  tryLoadDataJson();

  /* actions */
  el("post-btn").onclick = postListing;
  el("contact-btn").onclick = requestContact;
  el("register-btn").onclick = register;
  el("reset-btn").onclick = resetData;
});
