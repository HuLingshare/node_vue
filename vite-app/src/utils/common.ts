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

export {
  fullScreen,
  exitFullscreen
}