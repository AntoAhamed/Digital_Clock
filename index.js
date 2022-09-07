function showClock() {
    setInterval(() => {
        const d = new Date();
        document.getElementById('clock').innerHTML = d.toLocaleTimeString();
    }, 1000);
}

