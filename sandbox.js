const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    if(h > 12) {
        h -= 12;
    }

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);