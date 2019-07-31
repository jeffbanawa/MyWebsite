var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.flip-card'
})
.setClassToggle('.flip-card', 'show')
.addTo(controller);