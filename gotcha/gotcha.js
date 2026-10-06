const digimons = fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => data);
console.log(digimons);
