let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let errorMess = document.querySelector(".error");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent =
      "❌ Invalid email format";
    errorMess.style.display = "initial";
  }
  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "❌ Password must be 8 chars, include uppercase, lowercase, number, and special char";
    errorMess.style.display = "initial";
  }
  console.log(emailans);
  console.log(passwordans);
});
