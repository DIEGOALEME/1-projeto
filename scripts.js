const forme = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const telamascara = document.querySelector(".mascara-formulario")



function mostrarform() {
    forme.style.left = "50%"
    forme.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"}
    
function esconderform() {
    forme.style.left = "-300%"
    forme.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"}


