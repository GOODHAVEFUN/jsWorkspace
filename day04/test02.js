//3) 콜백함수
//즉시실행함수
(function () {
    console.log("안녕하세요");
})();

(function (a, b){
    console.log(a + b);
})(10, 1);

(function (a, b){
    console.log(a + b);
})('안녕', '하세요');

//5) 화살표함수
let arrow = () => console.log('javascript');

arrow();

let arrow2 = (a, b) => console.log(a + b);

arrow2(10, 50);
