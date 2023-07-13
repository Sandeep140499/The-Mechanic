function validation(event) {
  event.preventDefault();
  fetch(`users.json`)
    .then((response) => response.json())
    .then((data) => {
      var authenticatedUser = checkdata(data);
      if (authenticatedUser) {
        alert("logged in successfully");
        sessionStorage.setItem(
          "username",
          document.getElementById("username").value
        );
        window.location.href = "/index.html";
      } else {
        alert("invalid credentials");
      }
      function checkdata(data) {
        var inputusername = document.getElementById("username").value;
        var inputpassword = document.getElementById("password").value;
        for (key in data) {
          var user = data[key];
          if (
            inputusername === user.username &&
            inputpassword === user.password
          ) {
            return user;
          }
        }
      }
    })
    .catch((error) => console.log(error));
}
