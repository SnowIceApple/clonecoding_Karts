$(document).ready(function(){
    AOS.init();
    $('.hr_util > a').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            $(this).parent().addClass('active');
        });
    });

    $('.hr_search > a').on('click',function(e){
        e.preventDefault();
        setTimeout(() => {
            $('#all_search_input').focus();
        }, 500);
    });

    var allSearchInput = $('#all_search_input');
    var allSearchBtn = $('.search_area button');

    allSearchInput.on('keyup', function(){
        var wordLength = $(this).val();

        if(wordLength.length >= 6){
            allSearchInput.addClass('wide');
            allSearchInput.attr('maxlength', 50);
            allSearchInput.css('text-align', 'center');
        }
        else{
            allSearchInput.removeClass('wide');
            allSearchInput.attr('maxlength', 12);
            allSearchInput.css('text-align', 'left');
        }
    });

    allSearchBtn.on('click', function(){
        var wordLength = allSearchInput.val();
        if(wordLength.length < 2){
            alert('Please input at least 2 Characters');
        }
    });

    $('.hub_close button').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            $(this).closest('.hr_util').removeClass('active');
        });
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('body').addClass('overZero');
        }
        else{
            $('body').removeClass('overZero');
        }
    });


    $(window).on('scroll', function(){
        var bgAnchor = 100;
        if($(window).scrollTop() >= $('#karts_sns').offset().top - bgAnchor || $(window).scrollTop() >= $('.school_slide_tit ul li.active a').offset().top){
            $('#schools').addClass('view_bg');
        }
        if(($(window).scrollTop() <= $('#karts_sns').offset().top - bgAnchor)){
            $('#schools').removeClass('view_bg');
        }
    });


    const schoolMenu = ['Music', 'Drama', 'Film, TV & Multimedia','Dance', 'Visual Arts', 'Korean Traditional Arts'];

    const swiper1 = new Swiper('.school_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        speed: 100,
        pagination: {
            el: '.school-slide-pagination',
            bulletClass: "school-slide-bullet",
            bulletActiveClass: "school-slide-bullet-active",
            clickable: true,
            renderBullet: function (index, className) {
                return '<a href="#" class="' + className + '">' + (schoolMenu[index]) + '</a>';
            },
        },

        on:{
            slideChange: function(){
                var idx = this.realIndex;
                $('.sch_bg_img').eq(idx).addClass('active').siblings().removeClass('active');
                $('.school_slide_tit ul li').eq(idx).addClass('active').siblings().removeClass('active');
            }
        },
      });
});