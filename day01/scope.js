/* 함수가 아닌 다른 영역(제어문 영역)에서는 scope를 판단하지 않는다 */
if(10>1){
    var data = 100; //지역변수 같지만 함수의 scope가 아니기 때문에 영역 밖에서 사용가능하다
    console.log(data);
}
console.log(data);

