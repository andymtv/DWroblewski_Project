document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.container--cookies');
  const bannerBtn = banner.querySelector('.btn-close');

  banner.style.bottom = `-${banner.scrollHeight+30}px`;

  setTimeout(() => {
    banner.classList.remove('hide');
    banner.classList.add('show');
    banner.style.bottom = '0';
  }, 2000);

  bannerBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    banner.classList.add('hide');
    banner.style.bottom = `-${banner.scrollHeight}px`;
  })
})



window.addEventListener('load', function () {
  const mainContainer = $('.main-wrapper');
  let scale = 1;
  function changeSize(el, scale) {
    if(window.innerWidth >= 1024) {
      if (el[0].getBoundingClientRect().height + $('.section--2_main-wrapper--2')[0].getBoundingClientRect().height + 30 >= window.innerHeight) {
        scale = scale - 0.01;
        el.css('transform', `scale(${scale})`)
        changeSize(el, scale);
      } else {
        el.css('margin-top', `-${el[0].getBoundingClientRect().top}px`)
      }
    } else {
      if (el[0].getBoundingClientRect().height >= window.innerHeight) {
        scale = scale - 0.01;
        el.css('transform', `scale(${scale})`)
        changeSize(el, scale);
      } else {
        el.css('margin-top', `-${el[0].getBoundingClientRect().top}px`)
      }
    }
    
  }

  function orphans() {
    $('.orphan-chars').each(function () {
      $(this).html($(this).html().replace(/\s([A-Za-z])\s([A-Za-z])\s/g, ' $1&nbsp;$2&nbsp;'));
      $(this).html($(this).html().replace(/\s([A-Za-z])\s/g, ' $1&nbsp;'));
      $(this).html($(this).html().replace(/\(([A-Za-z])\s/g, '($1&nbsp;'));
      $(this).html($(this).html().replace(/\)([A-Za-z])\s/g, ')$1&nbsp;'));
      $(this).html($(this).html().replace(/([0-9])\s([0-9])/g, '$1&nbsp;$2'));
      $(this).html($(this).html().replace(/\sr.\s/g, '&nbsp;r. '));
      $(this).html($(this).html().replace(/\szł/g, '&nbsp;zł'));
      $(this).html($(this).html().replace(/\sPLN/g, '&nbsp;PLN'));
    });
  }

  changeSize(mainContainer, scale)
  orphans();
});