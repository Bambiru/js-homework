(function () {
  const nav = getNode(".nav ul");
  let currentAudio;

  /* 이벤트 핸들러 함수 */
  const handleClick = (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const index = li.dataset.index;

    isActiveClass(nav.children, li);
    setBgColor("body", index);
    setImage(".visual img", index);
    setNameText(".nickName", index);
    setAudio(index);
  };
  /* isActive 함수 */
  const isActiveClass = (reset, add) => {
    resetActiveClass(reset);
    addActiveClass(add);
  };
  const resetActiveClass = (children) => {
    const list = [...children];
    list.forEach((li) => li.classList.remove("is-active"));
  };
  const addActiveClass = (node) => node.classList.add("is-active");

  /* background 변경 함수 */
  const setBgColor = (node, index) => {
    if (typeof node === "string") node = getNode(node);

    const colorA = data[index - 1].color[0];
    const colorB = data[index - 1].color[1] || "#000";

    node.style.background = `linear-gradient(to bottom,${colorA},${colorB})`;
  };
  /* img 변경 함수 */
  const setImage = (node, index) => {
    if (typeof node === "string") node = getNode(node);

    node.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
    node.alt = data[index - 1].alt;
  };
  /* 이름 변경 함수 */
  const setNameText = (node, index) => {
    if (typeof node === "string") node = getNode(node);

    node.textContent = data[index - 1].name;
  };
  /* 오디오 설정 함수 */
  const setAudio = (index) => {
    const audio = createAudio(index);
    playAudio(audio);
    adjustVolume(audio, index);
  };
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
  const playAudio = (audio) => audio.play();

  const adjustVolume = (audio, index) => {
    if (data[index - 1].name === "WADE" || data[index - 1].name === "GALE")
      audio.volume = 0.2;
  };
  /* 이벤트 리스너 */
  nav.addEventListener("click", handleClick);
})();
