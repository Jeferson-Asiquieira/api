// api/proxy.js
const fetch = require('node-fetch');

export default async function handler(req, res) {
  const { orderID, verify } = req.query;

  // Montar a URL para pegar os dados
  const url = `https://futtransfer.top/getProof.php?orderID=${orderID}`;

  try {
    // Requisição para a URL com o orderID
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${verify}`, // Usando verify como Authorization, se necessário
      }
    });

    // Checando se a resposta foi bem-sucedida
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Falha na requisição' });
    }

    // Pegando os dados e enviando para o seu front-end
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno ao buscar dados' });
  }
}
