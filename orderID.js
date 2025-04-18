// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Capturando o orderID da URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderID = urlParams.get('orderID');
  const verify = 'M2ViZjUyYTYtYmI3Mi00NGFlLTk3ODYtMGFjZWJlMjAxYTA5MjAyNS0wNC0xNyAxOToyOTo0NA=='; // Este valor será o mesmo em todos os casos

  if (orderID) {
    // Realizando a requisição para o seu endpoint no Vercel
    fetch(`https://proxy-fut.vercel.app/proxy?orderID=${orderID}&verify=${verify}`)
      .then(response => response.json())
      .then(data => {
        // Faça algo com os dados aqui
        console.log(data);
        // Exemplo: mostrar os dados no console
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  } else {
    console.log('orderID não encontrado na URL');
  }
});
