// load 이벤트는 페이지 정보를 모두 읽어왔을때 발생한다
// window.onload = () => {
//     alert('로드이벤트 발생!');
// };

// window.addEventListener('load', () => {
//     alert('로드');
// });

let main = document.querySelector('main');
// let color = main.style.backgroundColor;
let color = window.getComputedStyle(main).backgroundColor;
//getCoumtedStyle(요소) : DOM 요소의 현재 계산된 스타일 가져오는 함수

window.addEventListener('scroll', () => {
    //scrollY 프로퍼티는 현재 스크롤의 y축 위치를 가지고 있다
    let scrollY = window.scrollY;
    
    if(scrollY > 50){
        main.style.backgroundColor = 'gold';
    } else if(scrollY > 20) {
        main.style.backgroundColor = 'blue';
    } else if(scrollY > 10) {
        main.style.backgroundColor = 'green';
    } else{
        main.style.backgroundColor = color;
    }
});