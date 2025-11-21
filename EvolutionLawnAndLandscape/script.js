function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

document.documentElement.style.setProperty(
  '--scrollbar-width',
  getScrollbarWidth() + 'px'
);

function openPage() {
  window.open("","_self");
}