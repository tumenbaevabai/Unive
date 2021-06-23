$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {});
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        direction  : 'ttb',
        heightRatio: 2,
        perPage    : 6,
        arrows: false,
        pagination: false,
    } ).mount();
} );

$ ('.arrow').on('click', function (e) {
    e.preventDefault();
    $ ('.advertising').toggleClass('none')
    $ ('.sidebar').toggleClass('sidebar--active')
    $ ('.logo--text').toggleClass('none')
    $ ('.menu__link--text').toggleClass('none')
    $ ('.arrow').toggleClass('arrow--active')
})

const linkColor = document.querySelectorAll('.menu__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('menu__link--active'))
        this.classList.add('menu__link--active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))
