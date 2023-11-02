window.addEventListener("DOMContentLoaded", function(){
    
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    var ul = document.createElement("ul");
    for (let i = 0; i < pokemons.length; i++) {
        var li = document.createElement("li");
        li.textContent = pokemons[i];
        ul.appendChild(li);
    }
    let tablePokemon = document.querySelector("body");
    tablePokemon.appendChild(ul);
});