$(document).ready(function() {
	$(".button").click(function(){
		$("#Calcs").val($("#Calcs").val() + $(this).html());
	});
	$("#Calculate").click(function(){
		$("#Calcs").val(eval($("#Calcs").val()));
	});
	$("#Clear").click(function(){
		$("#Calcs").val("");
	});
	$("#Calcs").keydown(function(e){
		if(e.keyCode == 13) {
			$("#Calculate").trigger('click');
		}
	});
});