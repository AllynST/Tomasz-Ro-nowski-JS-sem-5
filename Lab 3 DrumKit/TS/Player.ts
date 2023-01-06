import { Recorder } from "./Recorder.js";
import TimeLine from "./TimeLine.js";

interface Player {
    playTrack(): void;
}
class Player {
    static playTrack = () => {
        Recorder.resetContextTime();
        let interval = setInterval(() => {
            TimeLine.tracks.forEach((track) => {
                track.playTrack();
            });

            Recorder.resetContextTime();
        }, TimeLine.timeLineDuration * 1000);

        if (Recorder.recordState === false) clearInterval(interval);
    };
}

export default Player;
