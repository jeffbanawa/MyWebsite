$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '14587215175',
        limit: 8,
        resolution: 'standard_resolution',
        accessToken: '14587215175.1677ed0.f1ef0b0f354d416da0902ee56a690650',
        sortBy: 'most-recent',
        links: false,
        template: '<div class="column instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();

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


});
