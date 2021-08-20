const switcher = $('.switch-btn');
let value = 0;
$(document).ready(() => {
  $('.slider').slider({
    range: "min",
    min: 0,
    max: 360,
    slide: (e, ui) => {
      value = ui.value;
      if (switcher.hasClass('switch-on')) {
        $("#lorem").css({ "color": `hsl(${value}, 100%, 50%)` });
      } else {
        $("body").css({ "background": `hsl(${value}, 100%, 50%)` });
        $("#lorem").css({ "background": `hsl(${value}, 100%, 80%)` });
      }
    }
  });
})

$(() => {
  switcher.click(() => {
    switcher.toggleClass('switch-on');
    if (switcher.hasClass('switch-on')) {
      $("#lorem").css({ "color": `hsl(${value}, 100%, 50%)` });
    } else {
      $("body").css({ "background": `hsl(${value}, 100%, 50%)` });
      $("#lorem").css({ "background": `hsl(${value}, 100%, 80%)` });
    }
  });
});