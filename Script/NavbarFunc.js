function addItemAtStarting(user) {
  var navbarul = document.querySelector("#navbarul");
  var newItem = document.createElement("li");
  newItem.textContent =
    "Hi" + " " + user.charAt(0).toUpperCase() + user.slice(1);
  navbarul.insertBefore(newItem, navbarul.firstChild);
}

function addItem(text, url, n) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = url;
  a.textContent = text;
  li.appendChild(a);
  var position = n;
  var targetElement = navbarul.querySelector(":nth-child(" + position + ")");
  navbarul.insertBefore(li, targetElement);
}

function replaceItem(text, url, n) {
  var position = n;
  var targetElement = document.querySelector(
    "#navbarul li:nth-child(" + position + ")"
  );
  var replaceItem = document.createElement("li");
  var replaceItem_a = document.createElement("a");
  replaceItem_a.href = url;
  replaceItem_a.textContent = text;
  replaceItem.appendChild(replaceItem_a);
  targetElement.replaceWith(replaceItem);

  replaceItem_a.onclick = function () {
    sessionStorage.clear();
    alert("Logged out successfully");
  };
}

var username = sessionStorage.getItem("username");
if ("user1" === username || "user2" === username) {
  window.onload = function () {
    addItemAtStarting(username);
    addItem("Services", "/services.html", 3);
    addItem("Booking", "/booking.html", 4);
    replaceItem("Logout", "/index.html", 5);
  };
}
if ("Admin" === username) {
  window.onload = function () {
    addItemAtStarting(username);
    addItem("Reports", "/reports.html", 3);
    replaceItem("Logout", "/index.html", 4);
  };
}
