var msg = document.getElementById('m');
var botao = document.getElementById('addButton');

botao.addEventListener('click', function(){
	create(msg.value);
});

function create(mensagem) {
	var data = {
		mensagem: mensagem
	};

	return firebase.database().ref().child('mensagens').push(data);
}