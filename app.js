window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})
console.log ('поставьте 5 :с')

document.querySelectorAll('.cursor').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`

    })
})



$(document).ready(function() {
    $(window).bind("resize", resizeWindow);
    function resizeWindow(e){
      var newWindowWidth = $(window).width();

      // Если ширина меньше 600 px, используется таблица стилей для мобильного
      if(newWindowWidth < 600){
        $("link[rel=stylesheet]").attr({href : "mobile_1.css"});
      } else if(newWindowWidth > 600){
        // Если ширина больше 600 px, используется таблица стилей для десктопа
        $("link[rel=stylesheet]").attr({href : "style.css"});
      }
    }
  });