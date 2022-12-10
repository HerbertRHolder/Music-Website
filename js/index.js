(function(){
"use strict"

let glide = new Glide('#glide1', {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        800: {
            perView: 2
        }
        ,
        600:{
            perView:3,
            autoplay: false
        }
    },
    autoplay: 2000
}
).mount();


















})();