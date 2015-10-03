
/*
*@author 李春 2015-10-5
*/

$(function(){
	init();
});

/**
 *打开窗口时的初始化
 */
function init(){
	//先让各个组件适应窗口大小
	changePosition();
	
	//绑定resize事件，每改变一次大小就重新适应窗口
	$(window).resize(function(e) {
        changePosition();
    });
}
/**
 * resize时浏览器判断客户区宽度，调整left和right两个div的位置，并把banner隐藏，以适应可移动设备的屏幕
 */
function changePosition(){
	var clientWidth = $(window).innerWidth();
	if(clientWidth < 765){
		$('.left').css("width","100%");
		$('.right').css("width","100%");
		$('#banner').hide();
	} else {
		$('.left').css("width","66%");
		$('.right').css("width","33%");
		$('#banner').show();
	}
}

function viewAllArticles(){
	window.location.href = "archive/all.html";
}
