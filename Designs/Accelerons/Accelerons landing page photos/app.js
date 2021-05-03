let overlayText = document.querySelector('.landing-text');

window.onscroll = () => {
  let pos = window.scrollY;
  overlayText.style.left = `${350 + pos / 6}px`;
  //   overlayText.style.bottom += `${300 + pos}px`;
};
