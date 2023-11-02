window.addEventListener("DOMContentLoaded", function(){
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    let body = document.querySelector("body");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let theadText = document.createTextNode("List of User");
    let tbody = document.createElement("tbody");
    body.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(theadText);
    table.appendChild(tbody);
    for (var i = 0; i < users.length; i++) {
        console.log(users[i][0])
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        var td1 = document.createElement("td");
        td1.textContent = users[i][0];
        var td2 = document.createElement("td");
        td2.textContent = users[i][1];
        tr.appendChild(td1);
        tr.appendChild(td2);
    }
});