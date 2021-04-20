//全屏
function fullScreen():void {
  const element = document.documentElement;
  if (element.requestFullscreen) {
      element.requestFullscreen();
  } 
//   else if (element.msRequestFullscreen) {
//       element.msRequestFullscreen();
//   } else if (element.mozRequestFullScreen) {
//       element.mozRequestFullScreen();
//   } else if (element.webkitRequestFullscreen) {
//       element.webkitRequestFullscreen();
//   }
}

//退出全屏 
function exitFullscreen():void {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } 
//   else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//   } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//   } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//   }
}

// 判断页面是否在移动端浏览页面
function isMobileFun(){
  let info = navigator.userAgent;
  let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
  for(let i = 0; i < agents.length; i++){
      if(info.indexOf(agents[i]) >= 0) return true;
  }
  let width = window.innerWidth || document.documentElement.clientWidth
  if (width < 1000) { return true }
  return false;
}
export {
  fullScreen,
  exitFullscreen,
  isMobileFun
}