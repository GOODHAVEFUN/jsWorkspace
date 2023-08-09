// let $box2 = $('.box2');

// console.log($box2);

$box2.html('<h1>html</h1>');
$('.box1').text('text');
$('.box3').css('background-color', 'gold');

let $input = $('input[type=text]');
console.log($input.attr('placeholder'));

$input.removeAttr('placeholder');

$box2.addClass('border');
$('.box4').removeClass('div-box');

console.log($box2.prop('style'));

$box2.prop('style').backgroundColor = 'red';

$input.on('change', () => {
  console.log($input.val());
});