var categories = ["Furniture", "Appliances", "Electronics", "Clothing", "Sneakers", "Other"];

var users = [];
var listings = [];
var requests = [];

var role = "buyer";
var selectedCat = "All";
var openListingId = "";

function seedUsers() {
  return [
    { id: "U001", name: "Su Su", email: "su.su@rsu.ac.th", verified: true },
    { id: "U002", name: "Kaung M.", email: "kaung.m@rsu.ac.th", verified: true },
    { id: "U003", name: "Pim N.", email: "pim.n@rsu.ac.th", verified: false },
    { id: "U004", name: "Nine", email: "nine.k@rsu.ac.th", verified: true }
  ];
}

function seedListings() {
  return [
    { id: "GL-001", title: "Wooden study desk", cat: "Furniture", price: 800, cond: "Good", area: "The Next 2 Apartment lobby", desc: "Solid desk with drawer. Must go before June 30 flight.", photo: "\ud83d\udecb", sellerId: "U001", status: "Available", date: "2026-07-14", soldDate: "" },
    { id: "GL-002", title: "Mini fridge 45L", cat: "Appliances", price: 1500, cond: "Like new", area: "Building 6", desc: "Used one semester. Includes small freezer box.", photo: "\ud83e\uddca", sellerId: "U001", status: "Reserved", date: "2026-07-15", soldDate: "" },
    { id: "GL-003", title: "Air fryer 5L", cat: "Appliances", price: 900, cond: "Good", area: "ICT building", desc: "Used for one year. Cleaned, works perfectly.", photo: "\ud83e\uddca", sellerId: "U002", status: "Available", date: "2026-07-15", soldDate: "" },
    { id: "GL-004", title: "Office chair with wheels", cat: "Furniture", price: 450, cond: "Fair", area: "U Campus lobby", desc: "Small scratch on armrest. Very comfortable.", photo: "\ud83d\udecb", sellerId: "U004", status: "Sold", date: "2026-07-16", soldDate: "2026-07-19" },
    { id: "GL-005", title: "Electric kettle 1.5L", cat: "Appliances", price: 200, cond: "Good", area: "The Next 2 Apartment lobby", desc: "Works perfectly.", photo: "\ud83c\udf73", sellerId: "U002", status: "Available", date: "2026-07-16", soldDate: "" },
    { id: "GL-006", title: "Sneakers size 42", cat: "Sneakers", price: 1200, cond: "Like new", area: "Library meetup point", desc: "Worn three times. Original box included.", photo: "\ud83d\udc5f", sellerId: "U004", status: "Reserved", date: "2026-07-17", soldDate: "" },
    { id: "GL-007", title: "Desk lamp LED", cat: "Electronics", price: 150, cond: "Good", area: "Student union", desc: "Warm and cool light modes, USB powered.", photo: "\ud83d\udcf1", sellerId: "U001", status: "Available", date: "2026-07-18", soldDate: "" },
    { id: "GL-008", title: "Winter jacket size M", cat: "Clothing", price: 300, cond: "Good", area: "U Campus lobby", desc: "Warm jacket, perfect for exchange semester abroad.", photo: "\ud83d\udc55", sellerId: "U002", status: "Sold", date: "2026-07-17", soldDate: "2026-07-21" },
    { id: "GL-009", title: "Monitor 24 inch", cat: "Electronics", price: 2200, cond: "Good", area: "ICT building", desc: "Full HD, HDMI cable included. Great for coursework.", photo: "\ud83d\udda5", sellerId: "U001", status: "Available", date: "2026-07-19", soldDate: "" },
    { id: "GL-010", title: "UPS 800VA", cat: "Electronics", price: 1100, cond: "Good", area: "ICT building", desc: "Battery backup for desktop setup. Battery replaced this year.", photo: "\ud83d\udcf1", sellerId: "U004", status: "Available", date: "2026-07-19", soldDate: "" },
    { id: "GL-011", title: "Designer jacket size S", cat: "Clothing", price: 1800, cond: "Like new", area: "Student union", desc: "Barely worn. Bought last season, moving out so it must go.", photo: "\ud83d\udc55", sellerId: "U002", status: "Available", date: "2026-07-20", soldDate: "" }
  ];
}

function seedRequests() {
  return [
    { id: "CR-001", listingId: "GL-002", buyerId: "U004", status: "Accepted", date: "2026-07-16" },
    { id: "CR-002", listingId: "GL-001", buyerId: "U002", status: "Pending", date: "2026-07-18" },
    { id: "CR-003", listingId: "GL-008", buyerId: "U004", status: "Accepted", date: "2026-07-20" },
    { id: "CR-004", listingId: "GL-003", buyerId: "U004", status: "Declined", date: "2026-07-19" }
  ];
}

function save() {
  localStorage.setItem("gravityUsers", JSON.stringify(users));
  localStorage.setItem("gravityListings", JSON.stringify(listings));
  localStorage.setItem("gravityRequests", JSON.stringify(requests));
}

function loadData() {
  var savedUsers = localStorage.getItem("gravityUsers");
  var savedListings = localStorage.getItem("gravityListings");
  var savedRequests = localStorage.getItem("gravityRequests");

  if (savedUsers && savedListings && savedRequests) {
    users = JSON.parse(savedUsers);
    listings = JSON.parse(savedListings);
    requests = JSON.parse(savedRequests);
  } else {
    users = seedUsers();
    listings = seedListings();
    requests = seedRequests();
    save();
  }
}

function resetData() {
  users = seedUsers();
  listings = seedListings();
  requests = seedRequests();
  save();
  selectedCat = "All";
  showScreen("home");
  drawAll();
}

function getUser(id) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  return null;
}

function getListing(id) {
  for (var i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return listings[i];
    }
  }
  return null;
}

function me() {
  if (role === "buyer") {
    return getUser("U004");
  }
  if (role === "seller") {
    return getUser("U001");
  }
  return null;
}

function changeRole() {
  role = document.getElementById("role-select").value;
  drawMyListings();
  if (openListingId !== "") {
    openDetail(openListingId);
  }
}

function statusClass(status) {
  if (status === "Available") {
    return "status st-available";
  }
  if (status === "Reserved") {
    return "status st-reserved";
  }
  if (status === "Removed") {
    return "status st-removed";
  }
  return "status st-sold";
}

function showMessage(id, type, text) {
  var box = document.getElementById(id);
  box.className = "msg " + type;
  box.textContent = text;
  box.classList.remove("hidden");
}

function today() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return d.getFullYear() + "-" + month + "-" + day;
}

function newId(prefix, list) {
  var biggest = 0;
  for (var i = 0; i < list.length; i++) {
    var number = Number(list[i].id.split("-")[1]);
    if (number > biggest) {
      biggest = number;
    }
  }
  var next = biggest + 1;
  if (next < 10) {
    return prefix + "-00" + next;
  }
  if (next < 100) {
    return prefix + "-0" + next;
  }
  return prefix + "-" + next;
}

var screens = ["home", "browse", "sell", "mylistings", "detail", "dashboard", "register", "admin"];

function showScreen(name) {
  for (var i = 0; i < screens.length; i++) {
    var box = document.getElementById("screen-" + screens[i]);
    if (screens[i] === name) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
    var link = document.getElementById("link-" + screens[i]);
    if (link) {
      if (screens[i] === name) {
        link.className = link.className.indexOf("admin-link") >= 0 ? "admin-link active" : "active";
      } else {
        link.className = link.className.indexOf("admin-link") >= 0 ? "admin-link" : "";
      }
    }
  }
  if (name === "browse") {
    renderList();
  }
  if (name === "mylistings") {
    drawMyListings();
  }
  if (name === "dashboard") {
    drawDashboard();
  }
  if (name === "admin") {
    drawAdmin();
  }
  window.scrollTo(0, 0);
}

function fillCategoryOptions() {
  var select = document.getElementById("f-cat");
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement("option");
    option.textContent = categories[i];
    select.appendChild(option);
  }
}

function drawChips() {
  var box = document.getElementById("cat-chips");
  box.textContent = "";
  var all = ["All"];
  for (var i = 0; i < categories.length; i++) {
    all.push(categories[i]);
  }
  for (var j = 0; j < all.length; j++) {
    var chip = document.createElement("span");
    chip.textContent = all[j];
    if (all[j] === selectedCat) {
      chip.className = "cat selected";
    } else {
      chip.className = "cat";
    }
    chip.setAttribute("data-name", all[j]);
    chip.onclick = chipClicked;
    box.appendChild(chip);
  }
}

function chipClicked() {
  selectedCat = this.getAttribute("data-name");
  drawChips();
  renderList();
}

function sortedListings() {
  var list = [];
  for (var i = 0; i < listings.length; i++) {
    list.push(listings[i]);
  }
  var mode = document.getElementById("sort-select").value;
  for (var a = 0; a < list.length; a++) {
    for (var b = a + 1; b < list.length; b++) {
      var swap = false;
      if (mode === "low" && list[b].price < list[a].price) {
        swap = true;
      }
      if (mode === "high" && list[b].price > list[a].price) {
        swap = true;
      }
      if (mode === "new" && list[b].date > list[a].date) {
        swap = true;
      }
      if (swap) {
        var keep = list[a];
        list[a] = list[b];
        list[b] = keep;
      }
    }
  }
  return list;
}

function matchesFilters(item) {
  var text = document.getElementById("search").value.toLowerCase();
  var min = document.getElementById("price-min").value;
  var max = document.getElementById("price-max").value;
  var showSold = document.getElementById("show-sold").checked;

  if (item.status === "Removed") {
    return false;
  }
  if (item.status === "Sold" && showSold === false) {
    return false;
  }
  if (selectedCat !== "All" && item.cat !== selectedCat) {
    return false;
  }
  if (min !== "" && item.price < Number(min)) {
    return false;
  }
  if (max !== "" && item.price > Number(max)) {
    return false;
  }
  if (text !== "") {
    var haystack = (item.title + " " + item.area).toLowerCase();
    if (haystack.indexOf(text) < 0) {
      return false;
    }
  }
  return true;
}

function renderList() {
  var box = document.getElementById("cards");
  box.textContent = "";
  var list = sortedListings();
  var shown = 0;

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (matchesFilters(item) === false) {
      continue;
    }
    shown = shown + 1;

    var card = document.createElement("div");
    if (item.status === "Available") {
      card.className = "card";
    } else {
      card.className = "card dim";
    }
    card.setAttribute("data-id", item.id);
    card.onclick = cardClicked;

    var photo = document.createElement("div");
    photo.className = "card-photo";
    if (item.photo === "") {
      photo.textContent = "📦";
    } else {
      photo.textContent = item.photo;
    }

    var info = document.createElement("div");

    var title = document.createElement("h4");
    title.textContent = item.title;

    var line = document.createElement("p");
    line.textContent = item.cat + " · " + item.price + " THB · " + item.area;

    var badge = document.createElement("span");
    badge.className = statusClass(item.status);
    badge.textContent = item.status;

    var seller = getUser(item.sellerId);
    var sellerLine = document.createElement("p");
    if (seller.verified === true) {
      sellerLine.textContent = "Seller: " + seller.name + " ✓ verified";
    } else {
      sellerLine.textContent = "Seller: " + seller.name;
    }

    info.appendChild(title);
    info.appendChild(line);
    info.appendChild(badge);
    info.appendChild(sellerLine);
    card.appendChild(photo);
    card.appendChild(info);
    box.appendChild(card);
  }

  if (shown === 0) {
    document.getElementById("empty-msg").classList.remove("hidden");
  } else {
    document.getElementById("empty-msg").classList.add("hidden");
  }
}

function cardClicked() {
  openDetail(this.getAttribute("data-id"));
}

function postListing() {
  var title = document.getElementById("f-title").value;
  var cat = document.getElementById("f-cat").value;
  var price = document.getElementById("f-price").value;
  var cond = document.getElementById("f-cond").value;
  var area = document.getElementById("f-area").value;
  var photo = document.getElementById("f-photo").value;
  var desc = document.getElementById("f-desc").value;

  if (title === "" || cat === "" || price === "" || cond === "" || area === "") {
    showMessage("form-msg", "err", "Please complete required fields.");
    return;
  }
  if (Number(price) <= 0) {
    showMessage("form-msg", "err", "Price must be a positive number.");
    return;
  }

  var duplicate = false;
  for (var i = 0; i < listings.length; i++) {
    if (listings[i].status !== "Removed" && listings[i].title.toLowerCase() === title.toLowerCase() && listings[i].cat === cat) {
      duplicate = true;
    }
  }
  if (duplicate === true) {
    var ok = confirm("A listing with the same title and category already exists. Post anyway as a separate item?");
    if (ok === false) {
      showMessage("form-msg", "err", "Not posted, cancelled at the duplicate check.");
      return;
    }
  }

  var seller = me();
  if (seller === null) {
    seller = getUser("U001");
  }

  var item = {
    id: newId("GL", listings),
    title: title,
    cat: cat,
    price: Number(price),
    cond: cond,
    area: area,
    desc: desc,
    photo: photo,
    sellerId: seller.id,
    status: "Available",
    date: today(),
    soldDate: ""
  };
  listings.push(item);
  save();

  document.getElementById("f-title").value = "";
  document.getElementById("f-cat").value = "";
  document.getElementById("f-price").value = "";
  document.getElementById("f-cond").value = "";
  document.getElementById("f-area").value = "";
  document.getElementById("f-photo").value = "";
  document.getElementById("f-desc").value = "";

  showMessage("form-msg", "ok", "Listing posted successfully, status: Available. Buyers can now find it on the Browse page.");
  renderList();
}

function openDetail(id) {
  var item = getListing(id);
  if (item === null) {
    return;
  }
  openListingId = id;

  document.getElementById("d-title").textContent = item.title;
  document.getElementById("d-price").textContent = item.price;
  document.getElementById("d-cat").textContent = item.cat;
  document.getElementById("d-cond").textContent = item.cond;
  document.getElementById("d-area").textContent = item.area;
  document.getElementById("d-date").textContent = item.date;

  if (item.desc === "") {
    document.getElementById("d-desc").textContent = "";
  } else {
    document.getElementById("d-desc").textContent = item.desc;
  }
  if (item.photo === "") {
    document.getElementById("d-photo").textContent = "📦";
  } else {
    document.getElementById("d-photo").textContent = item.photo;
  }

  var seller = getUser(item.sellerId);
  document.getElementById("d-seller").textContent = seller.name;
  if (seller.verified === true) {
    document.getElementById("d-verified").textContent = "✓ Verified RSU student";
  } else {
    document.getElementById("d-verified").textContent = "verification pending";
  }

  var badge = document.getElementById("d-status");
  badge.textContent = item.status;
  badge.className = statusClass(item.status);

  var note = document.getElementById("d-status-note");
  if (item.status === "Reserved") {
    note.textContent = "Reserved means a buyer already agreed with the seller. It is not final, if the deal falls through it becomes Available again. You cannot request contact while an item is Reserved.";
  } else if (item.status === "Sold") {
    note.textContent = "This item has been sold.";
  } else {
    note.textContent = "";
  }

  var alreadySent = false;
  var user = me();
  if (user !== null) {
    for (var i = 0; i < requests.length; i++) {
      if (requests[i].listingId === id && requests[i].buyerId === user.id && requests[i].status !== "Declined") {
        alreadySent = true;
      }
    }
  }

  var button = document.getElementById("contact-btn");
  if (item.status !== "Available" || alreadySent === true || role === "admin") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
  if (alreadySent === true) {
    button.textContent = "Request sent";
  } else if (item.status === "Available") {
    button.textContent = "Request contact";
  } else {
    button.textContent = "Item " + item.status.toLowerCase();
  }

  document.getElementById("contact-explainer").classList.add("hidden");
  document.getElementById("contact-msg").classList.add("hidden");
  showScreen("detail");
}

function requestContact() {
  var user = me();
  if (user === null) {
    showMessage("contact-msg", "err", "Switch the demo role to Buyer or Seller to send a request.");
    return;
  }
  if (user.verified === false) {
    showMessage("contact-msg", "err", "Only verified RSU students can request contact.");
    return;
  }

  var item = getListing(openListingId);
  if (item === null || item.status !== "Available") {
    return;
  }
  if (item.sellerId === user.id) {
    showMessage("contact-msg", "err", "This is your own listing.");
    return;
  }

  var newRequest = {
    id: newId("CR", requests),
    listingId: item.id,
    buyerId: user.id,
    status: "Pending",
    date: today()
  };
  requests.push(newRequest);
  save();

  document.getElementById("contact-btn").disabled = true;
  document.getElementById("contact-btn").textContent = "Request sent";
  document.getElementById("contact-explainer").classList.remove("hidden");
  showMessage("contact-msg", "ok", "Contact request sent to the seller.");
}

function addRow(table, leftText, buttons) {
  var row = document.createElement("tr");
  var left = document.createElement("td");
  left.textContent = leftText;
  row.appendChild(left);

  if (buttons) {
    var right = document.createElement("td");
    for (var i = 0; i < buttons.length; i++) {
      right.appendChild(buttons[i]);
    }
    row.appendChild(right);
  }
  table.appendChild(row);
}

function makeButton(text, danger, action, dataId, dataValue) {
  var button = document.createElement("button");
  button.textContent = text;
  if (danger === true) {
    button.className = "row-btn danger";
  } else {
    button.className = "row-btn";
  }
  button.setAttribute("data-id", dataId);
  button.setAttribute("data-value", dataValue);
  button.onclick = action;
  return button;
}

function drawMyListings() {
  var user = me();
  var intro = document.getElementById("mylistings-intro");
  var itemTable = document.getElementById("my-listings-table");
  var requestTable = document.getElementById("my-requests-table");
  var sentTable = document.getElementById("my-sent-table");
  var badge = document.getElementById("req-badge");

  itemTable.textContent = "";
  requestTable.textContent = "";
  sentTable.textContent = "";
  badge.classList.add("hidden");

  if (user === null) {
    intro.textContent = "Switch the demo role to Buyer or Seller to see your own listings and requests. Admin manages the whole marketplace from the Admin view.";
    addRow(itemTable, "");
    addRow(requestTable, "");
    addRow(sentTable, "");
    return;
  }

  intro.textContent = "Signed in as " + user.name + " (demo). Update your own item statuses here, buyers see changes immediately.";

  var pending = 0;
  var incoming = 0;
  for (var i = 0; i < requests.length; i++) {
    var request = requests[i];
    var item = getListing(request.listingId);
    if (item === null || item.sellerId !== user.id) {
      continue;
    }
    incoming = incoming + 1;
    var buyer = getUser(request.buyerId);
    var text = buyer.name + " wants " + item.title + " [" + request.status + "]";
    if (request.status === "Accepted") {
      text = text + ", buyer contact: " + buyer.email;
    }
    if (request.status === "Pending") {
      pending = pending + 1;
      var accept = makeButton("Accept", false, acceptRequest, request.id, "");
      var decline = makeButton("Decline", true, declineRequest, request.id, "");
      addRow(requestTable, text, [accept, decline]);
    } else {
      addRow(requestTable, text);
    }
  }
  if (incoming === 0) {
    addRow(requestTable, "No contact requests for your items yet.");
  }
  if (pending > 0) {
    badge.textContent = pending + " pending";
    badge.classList.remove("hidden");
  }

  var mine = 0;
  for (var j = 0; j < listings.length; j++) {
    var own = listings[j];
    if (own.sellerId !== user.id || own.status === "Removed") {
      continue;
    }
    mine = mine + 1;
    var options = ["Available", "Reserved", "Sold"];
    var buttons = [];
    for (var k = 0; k < options.length; k++) {
      if (options[k] !== own.status) {
        buttons.push(makeButton("Mark " + options[k], false, changeMyStatus, own.id, options[k]));
      }
    }
    addRow(itemTable, own.title + " (" + own.price + " THB), " + own.status, buttons);
  }
  if (mine === 0) {
    addRow(itemTable, "You have no active listings, post one from Sell an item.");
  }

  var sent = 0;
  for (var m = 0; m < requests.length; m++) {
    if (requests[m].buyerId !== user.id) {
      continue;
    }
    sent = sent + 1;
    var sentItem = getListing(requests[m].listingId);
    var sentSeller = getUser(sentItem.sellerId);
    var sentText = sentItem.title + ", " + requests[m].status;
    if (requests[m].status === "Accepted") {
      sentText = sentText + ", seller contact: " + sentSeller.email;
    }
    if (requests[m].status === "Pending") {
      sentText = sentText + " (waiting for the seller)";
    }
    addRow(sentTable, sentText);
  }
  if (sent === 0) {
    addRow(sentTable, "You have not requested contact for any item.");
  }
}

function findRequest(id) {
  for (var i = 0; i < requests.length; i++) {
    if (requests[i].id === id) {
      return requests[i];
    }
  }
  return null;
}

function acceptRequest() {
  var request = findRequest(this.getAttribute("data-id"));
  request.status = "Accepted";
  save();
  drawMyListings();
  var buyer = getUser(request.buyerId);
  showMessage("my-msg", "ok", "Accepted, you and " + buyer.name + " can now see each other's RSU email. Nothing else is shared.");
}

function declineRequest() {
  var request = findRequest(this.getAttribute("data-id"));
  request.status = "Declined";
  save();
  drawMyListings();
  showMessage("my-msg", "ok", "Declined. No contact information was shared.");
}

function changeMyStatus() {
  var item = getListing(this.getAttribute("data-id"));
  var status = this.getAttribute("data-value");
  item.status = status;
  if (status === "Sold") {
    item.soldDate = today();
  }
  save();
  drawMyListings();
  showMessage("my-msg", "ok", item.title + " is now " + status + ".");
}

function register() {
  var name = document.getElementById("r-name").value;
  var email = document.getElementById("r-email").value.toLowerCase();

  if (name === "" || email === "") {
    showMessage("register-msg", "err", "Please complete required fields.");
    return;
  }
  if (name.length < 2) {
    showMessage("register-msg", "err", "Display name must be at least 2 characters.");
    return;
  }
  if (email.indexOf("@rsu.ac.th") < 0 || email.indexOf("@") === 0) {
    showMessage("register-msg", "err", "Registration rejected: only @rsu.ac.th email addresses are accepted.");
    return;
  }
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      showMessage("register-msg", "err", "This RSU email is already registered.");
      return;
    }
  }

  users.push({ id: newId("U", users), name: name, email: email, verified: false });
  save();
  document.getElementById("r-name").value = "";
  document.getElementById("r-email").value = "";
  showMessage("register-msg", "ok", "Registered. Next step: one-time in-person student ID check with the Gravity team. We look at your ID once and store nothing.");
}

function drawAdmin() {
  var userTable = document.getElementById("admin-users");
  var requestTable = document.getElementById("admin-requests");
  var listingTable = document.getElementById("admin-listings");
  userTable.textContent = "";
  requestTable.textContent = "";
  listingTable.textContent = "";

  var waiting = 0;
  for (var i = 0; i < users.length; i++) {
    if (users[i].verified === false) {
      waiting = waiting + 1;
      var verify = makeButton("Confirm in-person ID check → verify", false, verifyUser, users[i].id, "");
      addRow(userTable, users[i].name + " (" + users[i].email + ")", [verify]);
    }
  }
  if (waiting === 0) {
    addRow(userTable, "No accounts waiting for verification.");
  }

  for (var j = 0; j < requests.length; j++) {
    var request = requests[j];
    var item = getListing(request.listingId);
    var buyer = getUser(request.buyerId);
    var text = request.id + ": " + buyer.name + " wants " + item.title + " [" + request.status + "]";
    if (request.status === "Pending") {
      var accept = makeButton("Accept", false, adminAccept, request.id, "");
      var decline = makeButton("Decline", true, adminDecline, request.id, "");
      addRow(requestTable, text, [accept, decline]);
    } else {
      addRow(requestTable, text);
    }
  }

  for (var k = 0; k < listings.length; k++) {
    var listing = listings[k];
    if (listing.status === "Removed") {
      continue;
    }
    var options = ["Available", "Reserved", "Sold"];
    var buttons = [];
    for (var n = 0; n < options.length; n++) {
      if (options[n] !== listing.status) {
        buttons.push(makeButton("Set " + options[n], false, adminChangeStatus, listing.id, options[n]));
      }
    }
    buttons.push(makeButton("Remove", true, adminRemove, listing.id, ""));
    addRow(listingTable, listing.id + ": " + listing.title + " [" + listing.status + "]", buttons);
  }
}

function verifyUser() {
  var user = getUser(this.getAttribute("data-id"));
  user.verified = true;
  save();
  drawAdmin();
  showMessage("admin-msg", "ok", user.name + " is now verified. No ID data is stored, only a yes or no flag.");
}

function adminAccept() {
  var request = findRequest(this.getAttribute("data-id"));
  request.status = "Accepted";
  save();
  drawAdmin();
  var buyer = getUser(request.buyerId);
  var item = getListing(request.listingId);
  var seller = getUser(item.sellerId);
  showMessage("admin-msg", "ok", "Accepted. Contact revealed to both sides: " + buyer.email + " and " + seller.email + ". RSU emails only.");
}

function adminDecline() {
  var request = findRequest(this.getAttribute("data-id"));
  request.status = "Declined";
  save();
  drawAdmin();
  showMessage("admin-msg", "ok", "Request declined. No contact information was shared.");
}

function adminChangeStatus() {
  var item = getListing(this.getAttribute("data-id"));
  var status = this.getAttribute("data-value");
  item.status = status;
  if (status === "Sold") {
    item.soldDate = today();
  }
  save();
  drawAdmin();
  showMessage("admin-msg", "ok", item.title + " status updated to " + status + ".");
}

function adminRemove() {
  var item = getListing(this.getAttribute("data-id"));
  var ok = confirm("Remove listing " + item.title + "? This cannot be undone in the demo.");
  if (ok === false) {
    return;
  }
  item.status = "Removed";
  save();
  drawAdmin();
  showMessage("admin-msg", "ok", "Listing removed.");
}

function addStatCard(boxId, value, label) {
  var card = document.createElement("div");
  card.className = "stat";
  var big = document.createElement("b");
  big.textContent = value;
  var small = document.createElement("span");
  small.textContent = label;
  card.appendChild(big);
  card.appendChild(small);
  document.getElementById(boxId).appendChild(card);
}

function drawBars(boxId, labels, values) {
  var box = document.getElementById(boxId);
  box.textContent = "";
  var biggest = 1;
  for (var i = 0; i < values.length; i++) {
    if (values[i] > biggest) {
      biggest = values[i];
    }
  }
  for (var j = 0; j < labels.length; j++) {
    var row = document.createElement("div");
    row.className = "chart-row";

    var label = document.createElement("span");
    label.className = "chart-label";
    label.textContent = labels[j];

    var track = document.createElement("div");
    track.className = "chart-track";
    var bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.width = Math.round(values[j] / biggest * 100) + "%";
    track.appendChild(bar);

    var number = document.createElement("span");
    number.className = "chart-value";
    number.textContent = values[j];

    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(number);
    box.appendChild(row);
  }
}

function drawDashboard() {
  var total = 0;
  var available = 0;
  var reserved = 0;
  var sold = 0;
  var daysTotal = 0;
  var daysCount = 0;

  for (var i = 0; i < listings.length; i++) {
    var item = listings[i];
    if (item.status === "Removed") {
      continue;
    }
    total = total + 1;
    if (item.status === "Available") {
      available = available + 1;
    }
    if (item.status === "Reserved") {
      reserved = reserved + 1;
    }
    if (item.status === "Sold") {
      sold = sold + 1;
      if (item.soldDate !== "") {
        var start = new Date(item.date);
        var end = new Date(item.soldDate);
        var days = (end - start) / 86400000;
        daysTotal = daysTotal + days;
        daysCount = daysCount + 1;
      }
    }
  }

  var sellThrough = 0;
  if (total > 0) {
    sellThrough = Math.round(sold / total * 1000) / 10;
  }

  var topCategory = "";
  var topCount = 0;
  var categoryCounts = [];
  for (var c = 0; c < categories.length; c++) {
    var count = 0;
    for (var d = 0; d < listings.length; d++) {
      if (listings[d].status !== "Removed" && listings[d].cat === categories[c]) {
        count = count + 1;
      }
    }
    categoryCounts.push(count);
    if (count > topCount) {
      topCount = count;
      topCategory = categories[c];
    }
  }

  var accepted = 0;
  var decided = 0;
  for (var r = 0; r < requests.length; r++) {
    if (requests[r].status === "Accepted") {
      accepted = accepted + 1;
    }
    if (requests[r].status !== "Pending") {
      decided = decided + 1;
    }
  }
  var acceptRate = 0;
  if (decided > 0) {
    acceptRate = Math.round(accepted / decided * 1000) / 10;
  }

  var verified = 0;
  for (var u = 0; u < users.length; u++) {
    if (users[u].verified === true) {
      verified = verified + 1;
    }
  }

  document.getElementById("stat-cards").textContent = "";
  addStatCard("stat-cards", total, "Total listings");
  addStatCard("stat-cards", available, "Available");
  addStatCard("stat-cards", reserved, "Reserved");
  addStatCard("stat-cards", sold, "Sold");
  addStatCard("stat-cards", requests.length, "Contact requests");

  drawBars("cat-chart", categories, categoryCounts);
  drawBars("status-chart", ["Available", "Reserved", "Sold"], [available, reserved, sold]);

  var averageDays = "n/a";
  if (daysCount > 0) {
    averageDays = Math.round(daysTotal / daysCount * 10) / 10 + " days";
  }

  document.getElementById("metric-cards").textContent = "";
  addStatCard("metric-cards", total, "PM-01 Total listings");
  addStatCard("metric-cards", available + " / " + reserved + " / " + sold, "PM-02 Available / Reserved / Sold");
  addStatCard("metric-cards", sellThrough + "%", "PM-03 Sell-through rate");
  addStatCard("metric-cards", topCategory + " (" + topCount + ")", "PM-04 Top category");
  addStatCard("metric-cards", requests.length + " (" + acceptRate + "% accepted)", "PM-05 Contact requests");
  addStatCard("metric-cards", averageDays, "PM-06 Average time to Sold");
  addStatCard("metric-cards", verified + " / " + users.length, "PM-07 Verified users");

  document.getElementById("validation-cards").textContent = "";
  addStatCard("validation-cards", "10", "Testers (Lab 08 + Lab 13)");
  addStatCard("validation-cards", "93.3%", "PM-08 Task success (Lab 08)");
  addStatCard("validation-cards", "4.62 / 5", "Ease score (Lab 13)");
  addStatCard("validation-cards", "4.40 / 5", "Interest (Lab 08)");
}

function drawAll() {
  drawChips();
  renderList();
  drawMyListings();
  drawDashboard();
  drawAdmin();
}

function start() {
  loadData();
  fillCategoryOptions();
  drawAll();
}

window.onload = start;
