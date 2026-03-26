// 페이지들을 찾습니다
const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function rotatePage() {
    console.log("페이지 전환 중... 현재 인덱스:", currentIndex);
    
    // 모든 페이지 숨기기
    pages.forEach(page => page.classList.remove('active'));
    
    // 다음 페이지 보여주기
    pages[currentIndex].classList.add('active');
    
    // 다음 인덱스로 (0, 1, 2, 3 반복)
    currentIndex = (currentIndex + 1) % pages.length;
}

// 5초마다 일단 빠르게 넘겨서 확인해봅시다 (나중에 15초로 수정)
setInterval(rotatePage, 5000);

// 처음에 한 번 실행
rotatePage();
