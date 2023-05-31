gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.main_header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.main_header',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}


$(document).ready(function() {
    $(window).bind("resize", resizeWindow);
    function resizeWindow(e){
      var newWindowWidth = $(window).width();

      // Если ширина меньше 600 px, используется таблица стилей для мобильного
      if(newWindowWidth < 600){
        $("link[rel=stylesheet]").attr({href : "mobile_6.css"});
      } else if(newWindowWidth > 600){
        // Если ширина больше 600 px, используется таблица стилей для десктопа
        $("link[rel=stylesheet]").attr({href : "style.css"});
      }
    }
  });