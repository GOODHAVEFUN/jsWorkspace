let input1 = document.querySelector('.input-test1');
let input2 = document.querySelector('.input-test2');
let form = document.querySelector('form');
// console.log(input1);

//해당 요소가 포커스되면 이벤트 발생(선택되면)
input1.addEventListener('focus', () => {
console.log('focus~~');
});

//blur 포커스를 잃으면 발생하는 이벤트
input1.addEventListener('blur', () => {
console.log('blur~~');
});

//keydown 키보드를 누르는 동안 계속 발생
input2.addEventListener('keydown', () => {
console.log('down');
});

// keypress 키보드를 누르는 순간 발생
input2.addEventListener('keypress', () => {
console.log('press');
});

// keyup 키보드를 때는 순간 발생
input2.addEventListener('keyup', () => {
console.log('keyup');
});

//change 요소의 상태가 변경되면 이벤트 발생
input2.addEventListener('change', () => {
console.log(input2.value);
});

// submit 이벤트는 form태그에 걸어준다.
form.addEventListener('submit', () => {
// submit 버튼은 페이지가 이동되므로 콘솔창 확인이 어려움
console.log('submit~~');

alert('submit~~~');
});

let colors = document.querySelectorAll('.color');
let foods = document.querySelectorAll('.food');

// console.log(colors);
// console.log(foods);
for (let i = 0; i < colors.length; i++) {
colors[i].addEventListener('change', () => {
    console.log('change!!');
});
}

// 함수로 만들어서 이벤트 부여해보기
function radioEvent(element) {
element.addEventListener('change', () => {
    console.log('change~~~!@!@!@');
});
}

for (let i = 0; i < foods.length; i++) {
    radioEvent(foods[i]);
}