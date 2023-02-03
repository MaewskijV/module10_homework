const btn = document.querySelector('.j-btn-test');
btn.addEventListener('click', () => {
  alert(`Определение размеров экрана: Ширина: ${window.screen.width}; Высота: ${window.screen.height}`);
  alert(`Определение размеров области просмотра: Ширина: ${document.documentElement.clientWidth}; Высота: ${document.documentElement.clientHeight}`);
  alert(`Определение размеров области просмотра + скролл: Ширина: ${window.innerWidth}; Высота: ${window.innerHeight}`);
})