let $slideBox = $('.slide-box');
let $slideImgs = $('.slide-img');

let slideWidth = 800;
let currentIdx = 0;
let slideCnt = $slideImgs.length;
console.log('slideCnt : ' + slideCnt);

checkEnd();

$('.next').on('click', function () {
  console.log('aaa');
  currentIdx++;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd();
});

$('.prev').on('click', function () {
  console.log('bbb');
  currentIdx--;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
    /* 슬라이드 박스의 변화에 트랜지션효과 추가 */
  $slideBox.css('transition', '0.5s ease'); 

  checkEnd();
});

function checkEnd() {
  if (currentIdx <= 0) {
    $('.prev').css('display', 'none');
  } else {
    $('.prev').css('display', 'block');
  }

  if (currentIdx >= slideCnt - 1) {
    $('.next').css('display', 'none');
  } else {
    $('.next').css('display', 'block');
  }
}