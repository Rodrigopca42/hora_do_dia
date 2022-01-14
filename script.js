function carregar(){
var msg = window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/manha.png'
    document.body.style.background ='#e7e883'
} else  if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'imagens/foto.png'
    document.body.style.background = '#dac34e'
}else {
    //Boa noite!
    img.src = 'imagens/noite.png'
    document.body.style.background = '#54423b'
}

}