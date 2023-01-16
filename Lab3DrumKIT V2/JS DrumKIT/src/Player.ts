import { Recorder } from "./Recorder.js";
import TimeLine from "./TimeLine.js";
import { VisualiserClear, updateVisualiserState } from "./visualsHandler.js";

interface Player {
    playTrack(): void;
    muteTrack(id:number):void;
}
class Player {
    static playTrack = ():void => {

        updateVisualiserState();

        Recorder.resetContextTime();
        let interval = setInterval(() => {
            VisualiserClear();
            TimeLine.tracks.forEach((track) => {
                track.playTrack();
            });
            
            Recorder.resetContextTime();
        }, TimeLine.timeLineDuration * 1000);

        if (Recorder.recordState === false) clearInterval(interval);
    };

    static muteTrack = (id:number):void =>{
        TimeLine.tracks[id].muteTrack();
    }


}

export default Player;
