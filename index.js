
const topbtn = document.getElementById('top');

window.addEventListener("scroll", () => {
if(window.pageYOffset > 700){
    topbtn.classList.add("active");
}else {
topbtn.classList.remove("active");
}
})



