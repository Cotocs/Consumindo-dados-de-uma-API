let luke;
fetch('https://swapi.dev/api/people/1')
   .then(response => response.json())
   .then(json => {console.log(json)
    luke=json.name
    const nome=document.querySelector('.nome')
    nome.innerHTML=`<h1>${luke}</h1>`})


   
