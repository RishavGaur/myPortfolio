function scrolling(){
    let lnav=document.querySelector(".large-nav");
    window.addEventListener("scroll",(e)=>{
        if(window.scrollY){
            lnav.style.cssText=`
                position:sticky;
                top:0;
            `;
        }
    });
}
setInterval(scrolling, 5000);

let cursorDot= document.querySelector("[data-cursor-dot]");
let cursorOutline= document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",(e)=>{
    const posX= e.clientX;
    const posY= e.clientY;
    cursorDot.style.left=`${posX}px`;
    cursorDot.style.top=`${posY}px`;

    // cursorOutline.style.left=`${posX}px`;
    // cursorOutline.style.top=`${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});
})