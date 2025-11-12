const productos =[{nombre:"peluche", precio:20, img:"https://minisomx.vtexassets.com/arquivos/ids/385937-800-800?v=638966254469430000&width=800&height=800&aspect=true"}, 
{nombre: "playera", precio:200, img:"https://atoledementa.com/wp-content/uploads/2022/06/5D566907-5281-4D36-A7FA-4E8E2A7E6968-scaled.jpeg"}, 
{nombre:"peluche", precio:20, img:"https://minisomx.vtexassets.com/arquivos/ids/385937-800-800?v=638966254469430000&width=800&height=800&aspect=true"}, 
{nombre: "playera", precio:200, img:"https://atoledementa.com/wp-content/uploads/2022/06/5D566907-5281-4D36-A7FA-4E8E2A7E6968-scaled.jpeg"}, 
{nombre:"peluche", precio:20, img:"https://minisomx.vtexassets.com/arquivos/ids/385937-800-800?v=638966254469430000&width=800&height=800&aspect=true"}
]; 

const contenedor =document.getElementById("contenedor"); 

productos.forEach(prod =>{
    const card = document.createElement("div"); 
    card.className="card"; 

    card.innerHTML = ` 
    <img src="${prod.img}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p> 
    <button>Agregar</button> 
    `; 

    contenedor.appendChild(card); 
})