const modal = document.querySelector('.cartDrop');
const closeBtn = document.querySelector('.cartClose');
const showBtn = document.querySelector('.shoppingCar__img');


closeBtn.addEventListener('click', function () {
    modal.classList.remove('animate__animated', 'animate__fadeIn');
    modal.classList.add('animate__animated', 'animate__fadeOut');
    modal.classList.add('Hidden');
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('Hidden');
    modal.classList.add('animate__animated', 'animate__fadeIn');
});