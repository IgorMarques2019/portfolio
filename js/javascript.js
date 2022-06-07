const iconMenu = document.querySelector('.menu-toggle')

// Quando tiver na largura mobile ativa o icone
if (window.matchMedia('(max-width:800px').matches) {
  iconMenu.setAttribute('data-menuToggle', "ativo")
} else {
  iconMenu.setAttribute('data-menuToggle', "inativo")
}

const linksMenu = document.querySelectorAll('header a');
let clickCount = 0;
linksMenu.forEach((item) => {
  item.addEventListener('click', function () {
    toggleMenu()
  })

})


function toggleMenu() {
  clickCount++;
  console.log(clickCount)
  const menuAtive = document.querySelector("header")
  if (clickCount == 1) {
    iconMenu.setAttribute('src', "./imgs/icons/menu-open.png")
    menuAtive.setAttribute("data-menu", 'ativo')
  } else if (clickCount >= 2) {
    clickCount = 0;
    iconMenu.setAttribute('src', "./imgs/icons/menu-hidden.png")
    menuAtive.setAttribute("data-menu", 'inativo')
  }
}