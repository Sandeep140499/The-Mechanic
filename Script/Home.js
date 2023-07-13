var url = window.location.href;

var menuItems = document.querySelectorAll("nav a");

menuItems.forEach(function (item) {
  if (item.href == url) {
    item.classList.add("current");
  }
});

function redirect() {
  window.location.href = "/services.html";
}
