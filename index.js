$(document).ready(function() {
	// console.log("test");

	$(".select").click(function() {
		$(this).find('.tag').toggleClass('TagShow');
		$(this).find(".check").toggleClass('CheckShow');
	});
});