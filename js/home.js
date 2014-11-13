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

	$(".order_panel .timeSelection, #new_order_submit_order_info").click(function() {
		var $currentOrderPanel = $(".order_panel:visible");
		$currentOrderPanel.hide();
		$currentOrderPanel.next().show();
		
		$("#new_order_go_back").show();
	});

	$("#new_order_go_back").click(function() {
		var $currentOrderPanel = $(".order_panel:visible");
		$currentOrderPanel.hide();
		var $previousOrderPanel = $currentOrderPanel.prev().show();
		
		if (parseInt($previousOrderPanel.attr("id").replace("order_panel_", "")) === 1) {
			$(this).hide();
		}
	});
});