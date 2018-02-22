AOS.init({
  once: true,
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


var day = new Date();
var hour = day.getHours();

var banner = document.getElementById('home');
var whatis = document.getElementById('whatis');
var about = document.getElementById('about');
var faqs = document.getElementById('faqs');
var sponsors = document.getElementById('sponsors');
var footer = document.getElementsByTagName('footer');

if (hour >= 6 && hour <= 14) {
  faqs.style.backgroundColor = "#2482B4";
}

else if (hour >= 15 && hour <= 18) {
  banner.style.background = "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url('img/midday.png')";
  banner.style.backgroundSize = "cover";
  whatis.style.backgroundColor = "#B42433";
  about.style.backgroundColor = "#4A002C";
  faqs.style.backgroundColor = "#E57242";
  sponsors.style.backgroundColor = "#280F27"
  footer[0].style.backgroundColor = "#E57242";
}

else if (hour >= 19 || hour <= 5) {
  banner.style.background = "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url('img/night.png')";
  banner.style.backgroundSize = "cover";
  whatis.style.backgroundColor = "#3724B4";
  about.style.backgroundColor = "#00044A";
  faqs.style.backgroundColor = "#4942E5";
  sponsors.style.backgroundColor = "#0F1028"
  footer[0].style.backgroundColor = "#4942E5";
}