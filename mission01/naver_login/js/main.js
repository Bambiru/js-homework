// 사용자 정보
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 요소 선택 함수
const selector = (select) => document.querySelector(select);

// validation 함수
const userValidation = () => {
  // Validation: 이메일 검증
  function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  }

  // Validation: 비밀번호 검증
  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }

  // 이벤트 핸들러: 입력값 확인 후 클래스 변경
  function handleInput(validator) {
    return function () {
      validator(this.value)
        ? this.classList.remove("is--invalid")
        : this.classList.add("is--invalid");
    };
  }

  // 입력값 확인 이벤트 추가
  function validation(select, validator) {
    const inputElement = selector(select);
    inputElement.addEventListener("input", handleInput(validator));
  }

  // 입력 필드와 검증 함수 매핑
  const inputs = [
    { selector: "#userEmail", validator: emailReg },
    { selector: "#userPassword", validator: pwReg },
  ];

  // 각 입력 필드에 검증 이벤트 추가
  inputs.forEach(({ selector, validator }) => validation(selector, validator));
};
userValidation();

// 로그인 함수
const loginCheck = () => {
  // 에러 메시지
  const EMAIL_ERROR_MSG = "이메일을 확인해주세요";
  const PASSWORD_ERROR_MSG = "비밀번호를 확인해주세요";

  // 웰컴 페이지로 이동
  const redirectToWelcome = () => (location.href = "welcome.html");

  // 알림 메시지 출력
  const alertMessage = (msg) => alert(msg);

  // 이벤트 핸들러: 로그인 버튼 클릭
  const handleLoginClick = (e) => {
    e.preventDefault();

    const userEmail = selector("#userEmail").value;
    const userPassword = selector("#userPassword").value;

    if (user.id !== userEmail) {
      alertMessage(EMAIL_ERROR_MSG);
      return;
    }

    if (user.pw !== userPassword) {
      alertMessage(PASSWORD_ERROR_MSG);
      return;
    }

    redirectToWelcome();
  };

  // 로그인 버튼 클릭 이벤트 추가
  selector(".btn-login").addEventListener("click", handleLoginClick);
};

loginCheck();
