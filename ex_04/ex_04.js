document.addEventListener("DOMContentLoaded", function () {
  function houdini() {
    const sentences = document.querySelectorAll("p");
    sentences.forEach(function (paras) {
      paras.style.transition = "0.5s";
      paras.style.opacity = "1s";
    });
    setTimeout(() => {
      sentences.forEach(function (paras) {
        paras.style.opacity = "0";
      });
    }, 1000);
  }
  houdini();
});
