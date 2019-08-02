var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.flip-card',
    reverse: false
})
.setClassToggle('.flip-card', 'show')
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".project-content",
    reverse: false
})
    .setClassToggle(".project-content", "show") // add class to reveal
    .addTo(controller);