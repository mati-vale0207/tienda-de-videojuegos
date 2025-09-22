//codigo para card de videjuegos al hacer click en telefonos
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('click', () => {
        const text = card.querySelector('.card-text');
        const isVisible = text.style.display === 'block';
        text.style.display = isVisible ? 'none' : 'block';
    });
});


//codigo para barra de busqueda


//titulos de videjuegos en el array 
const menuItems = [
    "Juegos",
    "Accion",
    "Aventura",
    "Deportes",
    "Multijugador",
    "Ofertas",
    "Mi cuenta",
    "Tom Raider",
    "Call of Duty",
    "Need For Speed",
    "Hallo 5",
    "God of War",
    "Spider Man",
    "One Piece",
    "Minecraft"
];

const searchBar = document.getElementById("searchBar");
const suggestions = document.getElementById("suggestions");
const cards = document.querySelectorAll(".card-item");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    suggestions.innerHTML = "";



    //filtra segun lo que escriba el usuario
    const filtered = menuItems.filter(item =>
        item.toLowerCase().includes(query)
    );

    if(filtered.length === 0){
        //si no encuentra nada muestra un mensaje
        const li = document.createElement("li");
        li.classList.add("list-group-item", "text-danger");
        li.textContent = "No hay coincidencias";
        suggestions.appendChild(li);
    } else {

    //mostrar coincidencias
    filtered.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = item;

        //evento al hacer click llena el input
        li.addEventListener("click", () => {
            searchBar.value = item;
            suggestions.innerHTML = "";
            filterCards(item);
        });

        suggestions.appendChild(li);
    });
}

//filtra las cartas mientras se escribe
filterCards(query);
});

//funcion para ocultar/mostrar la card segun la busqueda
function filterCards(query) {
    const q = query.toLowerCase().trim();

    // Si el input está vacío, mostrar todas las cards
    if(q === "") {
        cards.forEach(card => card.style.display = "flex");
        return;
    }

    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase().trim();
        if(title.includes(q)){
            card.style.display = "flex"; // o "" si quieres que tome el display original
        } else {
            card.style.display = "none";
        }
    });
}