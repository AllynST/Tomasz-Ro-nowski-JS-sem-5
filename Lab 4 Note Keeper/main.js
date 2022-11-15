import noteKeeper from "./noteKeeper.js";




addNoteBtn.addEventListener("click", e =>{

    const inputTitleElem = document.querySelector("#inputCardTitle");
    const inputContentElem = document.querySelector("#inputCardContent");
    const inputDateElem = document.querySelector("#inputCardDate");
    const inputColorElem = document.querySelector("#inputCardColor");
    const inputTagsElem = document.querySelector("#inputCardTags");
    

    noteKeeper.addNote(
        inputTitleElem.value,
        inputContentElem.value,
        inputColorElem.value,
        inputTagsElem.value,
        inputDateElem.value = null ? null : inputDateElem.value        
    )
   

});

