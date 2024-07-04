// window.onload = function(){

// }

$(document).ready(function(){
    // let btn = document.querySelector('.myBtn');
    // btn.onclick
    // btn.addEventLinsner
    console.log($('.myBtn'));
    $('.myBtn').on('click', function(){
        alert('Hello jQuery');
    });

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
});