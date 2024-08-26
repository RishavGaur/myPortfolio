function menuBar() {
    let menu_click = document.querySelector(".menu-bar");
    let menu = document.querySelector(".bi-list");
    let close_ico = document.querySelector(".bi-x");
    let dropdown = document.querySelector(".menu-list");
    let visible = 0;
    menu_click.addEventListener("click", (e) => {
        if (visible == 0) {
            visible = 1;
            menu.style.display = "none";
            close_ico.style.display = "block";
            dropdown.style.display = "flex";
        } else {
            visible = 0;
            menu.style.display = "block";
            close_ico.style.display = "none";
            dropdown.style.display = "none";
        }
    });
}
menuBar();
form();

// Events

function effects() {
    let lnav=document.querySelector(".large-nav");
    let elem=document.getElementsByClassName("anonym");
    for(let j=0;j<=elem.length;j++){
        elem[j].addEventListener("click",(e)=>{
            lnav.style.display="none";
        });
    }
}
effects();

function form(){
    let input=document.getElementsByClassName("inp-sty");
    let label=document.getElementsByTagName("label");
    for(let i=0;i<input.length;i++){
        input[i].addEventListener("focus",(e)=>{
            label[i].style.cssText=`
                top:-35px;
                color:cadetblue;
            `;
        });

        input[i].addEventListener("blur",(e)=>{
            if(input[i].value==""){
                label[i].style.cssText=`
                    top:10px;
                `;
            }else{
                label[i].style.cssText=`
                    top:-35px;
                    color:cadetblue;
                `;
            }
        });
    }
}