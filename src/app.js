const menuIcon = document.querySelector(".MenuIcon")
const sliderbar = document.querySelector(".sliderbar")
const showbox = document.getElementById("ShowMore")
const show = document.getElementById("Show")
const notshow = document.querySelector(".notShow")

const showhide = document.querySelector(".hide")
const buttonshow = document.querySelector(".buttonhide")
menuIcon.onclick = function(){
    sliderbar.classList.toggle("sm-slider")
}

showbox.onclick = function(){
    show.classList.replace("ShowContent","ShowNone")
    showbox.classList.replace('showmore','notshow')
}

notshow.onclick = function(){
    show.classList.replace("ShowNone","ShowContent")
    showbox.classList.replace('notshow','showmore')
}
showhide.onmouseover = function(){
    buttonshow.classList.replace("buttonhide","buttonshow")
}
showhide.onmouseleave = function(){
    buttonshow.classList.replace("buttonshow","buttonhide")

}