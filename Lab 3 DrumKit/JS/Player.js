import TimeLine from "./TimeLine.js";
class Player {
}
Player.playTrack = () => {
    setInterval(() => {
        TimeLine.tracks.forEach(track => {
            track.playTrack();
        });
    }, TimeLine.timeLineDuration * 1000);
};
export default Player;
