# mission02

## 엘리멘탈

- [x] 이벤트 위임을 이용한 이벤트 처리
      // 3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
      // 1. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )

// `` jsx
//     elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
//      ``

// b. 이미지 변경

// `` jsx
//     target.src = `./assets/${data.name}.jpeg`;
//     target.alt = data.alt;
//      ``

// 4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

// `jsx
//     target.textContent = data.name;
//     `

// 5. 함수를 분리시켜주세요.
// 1. `setBgColor` 함수
// 2. `setImage` 함수
// 3. `setNameText` 함수
// 6. 가독성이 좋은 코드로 리팩토링 해주세요.
