let mars = document.getElementsByClassName("png-img")
let signup = document.getElementsByClassName("Signup");

window.addEventListener('scroll',function() {
    var value = window.scrollY;
    mars.style.top= value* 0.5+ 'px';
    /* moon.style.left=-value* 0.5+ 'px';  moves left */
    signup.style.top= -value* 0.15 +'px';
    /*road.style.top =value *0.15 +'px';
    text.style.top = value*1 +'px';*/
})
