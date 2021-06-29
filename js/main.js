$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {});
});
/*close side bar*/
$ ('.arrow').on('click', function (e) {
    e.preventDefault();
    $ ('.advertising').toggleClass('disable')
    $ ('.sidebar').toggleClass('sidebar--active')
    $ ('.logo--text').toggleClass('disable')
    $ ('.menu__link--text').toggleClass('disable')
    $ ('.arrow').toggleClass('arrow--active')
})
$ ('.control__btn--chevron').on('click', function (e) {
    e.preventDefault();
    $ ('.messenger').toggleClass('disable')
    $ ('.messenger-hidden').toggleClass('disable')
})

/*sidebar links*/
const linkColor = document.querySelectorAll('.menu__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('menu__link--active'))
        this.classList.add('menu__link--active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))
/*COUNT*/
$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

        {

            duration: 2000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});

/*progres bar*/

let options = {
    startAngle: -1.55,
    size: 52,
    value: 0.45,
    fill: {color: "#5855D6"}
}
$(".circle .circle__bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue){
    $(this).parent().find(".circle__box--text").text(String(stepValue.toFixed(2).substr(2)) + "%")
    });
$(".circle--s .circle__bar").circleProgress({
    value: 0.28,
})


