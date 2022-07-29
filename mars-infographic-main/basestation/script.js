let bg=document.getElementById("bg");
let moon= document.getElementById("moon");
let earth= document.getElementById("earth");
let text= document.getElementById("text");
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    bg.style.top= value * 0.25+ 'px';
    moon.style.left= -value*0.25 +'px';
    earth.style.top =value *0.15 +'px';
    text.style.top = value*0.5 +'px';
})

///////////////////////////////

let ione = document.getElementById("imgone");
let tone = document.getElementById("txtone");
window.addEventListener('scroll',function(){
    var val = window.scrollY;
    ione.style.top = val*0.05+'px';
    tone.style.bottom = val*0.25 + 'px';
})

/////////////////////////////////

let i2 = document.getElementById("imgtwo");
let t2 = document.getElementById("txttwo");
window.addEventListener('scroll',function(){
    var val = window.scrollY;
    i2.style.left = val*0.27+'px';
    t2.style.bottom = val*0.09+'px';
})

//////////////////////////////////////

let t3 = document.getElementById("txtthree");
window.addEventListener('scroll',function(){
    var val = window.scrollY;
    t3.style.right = val*0.17+'px';
})

//////////////////////////////////////

//////////////////////////////////////

let t6 = document.getElementById("txtsix");
window.addEventListener('scroll',function(){
    var v = window.scrollY;
    t6.style.top = -v*0.1 - 'px';
})

//////////////////////////////////////
 
let t12 = document.getElementById("txttwl");
window.addEventListener('scroll',function(){
    var val = window.scrollY;
    t12.scroll.right = val*0.15+'px';
})

////////////////////////////////////////


function setNewImg(){
    document.getElementById("mars-rust").src="mars_content/pic14.jpeg";
    document.getElementById("gale-center").src="mars_content/pic17.jpeg";
    document.getElementById("nili").src="mars_content/pic18.jpeg";
    document.getElementById("volcano").src="mars_content/pic24.jpeg";

} 
function setOldImg(){
    document.getElementById("mars-rust").src="mars_content/pic15.jpeg";
    document.getElementById("gale-center").src="mars_content/pic16.jpeg";
    document.getElementById("nili").src="mars_content/pic19.jpeg";
    document.getElementById("volcano").src="mars_content/pic23.jpeg";

}

function alertMessage(){
    alert("Loading....\nEstablishing Connection...\nConnection Established!\n     BASE STATION\n     a MARS infographic");
}