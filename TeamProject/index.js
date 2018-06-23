$(document).ready(function(){
	$('#main_target').load('main.html');

	$('#mobile_hidden_list').hide();

	$('#mobile_menu_icon').on('click', function(){
    	$('#mobile_hidden_list').slideToggle("fast");
    	return false;
    });

    $('.rank_btn').on('click', function(){
    	$('#main_target').load('rank.html');
        $('#mobile_hidden_list').slideUp("fast");
    	return false;
    });

    $('.boxoffice_btn').on('click', function(){
        $('#main_target').load('boxoffice.html');
        $('#mobile_hidden_list').slideUp("fast");
        return false;
    });

    $('.home_btn').on('click', function(){
    	$('#main_target').load('mobile_home.html');
        $('#mobile_hidden_list').slideUp("fast");
    });

    $('.magazine_btn').on('click', function(){
        $('#main_target').load('news.html')
    });

});