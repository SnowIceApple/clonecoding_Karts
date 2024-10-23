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
});