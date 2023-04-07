alert("Wanna see time ? Click on click me button and wait for a while . . .");

function showClock() {
    setInterval(() => {
        const d = new Date();
        document.getElementById('clock').innerHTML = d.toLocaleTimeString();
    }, 1000);
}

