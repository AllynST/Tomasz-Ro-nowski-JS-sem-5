import Note from './Note.js'
import ElementCreator from './ElementCreator.js';
class NoteKeeper{

    notes = []
    notifications = []


    constructor(){
        this.getLocalStorage();
        this.renderNotes();
    }

    updateNotificatons = ()=>{
        //TODO last thing todo
    }

    updateLocalStorage(){
        localStorage.setItem("notes",JSON.stringify(this.notes));
    }

    renderNotes = () =>{

        const cardsContainer = document.querySelector("#cardWrapper");
        this.notes.forEach(note=>{
            cardsContainer.prepend(ElementCreator.createNoteCard(note))
        })
    }

    getLocalStorage = () =>{

        try{
            this.notes = JSON.parse(localStorage.getItem("notes"))
        }
        catch(err){
            throw new Error("There was an error while getting data from local storage")
        }
        
        
    }

    addNote = (title,content,color,tags,dueDate) =>{    

    let newNote = new Note(
        title,
        content,
        color,
        tags,
        dueDate
    );
    console.log(this.notes)
        
        this.notes = [newNote,...this.notes]

        this.updateLocalStorage();
    }

    pinNote = id =>{
        let note = this.notes.find(note=>note.id === id)
        note.pinHandler();

        this.updateLocalStorage();
    }

    editNote = (note,id) =>{
        let currentNote = this.notes.find(note=>note.id === id)
        currentNote.editNote(note.title,note.content,note.color)

        this.updateLocalStorage();
    }
}

export default new NoteKeeper();