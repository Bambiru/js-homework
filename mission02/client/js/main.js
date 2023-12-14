(function () {
  const nav = getNode(".nav ul");
  let currentAudio;

  /* 이벤트 핸들러 함수 */
  function handleClick(e) {
    const li = e.target.closest("li");
    if (!li) return;
    const index = li.dataset.index;

    removeActiveClass(nav.children);
    addActiveClass(li);

    setAudio(index);
    setBgColor("body", index);
    setImage(".visual img", index);
    setNameText(".nickName", index);
  }

  /* isActive 함수 */
  function removeActiveClass(children) {
    const list = [...children];

    list.forEach((li) => {
      li.classList.remove("is-active");
    });
  }
  function addActiveClass(node) {
    node.classList.add("is-active");
  }
  /* 오디오 설정 함수 */
  function setAudio(index) {
    const audio = createAudio(index);
    playAudio(audio);
    adjustVolume(audio, index);
  }
  function createAudio(index) {
    let audio = new Audio(
      `./assets/audio/${data[index - 1].name.toLowerCase()}.m4a`
    );

    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = audio;
    return audio;
  }
  function playAudio(audio) {
    audio.play();
  }
  function adjustVolume(audio, index) {
    if (data[index - 1].name === "WADE" || data[index - 1].name === "GALE") {
      audio.volume = 0.2;
    }
  }

  /* background 변경 함수 */
  function setBgColor(node, index) {
    if (typeof node === "string") node = getNode(node);

    node.style.background = `
    linear-gradient(to bottom,${data[index - 1].color[0]},
      ${data[index - 1].color[1]})`;
  }

  /* img 변경 함수 */
  function setImage(node, index) {
    if (typeof node === "string") node = getNode(node);

    node.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
    node.alt = data[index - 1].alt;
  }

  /* 이름 변경 함수 */
  function setNameText(node, index) {
    if (typeof node === "string") node = getNode(node);
    node.textContent = data[index - 1].name;
  }

  /* 이벤트 위임 */
  nav.addEventListener("click", handleClick);
})();
