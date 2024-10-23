$(document).ready(function(){
    $('.hr_util > a').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            $(this).parent().addClass('active');
        });
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

    var bgAnchor = 100;

    $(window).on('scroll', function(){
        if($(window).scrollTop() >= $('#karts_sns').offset().top - bgAnchor){
            $('#schools').addClass('view_bg');
        }
        else{
            $('#schools').removeClass('view_bg');
        }
        if($(window).scrollTop() >= $('.school_slide_tit a').offset().top){
            $('#schools').removeClass('view_bg');
        }

    });


    const schoolMenu = ['Music', 'Drama', 'Film, TV & Multimedia','Dance', 'Visual Arts', 'Korean Traditional Arts'];

    const swiper1 = new Swiper('.school_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        speed: 1,
    
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