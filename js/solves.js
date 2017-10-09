window.onload = function() {
	//加载导航和底部
	$(".top").load("/html/header.html");
	//加载底部
	$(".last").load("/html/bottom.html");

	//点击菜单
	$(document).on('click', '.menu-item', function() {
		if (this.id == "home") {
			window.location.href = "/index.html";
		} else {
			window.sessionStorage.setItem("index", $(this).attr("index"));
			window.sessionStorage.setItem("ifback", true);
			window.location.href = "/index.html"
		}
	})
};