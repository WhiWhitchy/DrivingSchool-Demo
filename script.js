var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints:{
        599:{
            slidesPerView: 3
        }
    }
  });

  AOS.init();

  const navMenu = document.querySelector(".nav_menu")
  const navMenuOpen = document.querySelector('.open_btn')
  const navMenuClose = document.querySelector('.close_btn')

  navMenuOpen.addEventListener('click', () => {
    navMenu.style = 'display: flex'
    navMenuOpen.style = 'display: none'
    navMenuClose.style = 'display: inline-block'
  })
  navMenuClose.addEventListener('click', () => {
    navMenu.style = 'display: none'
    navMenuOpen.style = 'display: inline-block'
    navMenuClose.style = 'display: none'
  })
