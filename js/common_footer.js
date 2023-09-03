

//패밀리 사이트
$('#footer dl dt').toggle(function() {
    $('#footer dl dd').animate({height: 250})
    $('#footer dl dt').removeClass('active')
    $('#footer dl dt').addClass('active2')
  },
  function() {
    $('#footer dl dd').animate({height: 0})
    $('#footer dl dt').removeClass('active2')
    $('#footer dl dt').addClass('active')
  })


//top 버튼
$('#top').on('click', function() {
  event.preventDefault()
  $('html, body').animate({scrollTop: 0})
})

// 푸터 올라오는 효과

$(window).on('scroll', function() {
  let num = $('#news').offset().top;
  if(window.scrollY >= num-800) {
    $('#news').css({transform: `translateY(0)`, opacity: 1})
  } else {
    $('#news').css({transform: `translateY(20%)`, opacity: 0})
  }
})



