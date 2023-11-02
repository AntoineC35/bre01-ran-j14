window.addEventListener("DOMContentLoaded", function(){
    let ul = document.getElementById("todo-list");
    let btn = document.querySelector("button")
    btn.addEventListener("click", function(event){
        let input = document.getElementById("newTask");
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        event.preventDefault();
    })
});