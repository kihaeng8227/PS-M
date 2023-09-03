// 헤더

const headerWrap = document.getElementById('headerWrap');
const gnbList = document.getElementById('gnbList')
const li = gnbList.querySelectorAll('li')

console.log(headerWrap)
li.forEach(list=>{

   list.addEventListener('mouseenter', ()=>{
        headerWrap.style.height = `370px`;
    })
    list.addEventListener('mouseleave', ()=>{
        headerWrap.style.height = `80px`;
    })
})

// 메인슬라이더


$("#mainSliderList li").each(function () {
    let n = $(this).index() + 1;
    $(this).css({ backgroundImage: `url(./img/ms_bg/bg${n}.jpg)` })
})


// 초기 함수
let num = 0;
let sLength = $("#mainSliderList li").length;
let pos;


// 다음 슬라이드
let nextSlider = ()=> {

    $('#mainSliderList:not(:animated)').animate({marginLeft:'-100%'}, function() {
        $('#mainSliderList').append($('#mainSliderList li:eq(0)'))
                                    .css({marginLeft:'0'})
    })
}

// 이전 슬라이드
let prevSlider =() => {
    $('#mainSliderList:not(:animated)').prepend($('#mainSliderList li:eq(4)'))
                                                            .css({marginLeft: '-100%'})
                                                             .animate({marginLeft:'0'})
}

// 좌우버튼
$(".mainBtnNext").on('click',function(){
    nextSlider();
  })
  $(".mainBtnPrev").on('click',function() {
    prevSlider();
  })



// 햄버거 버튼
$('#mGnb').css({position: 'fixed', top:0, left: 0, zIndex: 9999})
$('#ham').toggle(function() {
    $('#ham div:eq(0)').css({transform: 'rotate(45deg)', top:20})
    $('#ham div:eq(1)').css({opacity: 0})
    $('#ham div:eq(2)').css({transform: 'rotate(-45deg)', top:20})
    $('#mGnbList:not(:animated)').slideToggle(500)
},function() {
    $('#ham div:eq(0)').css({transform: 'rotate(0deg)', top:10})
    $('#ham div:eq(1)').css({opacity: 1})
    $('#ham div:eq(2)').css({transform: 'rotate(0deg)', top:30})
    $('#mGnbList:not(:animated)').slideToggle(500)
})


$('#mGnbList > li').toggle(function() {
  $(this).children('ul').not(':animated').slideToggle(500)
  $(this).find('#plusWrap div:eq(1)').css({transform: 'rotate(90deg)'}).css({backgroundColor: 'red'})
  $(this).find('#plusWrap div:eq(0)').css({opacity: 0})
}, function() {
  $(this).children('ul').not(':animated').slideToggle(500)
  $(this).find('#plusWrap div:eq(1)').css({transform: 'rotate(0)'}).css({backgroundColor: 'gray'})
  $(this).find('#plusWrap div:eq(0)').css({opacity: 1})
})