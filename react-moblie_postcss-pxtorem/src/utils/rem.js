// 控制10rem占全屏
function adapter() {
  const dip = document.documentElement.clientWidth;
  const rootFontSize = dip / 10;
  document.documentElement.style.fontSize = rootFontSize + 'px';
}
adapter()
window.onresize = adapter