function RedirectToService() {
  var username = sessionStorage.getItem("username");
  if (username) {
    window.location.href = "../booking.html";
  } else {
    window.location.href = "../login.html";
  }
}
function GoBack() {
  window.history.back();
}
