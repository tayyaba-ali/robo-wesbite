const icon = document.getElementById('hamburger');
const menu = document.getElementById('menu');



// icon.addEventListener('click', () => {
// 	menu.classList.toggle('hidden');
// 	menu.classList.toggle('block');
// 	topBar.classList.toggle('top-bar-active');
// 	middleBar.classList.toggle('middle-bar-active');
// 	bottomBar.classList.toggle('bottom-bar-active');
// });

icon.addEventListener('click', () => {
	icon.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
});