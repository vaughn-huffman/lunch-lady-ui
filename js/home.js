$(function() {
	
	$("#create_new_acct_link").click(function() {
		$("#app_login_form").hide();
		$("#app_create_account_form").show();
	});
	
	$("#login_submit").click(function(e) {
		e.preventDefault();
		$("#startup").hide();
		$("#new_order_container").show();
		
		$(".nav .dropdown").show();
		$("#login_dropdown").hide();
	});
});