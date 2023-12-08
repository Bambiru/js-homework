const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const selector = (select) => document.querySelector(select);

function validation(select, validationFn) {
  let inputElement = selector(select);

  function handleInput() {
    validationFn(this.value)
      ? inputElement.classList.remove("is--invalid")
      : inputElement.classList.add("is--invalid");
  }
  inputElement.addEventListener("input", handleInput);
}

const inputs = [
  { selector: "#userEmail", validationFn: emailReg },
  { selector: "#userPassword", validationFn: pwReg },
];

inputs.forEach(({ selector, validationFn }) =>
  validation(selector, validationFn)
);

const handleLoginClick = (e) => {
  e.preventDefault();

  user.id === selector("#userEmail").value
    ? user.pw === selector("#userPassword").value
      ? (location.href = "welcome.html")
      : alert("비밀번호를 확인해주세요")
    : alert("이메일을 확인해주세요");
};

selector(".btn-login").addEventListener("click", handleLoginClick);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
