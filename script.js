//終了長さ
$('#container').scrollgress({
  height: '5px',
  color: '#0a0274',
});

var elemTop = [];

function PositionCheck() {
  var headerH = $("#header").outerHeight(true);

  $(".scroll-point").each(function (i) {
    elemTop[i] = Math.round(parseInt($(this).offset().top - headerH));
  });
}

function ScrollAnime() {
  var scroll = Math.round($(window).scrollTop());
  var NavElem = $("#g-nav li");
  $("#g-nav li").removeClass('current');
  if (scroll >= 0 && scroll < elemTop[1]) {
    $(NavElem[0]).addClass('current');
  }
  else if (scroll >= elemTop[1] && scroll < elemTop[2]) {
    $(NavElem[1]).addClass('current');
  }
  else if (scroll >= elemTop[2] && scroll < elemTop[3]) {
    $(NavElem[2]).addClass('current');
  }
  else if (scroll >= elemTop[3]) {
    $(NavElem[3]).addClass('current');
  }
}

$('#g-nav a').click(function () {
  var elmHash = $(this).attr('href');
  var headerH = $("#header").outerHeight(true);
  var pos = Math.round($(elmHash).offset().top - headerH);
  $('body,html').animate({ scrollTop: pos }, 500);
  return false;
});

$(window).scroll(function () {
  PositionCheck();
  ScrollAnime();
});

$(window).on('load', function () {
  PositionCheck();
  ScrollAnime();
});
$(window).resize(function () {
  PositionCheck()
});
//スライドショー
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: '1.png'},
        { src: '2.png'},
        { src: '3.png'},
        { src: '4.png'}
      ];
    } else {
      var responsiveImage = [
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_01.jpg' },
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_02.jpg' },
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_03.jpg' }
      ];
    }

//Vegas全体の設定

$('#slider').vegas({
    overlay: false,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: responsiveImage,
    timer:false,
  });
//newsティッカー
$('.slider').bxSlider({
touchEnabled:false,
mode: 'vertical',
controls: false,
auto: 'true',
pager: false
});
//ページトップ
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}
$(window).scroll(function () {
	PageTopAnime();
});
$(window).on('load', function () {
	PageTopAnime();
});

$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//お問い合わせ
function submitForm() {
    var formData = new FormData(document.getElementById("registrationForm"));
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
                alert("コメントを送信しました。"); 
                document.getElementById("company").value = "";
                document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("comment").value = "";
        }
    };
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbxjth62GnC5IDzRC13TIJL6LJ02jozwnJmgNjxwbKLrbJvezFlLCS_PPk5IrOZrID02/exec");
    xhr.send(formData);
}


//アルファベット
function BgFadeAnime(){
$('.bgLRextendTrigger').each(function(){
  var elemPos = $(this).offset().top-50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');
  }else{
    $(this).removeClass('bgLRextend');
  }
});	
$('.bgappearTrigger').each(function(){ 
  var elemPos = $(this).offset().top-50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');
  }else{
    $(this).removeClass('bgappear');
  }
});		
}
$(window).scroll(function (){
  BgFadeAnime();
});

//読み込みアニメーション
function fadeAnime(){
    $('.fadeInTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
      }else{
      $(this).removeClass('fadeIn');
      }
      });
  
  }
    $(window).scroll(function (){
  
      fadeAnime();
  
    });
