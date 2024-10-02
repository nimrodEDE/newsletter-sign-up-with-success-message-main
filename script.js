const container = document.getElementById("container");
const success = document.getElementById("success");
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const dismiss = document.getElementById("dismiss");
const insertEmail = document.getElementById("insertEmail");
const errMsg = document.getElementById("errMsg");

function callError() {
  emailInput.classList.add("custom-placeholder");
  emailInput.style.border = "var(--Tomato) 1px solid";
  emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.178)";
  errMsg.classList.add("error");
  errMsg.classList.remove("hidden");
}

function handleSubmit(e) {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
  const email = document.getElementById("email").value;
  if (!email || !emailRegex.test(email)) {
    callError();
    console.log("found error");
  } else {
    insertEmail.innerHTML = email;
    container.classList.toggle("hidden");
    success.classList.toggle("hidden");
    // returning to starting point
    errMsg.classList.remove("error");
    emailInput.classList.remove("custom-placeholder");
    emailInput.style.border = "var(--Dark-Slate-Grey) 1px solid";
    emailInput.style.backgroundColor = "#fff";
    errMsg.classList.add("hidden");
  }
}

form.addEventListener("submit", handleSubmit);

dismiss.addEventListener("click", () => {
  container.classList.toggle("hidden");
  success.classList.toggle("hidden");
});
