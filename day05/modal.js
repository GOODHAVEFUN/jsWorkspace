let navLogin = document.querySelector(".nav--login");
let modalBox = document.querySelector('.modal-box');
let xBox = document.querySelector('.x-box');

navLogin.addEventListener('click', function(){
    modalBox.style.display = 'flex';
});

xBox.addEventListener('click', function() {
    modalBox.style.display ='none';
});

xBox.addEventListener('mouseover', function(){
    // childNodes : 해당 요소의 모든 자식 노드들을 가져온다
    this.childNodes[1].style.color = 'tomato';
});

xBox.addEventListener('mouseout', function(){
    this.childNodes[1].style.color = 'black';
});