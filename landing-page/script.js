function countVisit(key) {
  var saved = localStorage.getItem(key);
  var count = 0;
  if (saved !== null) {
    count = Number(saved);
  }
  count = count + 1;
  localStorage.setItem(key, count);
  return count;
}

function countMeIn() {
  var count = countVisit("gravityInterest");
  var button = document.getElementById("interest-btn");
  var message = document.getElementById("interest-msg");
  button.disabled = true;
  button.textContent = "Thanks, you're counted!";
  message.textContent = "Interest recorded in this browser (demo counter: " + count + "). No personal data was collected.";
  message.classList.remove("hidden");
}

function countDemoClick() {
  countVisit("gravityCtaClicks");
}

function startPage() {
  countVisit("gravityViews");
  document.getElementById("cta-demo").onclick = countDemoClick;
  document.getElementById("cta-demo2").onclick = countDemoClick;
}

window.onload = startPage;
