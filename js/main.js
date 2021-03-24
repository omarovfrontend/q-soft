// ждем загрузки документов
$(document).ready(function () {
  const menuToggleBtn = $('.main-menu__toggle');
  const menuList = $('.main-menu__list');
  const popularProductSlider = $(".popular-products-slider");

  popularProductSlider.lightSlider({
    item: 4,
    loop: true,
    auto: true,
    pause: 5000,
    pager: false,
    controls: false,

    responsive : [
      {
        breakpoint: 1200,
        settings: {
          item: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          item: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          item: 1,
        }
      }
    ]
  });

  menuToggleBtn.on('click', function () {
    menuList.stop().slideToggle();
  });

  // ставим таймер и через секунду после загрузки страницы
  setTimeout(function() {
    // берем Боди и ставим ему класс, который изменит стили
    document.body.classList.add('page-loaded')
  }, 1000);
});
