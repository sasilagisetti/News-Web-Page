let image = document.querySelector(".main-poster img");
let btn = document.querySelector(".homeberg a");
let links = document.querySelector(".links");
let close = document.querySelector("#close");
// console.log(image.src);

window.addEventListener("resize", function(e){
    // if(e.target.outerWidth < 520){
    //     image.src = "images/image-web-3-mobile.jpg"
    // }
    // else{
    //     image.src = "images/image-web-3-desktop.jpg";
    // }
    if(innerWidth <= 540){
        image.src = "images/image-web-3-mobile.jpg"
        console.log("Hai")
    }
    if(innerWidth >= 541){
        image.src = "images/image-web-3-desktop.jpg";;
        console.log("Hello")
    }
});
console.log(window);
console.log(btn);

btn.addEventListener("click", function(){
    // links.classList.add("mob-links");
    links.style.top = "0";
    // links.classList.remove("links");
    // console.log("Hai")
});

close.addEventListener("click", function(){
    links.style.top = "-100%";
});