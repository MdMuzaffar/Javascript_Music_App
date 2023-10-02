window.addEventListener('click', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sound[index].currentTime = 0;
            sound[index].play();
        })
    })
})