// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener("click", function () {
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(isReady === true) {
            console.log("hi");
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        };
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if(confirmAbort === true) {
            document.getElementById("flightStatus").innerHTML = "Mission Aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        };
    });

    let shuttle = document.getElementById("rocket");
    let up = document.getElementById("upButton");
    upButton.addEventListener("click", () => {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });

    let down = document.getElementById("downButton");
    downButton.addEventListener("click", () => {
        document.getElementById("rocket").style.height = 10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });



});