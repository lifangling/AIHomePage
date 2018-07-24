// JavaScript Document
window.onload = function() {

	//加载导航
	$(".top").load("/html/header.html");
	//整体滑动效果
	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		mode: 'vertical',
		resistance: '100%',
		loop: true,
		mousewheelControl: true,
		grabCursor: true,
		pagination: '.pagination',
		paginationClickable: true,
		onFirstInit: function() {
			$('.slide1').addClass('ani-slide');
		}
	})

	var back = window.sessionStorage.getItem("index");
	var ifback = window.sessionStorage.getItem("ifback");
	if (back && back != 'undefined' && back.length > 0 && ifback && ifback != 'undefined') {
		if (back == 1) {
			$(this).addClass("current-menu-item-short").siblings().removeClass("current-menu-item");

		} else {
			$(this).addClass("current-menu-item").siblings().removeClass("current-menu-item").removeClass("current-menu-item-short");

		}

		mySwiper.swipeTo(back - 1, 1000, false);
		window.sessionStorage.setItem("ifback", false);
		window.sessionStorage.setItem("index", '');
	}

	//点击菜单
	$(document).on('click', '.menu-item', function() {
		if (this.id == "home") {
			$(this).addClass("current-menu-item-short").siblings().removeClass("current-menu-item");

		} else {
			$(this).addClass("current-menu-item").siblings().removeClass("current-menu-item").removeClass("current-menu-item-short");

		}

		//同时更新滑动
		mySwiper.swipeTo($(this).attr("index") - 1, 1000, false);
	})


	var quan = "<span style='position: absolute;width: 18px;height: 18px;backgroud:none;border:2px solid #00A2FF;border-radius: 50%;display: block;left: -5.4px;top: -4.6px;'></span>";
	$($('.swiper-pagination-switch')[0]).append(quan);

	mySwiper.wrapperTransitionEnd(function() { //隐藏方法
		$('.ani-slide').removeClass('ani-slide');
		$('.swiper-slide').eq(mySwiper.activeIndex).addClass('ani-slide');

		//菜单按钮选中
		if ((mySwiper.activeIndex - 1) % 5 == 0) {
			$("#home").addClass("current-menu-item-short").siblings().removeClass("current-menu-item");
		} else if (mySwiper.activeIndex == 0) {
			$("#joinUs").addClass("current-menu-item-short").siblings().removeClass("current-menu-item");
			//index == $('.swiper-pagination-switch').length - 1);
		} else {
			var lis = $(".menu-item");
			$(lis[(mySwiper.activeIndex - 1) % 5]).addClass("current-menu-item").siblings().removeClass("current-menu-item").removeClass("current-menu-item-short");
		}

		//pagination 外面圈圈效果
		$.each($('.swiper-pagination-switch'), (index, value, array) => {
			$(value).empty();

			if (index == ((mySwiper.activeIndex - 1) % 5) || (mySwiper.activeIndex == 0 && index == $('.swiper-pagination-switch').length - 1)) {
				$(value).append(quan);
			}
		});

	}, true);
	/*
	 **************************首页轮播图start*********************
	 */
	if (($(".slide .content li").length / 2) > 0) {
		var i = 0;
		//多复制一个图
		var size = $(".slide1 .slide .content li").length / 2;

		//鼠标划入图片停止
		$(".slide1_right .num li").hover(function() {
			var index = $(this).index();
			i = index;

			$(".slide .content li").eq(index).addClass("active").siblings().removeClass("active");

			$(".slide1_right .num li").eq(index).find("i").addClass("active");
			$(".slide1_right .num li").eq(index).siblings().find("i").removeClass("active");
			clearInterval(t);
		}, function() {
			t = setInterval(moveLeft, 3000)
		})


	}

	//自动轮播
	var t = setInterval(moveLeft, 3000);

	function moveLeft() {
		i++;

		if (i >= size) {
			i = 0;
		}

		$(".slide .content li").eq(i).addClass("active").siblings().removeClass("active");
		$(".slide1_right .num li").eq(i).find("i").addClass("active");
		$(".slide1_right .num li").eq(i).siblings().find("i").removeClass("active");
	}
	/*
	 **************************首页轮播图end*********************
	 */

	/*
	 *******************画粒子运动start***********************************************
	 */
	var particlesJson = {
		"particles": {
			"number": {
				"value": 60,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.2,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.2,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	}

	function loadJs(loadUrl, callMyFun, argObj) {
		var loadScript = document.createElement('script');
		loadScript.setAttribute("type", "text/javascript");
		loadScript.setAttribute('src', loadUrl);
		document.getElementsByTagName("body")[0].appendChild(loadScript);
		//判断服务器
		if (navigator.userAgent.indexOf("IE") >= 0) {
			//IE下的事件
			loadScript.onreadystatechange = function() {
				if (loadScript && (loadScript.readyState == "loaded" || loadScript.readyState == "complete")) {
					//表示加载成功
					loadScript.onreadystatechange = null;
					callMyFun() //执行回调
				}
			}
		} else {
			loadScript.onload = function() {
				loadScript.onload = null;
				callMyFun();
			}
		}
	}

	function callMyFun() {
		particlesJS('particles-js', particlesJson);
		particlesJS('particles-js1', particlesJson);
		particlesJS('particles-js2', particlesJson);
	}

	function loadJsBtn() {
		//如需传参
		var argObj = {};
		loadJs("/js/particles.js", callMyFun, argObj);
	};
	loadJsBtn();
	/*
	 *******************画粒子运动end***********************************************
	 */

	/*
	 *******************行业动态轮播start***********************************************
	 */

	$('.zy-Slide').zySlide({
		speed: 500
	}).css('border', '0px solid blue');
	/*
	 *******************行业动态轮播end***********************************************
	 */
}