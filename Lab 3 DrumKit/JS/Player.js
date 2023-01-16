import { Recorder } from "./Recorder.js";
import TimeLine from "./TimeLine.js";
import { VisualiserClear, updateVisualiserState } from "./visualsHandler.js";
class Player {
}
Player.playTrack = () => {
    updateVisualiserState();
    Recorder.resetContextTime();
    let interval = setInterval(() => {
        VisualiserClear();
        TimeLine.tracks.forEach((track) => {
            track.playTrack();
        });
        Recorder.resetContextTime();
    }, TimeLine.timeLineDuration * 1000);
    if (Recorder.recordState === false)
        clearInterval(interval);
};
Player.muteTrack = (id) => {
    TimeLine.tracks[id].muteTrack();
};
export default Player;
