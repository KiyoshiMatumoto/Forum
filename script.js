document.getElementById('openPopup').onclick = function() {
  document.getElementById('popup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
  document.getElementById('popup').style.display = 'none';
}

document.getElementById('sendMessage').onclick = function() {
  const message = document.getElementById('message').value;
  alert('Mensagem enviada: ' + message);
  document.getElementById('popup').style.display = 'none';
  document.getElementById('message').value = ''; // Limpa o campo de texto
}

// Fecha o popup se o usuário clicar fora dele
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
}

// Adiciona função de fechar ao botão "Fechar"
document.getElementById('closePopupInline').onclick = function() {
  document.getElementById('popup').style.display = 'none';
}
