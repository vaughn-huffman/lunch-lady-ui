$(function() {
	
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