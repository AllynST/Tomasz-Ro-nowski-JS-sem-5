import { menuBubbleVisual } from "./visualsHandler.js";

const HomePageRef = document.getElementById("HomePage");
const TracksPageRef = document.getElementById("TracksPage");
const InstrumentsPageRef = document.getElementById("InstrumentsPage");
const ToolsPageRef = document.getElementById("ToolsPage");
const FreeplayPageRef = document.getElementById("FreeplayPage");
const LearnPageRef = document.getElementById("LearnPage");
const SettingsPageRef = document.getElementById("SettingsPage");

let prev:string = "FreeplayPage";

export function switchContentPage(pageName:string):void{

    pageName = pageName+"Page";

    if(prev == pageName) return;

    if(prev != undefined)
    document.getElementById(`${prev}`)!.style.display = "none";

    prev = pageName;
 
    console.log("Switched to: "+pageName)

    //Timeout to match the bubble animation
    setTimeout(() => {
        switch(pageName){
            case "HomePage":
                HomePageRef!.style.display = "block";            
            break;
            case "TracksPage":
                TracksPageRef!.style.display = "block";
            break;
            case "InstrumentsPage":
                InstrumentsPageRef!.style.display = "block";
            break;
            case "ToolsPage":
                ToolsPageRef!.style.display = "block";
            break;
            case "FreeplayPage":
                FreeplayPageRef!.style.display = "block";
            break;
            case "LearnPage":
                LearnPageRef!.style.display = "block";
            break;
            case "SettingsPage":
                SettingsPageRef!.style.display = "block";
            break;       
            
        }
    
    },200);
    
}



export function connectAsideBtns():void{
   
    const asideBtns = Array.from(document.querySelector("#menuOptions")!.children);
    asideBtns.forEach((btn:any)=>{
        btn.addEventListener("click",()=>{
            
            switchContentPage(btn.id)
            menuBubbleVisual(btn.offsetTop);
        })
    })
}

