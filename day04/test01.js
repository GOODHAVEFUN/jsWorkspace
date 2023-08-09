//1) 자바스크립트 자료형
console.log('안녕\n하세요');
console.log("안녕");
console.log(`안녕
하세요`); //백틱은 문자열 중간에 엔터를 치면 줄바꿈으로 인식한다

console.log(typeof 3);
console.log(typeof "안녕");

//3) 변수와 상수 선언
// var a;
// console.log(a); //undefined
// //자바스크립에서 제공하는 원시타입 값
// //현재 변수에 값이 저장되어있지 않아 타입이 없다라는 의미

// let b = 3;
// b = 5;
// const c = 4;
// // c = 4; //상수는 값 변경 불가능

// console.log(b);
// console.log(c);

//4) 변수의 선언과 호이스팅
console.log(a);
var a; 

//8) 문자열 사용하기
let userName = '홍길동';

console.log('이름 : ' + userName);
console.log(`이름 : ${userName}`);

//9) Truthy와 Falsy
if(0){
    console.log("참");
}else{
    console.log("거짓");
}

//10) 배열
//보통은 []를 사용한다
let ar = [1, 2, 3];

console.log(ar); //[ 1, 2, 3 ]

//매개변수로 값을 1개 넘기면 칸수로 사용된다
let arr = new Array(10);

//매개변수로 값을 2개 이상 넘기면 요소로 사용된다
let arr2 = new Array(1, 2, 3);


console.log(arr);
console.log(arr2);

//요소의 타입이 달라도 상관없다
let ar2 = [1, 'a', true];
console.log(ar2);

console.log(ar2.length);
console.log(ar2[1]);

//없는 인덱스에 값을 저장하면 값이 추가된다
ar2[5] = 10;
console.log(ar2);

//push(값)는 요소의 끝에 값을 추가한다
console.log(ar2.push(11)); //요소의 개수를 반환
console.log(ar2);

//delete는 값을 삭제한다
delete ar2[0];
console.log(ar2);

//pop()은 마지막 요소를 삭제한다
console.log(ar2.pop()); //삭제되는 요소 값
console.log(ar2);