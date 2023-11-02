let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

let computerResponse = document.createElement("h2");
let computerResponseBtn = document.createElement("button");
computerResponse.textContent = "L'ordinateur à choisi :"
computerResponse.appendChild(computerResponseBtn);
computerResponse.id = "computerR"

// Fonction l'ordi choisi sa réponse avec Math Rand(arrondi) parmis 3 options
let getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            computerResponseBtn.className = "pierre"
            return body.appendChild(computerResponse)
        } else if (randomNumber === 1){
            computerResponseBtn.className = "feuille"
            return body.appendChild(computerResponse);
        } else if (randomNumber === 2) {
            computerResponseBtn.className = "ciseaux";
            return body.appendChild(computerResponse);
        }
    }
    
buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    
     let computerRDelete = document.getElementById("computerR");
        if (computerRDelete) {
            computerRDelete.remove();
        }
        
    let finalResponse = document.getElementById("final");
        if (finalResponse) {
            finalResponse.remove()
        }
    
    getComputerChoice()
    
    let responseElements = document.getElementsByClassName("response");
    while (responseElements.length > 0) {
      responseElements[0].remove();
      }
      
    let userChoiceBe = button.value;
    if (userChoiceBe === "puit") {
             let computerRDelete = document.getElementById("computerR");
        if (computerRDelete) {
            computerRDelete.remove();
        }
        let response = document.createElement("p");
        response.className = "response";
        response.textContent = "Tricheurs !";
        return body.appendChild(response);
    }
    
    console.log(userChoiceBe)
    console.log(computerResponseBtn.className)
    
    const playGame = () => {
        let finalResponse = document.createElement("p")
        finalResponse.id = "final"
        const computerChoice = computerResponseBtn.className
        switch (true) {
            case (userChoiceBe === computerChoice):
                finalResponse.textContent = "it's a TIE"
                break;
            case (userChoiceBe === "pierre" && computerChoice === "ciseaux"):
            case (userChoiceBe === "feuille" && computerChoice === "pierre"):
            case (userChoiceBe === "ciseaux" && computerChoice === "feuille"):
                finalResponse.textContent = "Tu as Gagné !"
                break;
            default:
                finalResponse.textContent = "Looser !"
        }
        body.appendChild(finalResponse)
        
    }
    playGame()
  });
});

