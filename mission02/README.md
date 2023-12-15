# mission02

## 엘리멘탈

- [x] 이벤트 위임을 이용한 이벤트 처리
- [x] 전역을 보호하기 위해 즉시실행함수(IIFE) 사용
- [x] 코드의 가독성을 위해 함수 분리

- [isActive 함수](#isactive-함수)
- [background 변경 함수](#background-변경-함수)
- [img 변경 함수](#img-변경-함수)
- [이름 변경 함수](#이름-변경-함수)
- [오디오 설정 함수](#오디오-설정-함수)

<table>
<tr>
      <td>앰버 EMBER</td>
      <td>웨이드 WADE</td>
      <td>클로드 CLOD</td>
      <td>게일 GALE</td>
</tr>
<tr>
      <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/0f0d0d13-37aa-41fd-bba3-406b917361ee" height="150px"/>
      </td>
      <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/3dce23d4-62c3-463b-bdad-e34b4ac78045" height="150px"/>
      </td>
      <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/f80a5246-e0ef-4c22-9649-0c9f5c5aff3e" height="150px"/>
      </td>
      <td>
      <img src="https://github.com/Bambiru/js-homework/assets/116716953/12f90260-8ca2-4072-97ef-71a51c4ae816" height="150px"/>
      </td>
</tr>
</table>

#### isActive 함수

##### isActiveClass

```js
const isActiveClass = (reset, add) => {
  resetActiveClass(reset);
  addActiveClass(add);
};
```

##### resetActiveClass

```js
const resetActiveClass = (children) => {
  const list = [...children];
  list.forEach((li) => li.classList.remove("is-active"));
};
```

##### addActiveClass

```js
const addActiveClass = (node) => node.classList.add("is-active");
```

---

#### background 변경 함수

##### setBgColor

```js
const setBgColor = (node, index) => {
  if (typeof node === "string") node = getNode(node);

  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1] || "#000";

  node.style.background = `linear-gradient(to bottom,${colorA},${colorB})`;
};
```

---

#### img 변경 함수

##### setImage

```js
const setImage = (node, index) => {
  if (typeof node === "string") node = getNode(node);

  node.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  node.alt = data[index - 1].alt;
};
```

---

#### 이름 변경 함수

##### setNameText

```js
const setNameText = (node, index) => {
  if (typeof node === "string") node = getNode(node);

  node.textContent = data[index - 1].name;
};
```

---

#### 오디오 설정 함수

##### setAudio

```js
const setAudio = (index) => {
  const audio = createAudio(index);
  playAudio(audio);
  adjustVolume(audio, index);
};
```

##### createAudio

```js
const createAudio = (index) => {
  let audio = new Audio(
    `./assets/audio/${data[index - 1].name.toLowerCase()}.m4a`
  );

  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = audio;
  return audio;
};
```

##### playAudio

```js
const playAudio = (audio) => audio.play();
```

##### adjustVolume

```js
const adjustVolume = (audio, index) => {
  if (data[index - 1].name === "WADE" || data[index - 1].name === "GALE")
    audio.volume = 0.2;
};
```
