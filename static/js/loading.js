window.addEventListener('DOMContentLoaded', function () {
  var spinnerContainer = document.getElementById('spinner-container');

  // 在指定时间后隐藏加载指示器
  setTimeout(function () {
    spinnerContainer.style.display = 'none';
  }, 1200);
});