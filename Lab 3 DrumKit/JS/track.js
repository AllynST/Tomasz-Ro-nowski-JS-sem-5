import Piano from './Instruments/Piano.js';
import { VisualiserPlaceNotes } from "./visualsHandler.js";
export class Track {
    constructor(index, name, color) {
        this.notes = [];
        this.muted = false;
        this.addNote = (Note) => {
            if (Note.keyCode == undefined) {
                return;
            }
            this.notes.push(Note);
        };
        this.clearNotes = () => {
            this.notes = [];
        };
        this.playTrack = () => {
            if (this.muted) {
                return;
            }
            VisualiserPlaceNotes(this.notes, this.color);
            this.notes.forEach((note) => {
                console.log(note);
                Piano.playSound(note, this.color);
            });
        };
        this.muteTrack = () => {
            this.muted = !this.muted;
        };
        this.color = color;
        this.name = name;
        this.index = index;
    }
}
