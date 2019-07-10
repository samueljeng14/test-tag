$(document).ready(function() {
	// console.log("test");

	$(".select").click(function() {
		$(this).find('.tag').toggleClass('TagShow');
		$(this).find(".check").toggleClass('CheckShow');
	});

	$(".add, .spaceTag").click(function() {
		$(".container").addClass('containerShow');
	});

	$(".click").click(function() {
		$(".container").removeClass('containerShow')
	});


	// 點下面影響上面

	$("#select1").click(function() {
		$("#showTag1").toggleClass('displayNone');
	});
	$("#select2").click(function() {
		$("#showTag2").toggleClass('displayNone');
	});
	$("#select3").click(function() {
		$("#showTag3").toggleClass('displayNone');
	});
	$("#select4").click(function() {
		$("#showTag4").toggleClass('displayNone');
	});
	$("#select5").click(function() {
		$("#showTag5").toggleClass('displayNone');
	});
	$("#select6").click(function() {
		$("#showTag6").toggleClass('displayNone');
	});
	$("#select7").click(function() {
		$("#showTag7").toggleClass('displayNone');
	});
	$("#select8").click(function() {
		$("#showTag8").toggleClass('displayNone');
	});
	$("#select9").click(function() {
		$("#showTag9").toggleClass('displayNone');
	});								
	$("#select10").click(function() {
		$("#showTag10").toggleClass('displayNone');
	});	

	// 點上面影響下面

	$("#showTag1 i").click(function() {
		$("#select1 .tag").removeClass('TagShow');
		$("#select1 .check").removeClass('CheckShow');
		$("#showTag1").addClass('displayNone');		
	});

	$("#showTag2 i").click(function() {
		$("#select2 .tag").removeClass('TagShow');
		$("#select2 .check").removeClass('CheckShow');
		$("#showTag2").addClass('displayNone');
	});

	$("#showTag3 i").click(function() {
		$("#select3 .tag").removeClass('TagShow');
		$("#select3 .check").removeClass('CheckShow');
		$("#showTag3").addClass('displayNone');
	});
	
	$("#showTag4 i").click(function() {
		$("#select4 .tag").removeClass('TagShow');
		$("#select4 .check").removeClass('CheckShow');
		$("#showTag4").addClass('displayNone');
	});
	
	$("#showTag5 i").click(function() {
		$("#select5 .tag").removeClass('TagShow');
		$("#select5 .check").removeClass('CheckShow');
		$("#showTag5").addClass('displayNone');
	});
	
	$("#showTag6 i").click(function() {
		$("#select6 .tag").removeClass('TagShow');
		$("#select6 .check").removeClass('CheckShow');
		$("#showTag6").addClass('displayNone');
	});
	
	$("#showTag7 i").click(function() {
		$("#select7 .tag").removeClass('TagShow');
		$("#select7 .check").removeClass('CheckShow');
		$("#showTag7").addClass('displayNone');
	});
	
	$("#showTag8 i").click(function() {
		$("#select8 .tag").removeClass('TagShow');
		$("#select8 .check").removeClass('CheckShow');
		$("#showTag8").addClass('displayNone');
	});
	
	$("#showTag9 i").click(function() {
		$("#select9 .tag").removeClass('TagShow');
		$("#select9 .check").removeClass('CheckShow');
		$("#showTag9").addClass('displayNone');
	});
	
	$("#showTag10 i").click(function() {
		$("#select10 .tag").removeClass('TagShow');
		$("#select10 .check").removeClass('CheckShow');
		$("#showTag10").addClass('displayNone');
	});


	// 判斷全空
	$(".tagSustain i").click(function() {
		if ( $("#showTag1").hasClass('displayNone') && $("#showTag2").hasClass('displayNone') && $("#showTag3").hasClass('displayNone') && $("#showTag4").hasClass('displayNone') && $("#showTag5").hasClass('displayNone') && $("#showTag6").hasClass('displayNone') && $("#showTag7").hasClass('displayNone') && $("#showTag8").hasClass('displayNone') && $("#showTag9").hasClass('displayNone') && $("#showTag10").hasClass('displayNone')) {
			console.log("none include");
			$(".spaceTag").removeClass('displayNone');
			$(".add").addClass('displayNone');	
		}else{
			$(".spaceTag").addClass('displayNone');
			$(".add").removeClass('displayNone');	
		}
	});

	$(".select").click(function() {
		if ( !$("#select1 .tag").hasClass('TagShow') && !$("#select2 .tag").hasClass('TagShow') && !$("#select3 .tag").hasClass('TagShow') && !$("#select4 .tag").hasClass('TagShow') && !$("#select5 .tag").hasClass('TagShow') && !$("#select6 .tag").hasClass('TagShow') && !$("#select7 .tag").hasClass('TagShow') && !$("#select8 .tag").hasClass('TagShow') && !$("#select9 .tag").hasClass('TagShow') && !$("#select10 .tag").hasClass('TagShow')) {
			console.log("none include");
			$(".spaceTag").removeClass('displayNone');
			$(".add").addClass('displayNone');
		}else{
			$(".spaceTag").addClass('displayNone');
			$(".add").removeClass('displayNone');

		}
	});	
});