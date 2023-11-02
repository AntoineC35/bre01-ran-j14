let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
      event.preventDefault();
    
    let responseElements = document.getElementsByClassName("response");
    while (responseElements.length > 0) {
      responseElements[0].remove();
      }
      
    let userChoiceBe = button.value;
    console.log(userChoiceBe);
    if (userChoiceBe === "puit") {
        let response = document.createElement("p");
        response.className = "response";
        response.textContent = "Tricheurs !";
        return body.appendChild(response);
    }
  });
});
