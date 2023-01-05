import {loadAddTrackBtn} from "./elementLoader.js"

class LayoutController {

    last = "Tracks";
    constructor() {
        this.asideHandler();
        this.switchContent("Tracks")
    }

    asideHandler = () => {
        const aside = document.querySelector("#menu");
                const bulletButton = document.querySelector("#bulletButton");
        const menuBubble = document.querySelector("#menuBubble");
        const menuOptions = Array.from(
            document.querySelector("#menuOptions").children
        );

        menuOptions.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                menuBubble.style.top = `${e.target.offsetTop - 10}px`;
                menuBubble.style.borderRadius = "20px";
                menuBubble.style.width = "85%";
                setTimeout(() => {
                  
                    this.switchContent(e.target.innerText);
                    menuBubble.style.borderRadius = "15px 0px 0px 15px";
                    menuBubble.style.width = "95%";
                }, 100);
            });
        });

        bulletButton.addEventListener("click", () => {
            if (aside.style.width == "0%") {
                bulletButton.style.transform = "rotate(0deg)";
                aside.style.width = "15%";         

                return;
            }
            bulletButton.style.transform = "rotate(180deg)";
            aside.style.width = "0%";
            
        });
    };

    switchContent = (targetPage) => {
        if(this.last == targetPage){
            return
        }
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (){
            
            if (this.readyState == 4) {
                
                document.querySelector("#content").innerHTML = this.responseText;
            
                
                switch(targetPage){
                    case"Home":

                    break;
                    case"Tracks":
                    loadAddTrackBtn();                  
                    break;
                    default:
                        
                }
                
            }
        };
        xhttp.open("GET", `./HtmlSnippets/${targetPage}.txt`);
        xhttp.send();
        this.last = targetPage;
    };
}

const layoutController = new LayoutController();
