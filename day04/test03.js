//1) 객체 생성
let test = {
    num1 : 10, //키 : 값
    num2 : 20,
    name : "홍길동",
    sum : function(){
        return this.num1 + this.num2;
    }
};

// console.log(test);

//2) 객체 사용
console.log(test.name);
console.log(test.sum());

console.log(test['name']);

//3) 프로퍼티 생성과 삭제
test.num3 = 2.2;
console.log(test);

delete test.num3;
console.log(test);