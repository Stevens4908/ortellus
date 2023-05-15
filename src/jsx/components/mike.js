

function saludo(){
    console.log("mike")
     fetch("http://127.0.0.1:8000/api/cliente")
     .then(response => response.json())
     .then(datareact => console.log(datareact))
     .catch(error => console.error(error));
    
 }