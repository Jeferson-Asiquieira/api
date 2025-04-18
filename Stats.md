<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de Ordem</title>
    <script>
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
                        // Exibindo os dados recebidos
                        console.log(data);
                        document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
                    })
                    .catch(error => {
                        console.error('Erro ao buscar os dados:', error);
                        document.getElementById("result").innerHTML = "Erro ao buscar os dados.";
                    });
            } else {
                console.log('orderID não encontrado na URL');
                document.getElementById("result").innerHTML = "orderID não encontrado na URL.";
            }
        });
    </script>
</head>
<body>
    <h1>Verificação de Ordem</h1>
    <p>Estamos verificando os dados para o pedido:</p>
    
    <!-- Exibindo os resultados aqui -->
    <pre id="result">Aguardando o resultado...</pre>

</body>
</html>
