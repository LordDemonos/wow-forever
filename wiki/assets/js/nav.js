(function () {
  var menu = document.querySelector(".specs");
  if (!menu) return;

  document.addEventListener("click", function (event) {
    if (!menu.open || menu.contains(event.target)) return;
    menu.open = false;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || !menu.open) return;
    menu.open = false;
  });
})();
