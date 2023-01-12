import TimeLine from "./TimeLine.js";
import { createCustomElement } from "./helpers.js";
export function createTrackElem(Track) {
    let trackContainer = document.getElementById("TrackList");
    const trackNameP = createCustomElement("p", {
        innerText: Track.name
    });
    trackNameP.style.color = Track.color;
    const muteBtn = createCustomElement("div", {
        id: Track.index,
        className: "labelIcon muteBtn"
    });
    const deleteBtn = createCustomElement("div", {
        id: Track.index,
        className: "labelIcon deleteBtn"
    });
    const clearBtn = createCustomElement("div", {
        id: Track.index,
        className: "labelIcon clearBtn"
    });
    const label = createCustomElement("div", {
        id: Track.index,
        className: "trackLabel",
        children: [
            trackNameP,
            muteBtn,
            deleteBtn,
            clearBtn
        ]
    });
    connectTrackListeners(label, muteBtn, deleteBtn, clearBtn);
    console.log("track appended");
    trackContainer.prepend(label);
}
function connectTrackListeners(label, muteBtn, deleteBtn, clearBtn) {
    //TODO CHANGE ANY add logic
    label.addEventListener("click", (e) => {
        console.log("Switched to track: " + e.target.id);
        TimeLine.selectedTrack = e.target.id;
    });
    muteBtn.addEventListener("click", (e) => {
        console.log("Track muted: " + e.target.id);
        e.target.classList.toggle("muted");
    });
    deleteBtn.addEventListener("click", (e) => {
        console.log("TrackDeleted: " + e.target.id);
    });
    clearBtn.addEventListener("click", (e) => {
        console.log("Track: " + e.target.id + " cleared");
    });
}
