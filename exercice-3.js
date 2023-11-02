window.addEventListener("DOMContentLoaded", function(){
    let linkGoogleP = document.querySelector("p");
    let newLink = document.createElement("a");
    newLink.setAttribute("href","https://google.com")
    let newLinkText = document.createTextNode("ici");
    newLink.appendChild(newLinkText);
    linkGoogleP.appendChild(newLink);
    
});