window.addEventListener("DOMContentLoaded", function(){
    
    let newTitle = document.createElement("h2");
    let newTitleText = document.createTextNode("Le titre de la deuxième section")
    newTitle.appendChild(newTitleText);
    
    let newPara = document.createElement("p")
    let newParaText = document.createTextNode("Le paragraphe de la deuxième section");
    newPara.appendChild(newParaText);
    
    let sectionAdd = document.querySelector("body > section:nth-child(3)");
    sectionAdd.appendChild(newTitle);
    sectionAdd.appendChild(newPara);
    
    /*
    let newTitle = document.createElement("h2");
    let newTitleText = document.createTextNode("Le titre de la deuxième section");
    newTitle.appendChild(newTitleText);
    let h2 = document.querySelector(body.section:nth-child(3));
    let test = document.querySelector(body.section:nth-child(3));
    h2.appendChild(newTitle);
    let newPara = document.createElement("p")
    let newParaText = document.createTextNode("Le paragraphe de la deuxième section");
    newPara.appendChild(newParaText);
    let p = document.getElementById("sectionDeux");
    p.appendChild(newPara); */
});