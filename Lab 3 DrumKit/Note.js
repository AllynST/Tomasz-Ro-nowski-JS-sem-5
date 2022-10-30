class Note{

    //This class holds only data about played note
    //its purpouse is to cleanup unnecesary variable clutter and to simplify code



    //startTime from the beggining of the track
    startTime
    //duration of the keypress
    duration
    //TODO think of a way to play sound!!!!!(good way)
    keyCode




    constructor(startTime,keyCode,duration){
        this.startTime = startTime;
        this.duration = duration;
        this.keyCode= keyCode;
    }
}