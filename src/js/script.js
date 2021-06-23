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