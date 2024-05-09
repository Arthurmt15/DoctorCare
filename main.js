window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  ShowNavOnScroll()
  ShowBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const MenuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  MenuElement.classList.remove('active')
  if (sectionBoundaries) {
    MenuElement.classList.add('active')
  }
}

function ShowNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll')
  }
}

function ShowBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img, 
#home .stats,
#services,
#services header,
#services .cards,
#about, 
#about header, 
#about .content, 
footer, fotter .logo,
footer p, fotter .social-links`)
