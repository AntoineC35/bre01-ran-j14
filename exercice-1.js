window.addEventListener("DOMContentLoaded", function(){
    let btnSugar = document.getElementById("addSugar");
    btnSugar.addEventListener("click", function(){
        let newLi = document.createElement("li");
        let newLiText = document.createTextNode("Sucre")
        newLi.appendChild(newLiText);
        let ul = document.getElementById("ingredients");
        ul.appendChild(newLi);
    })
});