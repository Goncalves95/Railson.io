document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video");
    video.play();
});

(function($) {
    $(function() {
      $('.toggle-overlay').click(function() {
        $('aside').toggleClass('open');
      });
    });
  })(jQuery);