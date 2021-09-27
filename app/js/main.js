$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
    });

    const container1 = document.querySelector('.products');
    const container2 = document.querySelector('.new');


    const config = {
        controls: {
          scope: 'local'
        }
      };

    const mixer1 = mixitup(container1, config);
    const mixer2 = mixitup(container2, config);
})