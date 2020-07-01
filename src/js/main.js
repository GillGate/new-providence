$(function(){

    let links = $('.header__list a');

    links.on('click', function(e) {
        e.preventDefault();

        let target = $(this).attr('href');
        console.log($(target).offset().top);
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 700);
    });

    $('.send__btn').on('click', function() {
        let $form   = $(this).closest('.send');
        let $result = $form.next();
        let $input = $(this).prev().val();

        let regexp = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

        $result.empty();
        $result.addClass('send__result--wrong');

        if ($input == '') {
            $result.html('Enter Email');
        } else if(!$input.match(regexp)) {
            $result.html('Enter valid Email');
        } else {
            $form.slideUp(500);
            $(this).slideUp(500);
            $result.removeClass('send__result--wrong');
            $result.html('Invitation sent!');
        }
    });

    $('.slider__content').slick({
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true
    });

	$('.reviewSlider').slick({
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow:'<div class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }
        ]
  });

    $('.packWrap').filter(':first').addClass('packActive');

    $('.switch__label').click(function() {
        $(this).toggleClass("switch__label_check");
        $('.packWrap').toggleClass("packActive");
    });
});