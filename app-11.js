/// 3d Scroll


let zSpacing = -1000,
    lastPos = zSpacing / 5,
$frames = document.getElementsByClassName('frame'),
frames = Array.from($frames),
zVals = []

window.onscroll = function() {

let top = document.documentElement.scrollTop,
    delta = lastPos - top

lastPos = top

frames.forEach(function(n, i) {
    zVals.push((i * zSpacing) + zSpacing)
    zVals[i] += delta * -5
    let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
 frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
})

}

window.scrollTo(0, 1)

/// 3d Scroll

$(document).ready(function() {
    $(window).bind("resize", resizeWindow);
    function resizeWindow(e){
      var newWindowWidth = $(window).width();

      // Если ширина меньше 600 px, используется таблица стилей для мобильного
      if(newWindowWidth < 600){
        $("link[rel=stylesheet]").attr({href : "mobile_2.css"});
      } else if(newWindowWidth > 600){
        // Если ширина больше 600 px, используется таблица стилей для десктопа
        $("link[rel=stylesheet]").attr({href : "style.css"});
      }
    }
  });