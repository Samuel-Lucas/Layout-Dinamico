function carregar() {
	var hora = prompt('Digite um horário (Ex: 14:55)')
	var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    hora = parseInt(hora)

/*    var data = new Date()
    var hora = data.getHours()  // Recebe a hora no momento  */

    if (hora >= 0 && hora < 12) {
    	msg.innerHTML = 'Agora são ' + hora  + ' horas.'
    	img.src = 'imgs/manha.jpeg'
    	document.body.style.background = '#e2cd9f'   // Alterar Cor de fundo
    } else if (hora >= 12 && hora < 19) {
    	msg.innerHTML = 'Agora são ' + hora  + ' horas.'
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#b9846f' 
    } else {
    	msg.innerHTML = 'Agora são ' + hora  + ' horas.'
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#515154' 
    }
}

