const fetch = require('node-fetch')

module.exports = async function buscaLetra(artist, music) {
  const response = await fetch(`https://api.vagalume.com.br/search.php?art=${artist}&extra=artpic&mus=${music}`);
  const json = await response.json();
  return json;
}