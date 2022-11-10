class NoteKeeper{
    notes = []
    notifications = []


    constructor(){
        this.getLocalStorage();
    }

    updateNotificatons = ()=>{
        //TODO last thing todo
    }

    updateLocalStorage(){
        localStorage.setItem("notes",this.notes);
    }

    getLocalStorage = () =>{

        try{
            this.notes = JSON.parse(localStorage.getItem("notes"))
        }
        catch(err){
            throw new Error("There was an error while getting data from local storage")
        }
        
        
    }

    addNote = (title,content,color,tags,date = null,) =>{
        let createdNote = new Note(title,content,color);
        if(date !=null){
            createdNote.dateHandler(date)
        }
        this.notes.push(createdNote)

        this.updateLocalStorage();
    }

    pinNote = id =>{
        let note = this.notes.find(note=>note.id === id)
        note.pinHandler();

        this.updateLocalStorage();
    }

    editNote = (note,id) =>{
        let note = this.notes.find(note=>note.id === id)
        note.editNote(note.title,note.content,note.color)

        this.updateLocalStorage();
    }
}