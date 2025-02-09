function backgroundÄndern() {
    let body = document.getElementById("body");

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b})`

    body.style.backgroundColor = rgb;
}
