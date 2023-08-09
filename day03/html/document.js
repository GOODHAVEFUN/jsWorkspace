//HTML 요소를 ID 가져오기
let title = document.getElementById('title');
console.log(title);

//HTML 요소를 class 가져오기
let divBox = document.getElementsByClassName('div-box');
//class 요소를 가져오면 여러 요소가 선택되므로 배열과 유사한 형태로 가져오게 된다

//가져온 요소에서 특정 요소만 사용하고 싶다면 인덱스를 사용한다
console.log(divBox[0]);

//querySelector를 사용하면 좀 더 자유롭게 선택자를 사용하여 요소를 가져올 수 있다
let bgGreen = document.querySelector("#bg-green");

//querySelectorAll은 여러 요소를 가져온다
let divBorder = document.querySelectorAll(".div-border");