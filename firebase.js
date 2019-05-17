var firebaseConfig =  require('firebase'){
  apiKey: "AIzaSyBpLnk2W0G0UPa2N2Z8OZXxiH524PizF6s",
  authDomain: "chat-io-4496d.firebaseapp.com",
  databaseURL: "https://chat-io-4496d.firebaseio.com",
  projectId: "chat-io-4496d",
  storageBucket: "chat-io-4496d.appspot.com",
  messagingSenderId: "1001434167161",
  appId: "1:1001434167161:web:b4aaf5d7d68ddf83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var mensagemRef = firebase.database();

var msg = document.getElementById('m');
var botao = document.getElementById('addButton');

botao.addEventListener('click', function(){
	create(msg.value);
});

function create(mensagem) {
	var data = {
		mensagem: mensagem
	};

	var db = firebase.database().ref('chat-io-4496d').child('mensagens').push(data);

	db.on('value', snap => console.log(snap.val()));
}