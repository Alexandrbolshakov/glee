$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.details-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/arrow-prev.svg" alt="arrow prev"></img> </button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrow-next.svg" alt="arrow next"></img></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.details-other__tab').on('click', function(e){
    e.preventDefault();
    $('.details-other__tab').removeClass('details-other__tab--active');
    $(this).addClass('details-other__tab--active');
    $('.details-other__item').removeClass('details-other__item--active');
    $($(this).attr('href')).addClass('details-other__item--active');
  });

  $('.details-main__small').slick({
    asNavFor: '.details-main__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          vertical: false,
        }
      },
    ]
  });
  $('.details-main__big').slick({
    asNavFor: '.details-main__small',
    draggable: false,
    arrows: false,
    fade: true
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,

  });
  $(".details-card__stars").rateYo({
    starWidth: "18px",
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

    ////////////// counter
    $(document).ready(function() {
			$('.details-card__btn--minus').click(function () {
				var $input = $(this).parent().find('.details-card__input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.details-card__btn--plus').click(function () {
				var $input = $(this).parent().find('.details-card__input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
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
});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
  });
}