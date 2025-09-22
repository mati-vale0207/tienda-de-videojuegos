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

searchBar.addEventListener("input", () => {
    const query = searchBar.ariaValueMax.toLowerCase();
    suggestions.innerHTML = "";

    if (query.length === 0) return;

    //filtra segun lo que escriba el usuario
    const filtered = menuItems.filter(item =>
        item.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        //si no encuentra nada muestra un mensaje
        const li = document.createElement("li");
        li.classList.add("list-group-item", "text-danger");
        li.textContent = "No hay coincidencias";
        suggestions.appendChild(li);
        return;
    }

    //mostrar coincidencias
    filtered.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = item;

        //evento al hacer click llena el input
        li.addEventListener("click", () => {
            searchBar.value = item;
            suggestions.innerHTML = "";
        });

        suggestions.appendChild(li);
    });
});