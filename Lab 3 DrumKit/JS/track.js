import Piano from './Piano.js';
export class Track {
    constructor(instrument, color, name) {
        this.notes = [];
        this.muted = false;
        this.addNote = (Note) => {
            this.notes.push(Note);
        };
        this.playTrack = () => {
            this.notes.forEach((note) => {
                console.log(note);
                Piano.playSound(note);
            });
        };
        this.muteTrack = () => {
            this.muted = !this.muted;
        };
        this.color = color;
        this.name = name;
        this.instrument = instrument;
    }
}
