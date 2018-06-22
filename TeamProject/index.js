$(document).ready(function(){
	$('#main_target').load('mobile_home.html');

	$('#mobile_hidden_list').hide();

	$('#mobile_menu_icon').on('click', function(){
    	$('#mobile_hidden_list').toggle();
    	return false;
    });

    $('#rank_btn').on('click', function(){
    	$('#main_target').load('Genre/rank.html')
    	return false;
    });

    $('#home_btn').on('click', function(){
    	$('#main_target').load('mobile_home.html');
    });
});