const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function showNextPage() {
    pages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % pages.length;
    pages[currentIndex].classList.add('active');
}

// 15초(15000ms)마다 실행
setInterval(showNextPage, 15000);
