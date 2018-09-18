$(".icon").mouseover(function () {
    $(".info").css({
  'background-color': '#092153',
  'cursor': 'pointer',
  'outline': '2px solid #092153',
  '-webkit-transition': 'background-color .6s'
    })
}); 
                     $(".icon").mouseout(function () {
    $(".info").css({
      'background-color':'#d4112f',
      'outline': '2px solid white'
                   })
});