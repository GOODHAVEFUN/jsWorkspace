//1. 1부터 10까지 출력하는 함수 printFrom1To10
function printFrom1To10(){
    for(let i = 0; i <10; i++){
        console.log(i + 1);
    }
}
printFrom1To10();

//2. 1~10까지의 합을 출력하는 함수 getTotal1
function getTotal1(){
    let total = 0;
    for(let i = 0; i < 10; i ++){
        total += i + 1;
    }
    console.log(total);
}

getTotal1();

//3. 1~n까지의 합을 출력하는 함수 getTotal2
function getTotal2(end){
    let total = 0;
    for(let i = 1; i <= end; i++){
        total += i;
    }
    return total;
}

console.log(getTotal2(10));