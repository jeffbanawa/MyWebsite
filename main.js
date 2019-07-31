var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.flip-card',
    reverse: false
})
.setClassToggle('.flip-card', 'show')
.addTo(controller);