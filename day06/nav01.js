let $li = $('li').eq(1);

$li.click(() => {
    $('.sub-menu').toggleClass('none');
});

/* toggleClass : jQuery에서 사용되는 메소드
선택된 요소에 대해 클래스를 전환하는 역할
클래스가 있으면 해당 클래스 제거, 없으면 추가*/