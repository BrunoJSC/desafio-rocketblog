const btnMenu = document.getElementById("btn-menu");

function openMenu() {
  const menu_container = document.getElementById("menu-container");

  menu_container.classList.toggle("active");
}

btnMenu.addEventListener("click", openMenu);
console.log('a')