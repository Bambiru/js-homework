# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] email 정규표현식을 사용한 validation

```js
let email = "";
userEmail.addEventListener("input", (event) => {
  email = event.target.value;

  if (emailReg(email)) {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
});
```

<table>
  <tr>
    <td>
      이메일 형식 X
    </td>
    <td>
      이메일 형식 O
    </td>

  </tr>
  <tr>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/920831e9-eccf-42b0-98f3-90066c33b49d">
    </td>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/e15bdd69-8ad7-466c-a43e-b74690e45b0a">
    </td>

  </tr>
</table>

- [x] pw 정규표현식을 사용한 validation

```js
let password = "";
userPassword.addEventListener("input", (event) => {
  password = event.target.value;

  if (pwReg(password)) {
    userPassword.classList.remove("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
});
```

<table>
  <tr>
    <td>
      비밀번호 형식 X
    </td>
    <td>
      비밀번호 형식 O
    </td>

  </tr>
  <tr>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/abae232f-6a77-48ab-a9e0-7a6f00df99b5">
    </td>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/8d0942cb-290c-4e51-987d-8c4a57d8778b">
    </td>

  </tr>
</table>

- [x] 로그인 버튼을 클릭시 조건처리

```js
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (user.id === email) {
    if (user.pw === password) location.href = "welcome.html";
    else {
      alert("비밀번호를 확인해주세요");
    }
  } else {
    alert("이메일을 확인해주세요");
  }
});
```

<table>
  <tr>
    <td>
      이메일 불일치
    </td>
    <td>
      비밀번호 불일치
    </td>
    <td>
      이메일, 비밀번호 일치
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/177f2546-60e5-412a-a793-2ee2026636e5">
    </td>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/8766f696-1eb4-48de-98f8-846ed1b3c82c">
    </td>
    <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/7ee65f92-e289-4b52-8da2-48b1af13b764">
    </td>
  </tr>
</table>

---

### 코드 리팩토링

- [x] `userValidation` 함수 내에서 정규식 체크
- [x] 맞다면 `classList.remove`를 이용하여 `is--invalid`를 제거한다.
- [x] 틀렸다면 `classList.add`를 이용하여 `is--invalid`를 추가하여 에러메세지를 나타낸다.

```js
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
```

- [x] `loginCheck` 함수 내에서 로그인 처리
- [x] `handleLoginClick`함수를 이용하여 아이디와 비밀번호를 체크한다.
- [x] 입력한 값과 `user` 객체 안의 `id`와 `pw` 와 비교한다.
- [x] 아이디가 일치하지 않을 시, 경고메세지를 띄운다.
- [x] 패스워드가 일치하지 않을 시, 경고메세지를 띄운다.
- [x] 일치한다면, `location.href`를 이용하여 `welcome.html`로 이동한다.

```js
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
```

---

- 중복되는 부분들을 리팩토링하며 조금씩 간결하게 만들어보니 실력이 많이 늘었다는 걸 느낀다.
- 힌트를 많이 주신덕에 해결했지만,
  나중에는 혼자서 다시 이 코드를 아무렇지 않게 구현할 수 있었으면 좋겠다.
