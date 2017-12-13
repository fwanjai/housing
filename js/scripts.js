// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checkScroll() {
  var startY = $('.navbar').height() * 2; //THe point where the nav-bar changes in pixel

  if ($(window).scrollTop() > startY){
    $('.navbar').addClass("scrolled");
  }else {
    $('.navbar').removeClass("scrolled");
    }
  }
  if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function(){
      checkScroll();
    });
  }
