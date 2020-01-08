$(document).ready(function() {
  $(".bad-button").hover(function() {
    $(this).removeClass("visible")
  },function() {
    $(this).addClass("visible")
  }
  )
})