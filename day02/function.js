/* JS에서는 오버로딩을 지원하지 않는다 */
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

function add(num1, num2){
    return num1 + num2;
}

console.log(add(1, 3, 1))
console.log(add(5, 3))

//이름, 나이, 성별을 입력받고
//이름이 없다면 "무명(no name)", 성별이 없다면 "선택 안함"을 대신 출력한다
function intro(age, ...args){
    let nameMsg = args[0] ? args[0] : "무명(no name)";
    let ageMsg = age + "살";
    let genderMsg = args[1] ? args[1] : "선택안함";

    console.log(nameMsg);
    console.log(ageMsg);
    console.log(genderMsg);
}

intro(10);

function intro(age, name, gender){
    let nameMsg = name || "무명(no name)";
    let ageMsg = age + "살";
    let genderMsg = gender || "선택안함";

    console.log(nameMsg);
    console.log(ageMsg);
    console.log(genderMsg);
}

intro(10, "홍길동", "남자");

function intro(age, name, gender){
    let nameMsg;
    let ageMsg = age + "살";
    let genderMsg;

    //외부에서 전달받은 값의 개수가 2개라면
    if(arguments.length == 2){
        //name변수에 들어온 값에 "남" 또는 "여"라는 문자열이 포함되어있다면,
        if(name.includes("남" || "여")){
            genderMsg = name; //genderMsg에 name(성별)을 넣어주고
            nameMsg = "무명(no name)"; //이름은 입력받지 않았기 때문에 무명을 넣어준다
        }else{
            nameMsg = name;
            genderMsg = "선택 안함";
        }
    }else{ //매개변수를 1개 전달했을 때 또는 3개 전달했을때
        nameMsg = name || "무명(no name)";
        genderMsg = gender || "선택 안함";
    }

        console.log(nameMsg);
        console.log(ageMsg);
        console.log(genderMsg);
}

intro(10, "김영선");

//문자열에 있는 includes()메소드에 조회할 값을 전달하면
//포함되어있을 때 true, 없을 때는 false이다
console.log("ABC".includes("A"));
console.log("ABC".includes("Z"));

//값이 없을 때 초기값을 설정한다
//단, false로 취급되는 값이 들어오면 초기값이 들어가게 된다
var data;
data = data || 10;
console.log(data);

//undefined, "", 0은 조건식 자리에 작성하면 false로 판단한다
if(!undefined){     
    console.log("값 없음")
}else{
    console.log("값 있음")
}

//====:값과 타입이 모두 같아야 true
let data1;
console.log(data1 == undefined)
console.log(typeof(data1) === 'undefined')
console.log(1 =="1") //숫자타입과 문자열 타입이지만 값이 같으므로 자동 형변환
console.log(1 === "1") // === 비교연산자 : 값과 타입의 일치 여부를 모두 확인
console.log(1 == true) //true는 숫자로 변환하면 1 == 1 true
console.log(1 === true)
// == 비교연산자는 타입 변환이 일어나 값의 동등여부를 비교
// === 비교연산자는 타입변환이 없이 값과 타입의 동등여부를 비교

