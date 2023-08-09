let testButton = document.querySelectorAll(".img-box > button");
let bigImgWrap = document.getElementsByClassName("big-img-wrap");

for (let i = 0; i < testButton.length; i++){
    testButton[i].addEventListener("click", function(){
        bigImgWrap[0].style.display = 'flex';
        
        //data-src 속성을 활용함
        //개발자가 필요한 데이터를 저장하는 속성이다
        let src = this.getAttribute("data-src");
        let bigImg = document.querySelector(".big-img");
        bigImg.setAttribute("src", src);
    });
}

bigImgWrap[0].addEventListener("click", function(){
    this.style.display = "none";
});