$(document).ready(function () {

    function adapteNewsFeed() {
		var sizeFeed = $(".highlights-bottom").width();
		var boxSize = $(".highlights-bottom .highlights-card").width();
		var gapSize = $(".highlights-bottom").css("column-gap").replace(/[^-\d\.]/g, '');
		var moveSize = Number(gapSize) + Number(boxSize);
		var sizeFeedFinal = Number(sizeFeed) + Number(boxSize) / Number(2);

		$(".highlights-bottom").width(sizeFeedFinal);
		$(".highlights-buttons .btn-left").mousedown(function () {
			$('.highlights-bottom').animate({
				scrollLeft: '-=' + moveSize
			}, 300, 'linear');
		});
		$(".highlights-buttons .btn-right").mousedown(function () {
			$('.highlights-bottom').animate({
				scrollLeft: '+=' + moveSize
			}, 300, 'linear');
		});
	}
    adapteNewsFeed()


    function adapteProgram() {
		var sizeFeed = $(".programs-bottom").width()
		var boxSize = $(".programs-bottom .programs-card").width()
		var boxPaddSize = $(".programs-bottom .programs-card").css("padding").replace(/[^-\d\.]/g, '')
		var gapSize = $(".programs-bottom").css("column-gap").replace(/[^-\d\.]/g, '')
		var moveSize = Number(gapSize) + (Number(boxPaddSize)) * 2 + boxSize
		var sizeFeedFinal = Number(sizeFeed) + Number(boxSize) / Number(2)

		$(".programs-bottom").width(sizeFeedFinal)

		$(".programs-buttons .btn-left").mousedown(function () {
			$('.programs-bottom').animate({
				scrollLeft: '-=' + moveSize
			}, 300, 'linear')
		});

		$(".programs-buttons .btn-right").mousedown(function () {
			$('.programs-bottom').animate({
				scrollLeft: '+=' + moveSize
			}, 300, 'linear')
		});
	}
    adapteProgram()
})

