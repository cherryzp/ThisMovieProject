$(document).ready(function(){
    $('.starRev span').click(function(){
        $(this).parent().children('span').removeClass('on');
        $(this).addClass('on').prevAll('span').addClass('on');
        starIndex= $(this).text();
        $('#star_score option:eq('+(starIndex-1)+')').prop("selected", true);
        return false;
    });

    $('.starRev span').hover(function(){
        $(this).parent().children('span').removeClass('on');
        $(this).addClass('on').prevAll('span').addClass('on');
        return false;
    });

    $('#star_score').change(function(){
        starIndex= $('#star_score option:selected').val();
        starIndex= starIndex.replace("점", "");
        $('.starRev span:eq('+(starIndex-1)+')').parent().children('span').removeClass('on');
        $('.starRev span:eq('+(starIndex-1)+')').addClass('on').prevAll('span').addClass('on');
        return false;
    });
});
