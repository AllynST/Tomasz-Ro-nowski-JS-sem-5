//This class holds only data about played note
//its purpouse is to cleanup unnecesary variable clutter and to simplify code
export class Note {
    constructor(startTime, keyCode, duration) {
        this.startTime = startTime;
        this.duration = duration;
        this.keyCode = keyCode;
    }
}
