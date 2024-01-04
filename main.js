
AOS.init();


let one_arch_img = document.querySelector('.one_arch_img')


/* 
window.onscroll = () => {
    let y = window.scrollY
    stars.style.margin = (y * 0.45) + "px"
    moon.style.marginTop = (y * 1.30) + "px"
    ges.style.marginTop = (y * 0.55) + "px"
    text.style.marginRight = (y * 0.70) + "px"
    btn.style.marginTop = (y * 1) + "px"
} */

window.onscroll = () => {
    let y = window.scrollY

    one_arch_img.style.borderRadius = (y * 0.50) + "%"

}