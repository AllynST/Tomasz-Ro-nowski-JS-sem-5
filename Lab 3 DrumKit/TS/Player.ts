import TimeLine from "./TimeLine.js"

interface Player{
    playTrack():void;
}
class Player{



    static playTrack = ()=>{
        setInterval(() => {
        TimeLine.tracks.forEach(track => {
            track.playTrack();
        })}, TimeLine.timeLineDuration*1000);
    }



}


export default Player;