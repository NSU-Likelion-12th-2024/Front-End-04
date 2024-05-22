const id = document.querySelector("#id");
const twoId = document.querySelector("#two-id");
const user = document.querySelector(".fa-user");
const selectEmail = document.querySelector("#select-email");
const emailAdress = document.querySelector("#email-adress");
const formUlOne = document.querySelector("#form-ul-one");
const myId = document.createElement("li");
function faceid(event) {
  const tid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (event.target.value === "") {
    myId.textContent = "아이디는 필수 정보입니다.";
    myId.style.color = "red";
    user.style.color = "red";
    formUlOne.appendChild(myId);
    id.classList.add("alert-sim");
  } else if (tid.test(event.target.value) === false) {
    myId.textContent = "아이디 양식에 맞춰주세요.";
    myId.style.color = "red";
    passIcon.style.color = "red";
    user.appendChild(myId);
    id.classList.add("alert-sim");
  } else {
    myId.remove();
    user.style.color = "black";
    id.classList.remove("alert-sim");
  }
}
twoId.addEventListener("blur", faceid);

const inputPass = document.querySelector("#form-pass-input");
const passIcon = document.querySelector(".fa-lock");
const eyeIcon = document.querySelector(".eyeIcon");
const passBorder = document.querySelector("#form-pass");
const formUl = document.querySelector("#form-ul");
const alertPass = document.createElement("li");
function PWD_CHECK(event) {
  const regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (event.target.value === "") {
    alertPass.textContent = "비밀번호는 필수 정보입니다.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";
    formUl.appendChild(alertPass);
    passBorder.classList.add("form-alert");
  } else if (regPass.test(event.target.value) === false) {
    alertPass.textContent = "비밀번호 양식에 맞춰주세요.";
    alertPass.style.color = "red";
    passIcon.style.color = "red";
    formUl.appendChild(alertPass);
    passBorder.classList.add("form-alert");
  } else {
    alertPass.remove();
    passIcon.style.color = "black";
    passBorder.classList.remove("form-alert");
  }
}
eyeIcon.addEventListener("click", function () {
  if (inputPass.type === "password") {
    inputPass.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    inputPass.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
});

inputPass.addEventListener("blur", PWD_CHECK);
// 여기까진 배운거
