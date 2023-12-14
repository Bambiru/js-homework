function getNode(node) {
  if (typeof node === "string") {
    return document.querySelector(node);
  }
}
