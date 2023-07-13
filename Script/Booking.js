const formE = document.querySelector(".form");

if (formE) {
  formE.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new formData(formE);
    const data = Object.fromEntries(formData);

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
}

function validateAppointmentDate() {
  var appointmentDate = new Date(
    document.getElementById("appointmentDate").value
  );
  var today = new Date();

  if (appointmentDate < today) {
    document.getElementById("dateErrorMessage").textContent =
      "*Please select a future date.";
  } else {
    document.getElementById("dateErrorMessage").textContent = "";
  }
}
