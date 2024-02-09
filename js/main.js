$(document).ready(function(){
    $('.hr_util > a').each(function(){
        $(this).on('click', function(){
            $(this).parent().addClass('active');
        });
    });
});