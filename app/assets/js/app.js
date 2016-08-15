$(function(){
  // FastClick Delay
  FastClick.attach(document.body);

  // Dropdown Menu

  var $dropdown = $(".nav-menu").find(".dropdown");
  var $dropdownLink = $dropdown.find(".nav-menu-link");
  var $dropdownList = $dropdown.find(".nav-dropdown-menu__list");

  $dropdownLink.on("click", function(e) {
    e.preventDefault();
    $dropdownList.toggleClass("is-active");
  });

  $(document).on("click", function(event){
    if(!$(event.target).is($dropdownLink)) {
      $dropdownList.removeClass("is-active");
    }
  });

  // Responsive Header Nav
  var $app = $(".app");

  var $nav = $(".responsive-header-nav");

  var $turnon =  $(".action--nav-on");
  var $turnoff = $(".action--nav-off");

  $turnon.on("click", function(){
    $app.addClass("responsive-header-nav-is-open");
    $nav.addClass("is-open");
  });

  $turnoff.on("click", function(){
    $app.removeClass("responsive-header-nav-is-open");
    $nav.removeClass("is-open");
  });

  $(".item.has-inner-list").on("click", function() {
    var $that = $(this);
    var $link = $that.find(".link");
    var $icon = $link.find("i");
    $link.toggleClass("is-active");
    $that.toggleClass("is-open");
    $icon.toggleClass("ion-chevron-down ion-chevron-right");
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoHeight: true,
    navText: ['<i class="ion-arrow-left-b"></i>', '<i class="ion-arrow-right-b"></i>']
  });
});