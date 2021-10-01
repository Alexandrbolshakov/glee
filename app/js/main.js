$(function(){

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,

  });
  $(".star-product").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

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