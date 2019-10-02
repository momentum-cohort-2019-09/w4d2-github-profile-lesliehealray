 const nameDiv = document.querySelector('#name')
 const homeWorldDiv = document.querySelector('#homeworld')
 const films = document.querySelector('#films')

 fetch('https://swapi.co/api/people/4/')
.then(function(response){
    return response.json()
})
.then(data =>{
    console.log(data)
    nameDiv.innerText = `My name is ${data.name}` 
    async function fetchAll() {
        const results = Promise.all(
            data.films.map((url) => fetch(url).then((r) => r.json())
              .then(data => {
                var node = document.createElement("li");                
                var textnode = document.createTextNode(data.title);        
                node.appendChild(textnode);                             
                films.appendChild(node);    

              })
        ));
      }
    fetchAll()
      
    return fetch(data.homeworld)  
})
.then(res => res.json())
  .then(data => {
    homeWorldDiv.innerText = `My homeland is ${data.name}`
  })

      // document.getElementById("raw").innerHTML = JSON.stringify(data)
