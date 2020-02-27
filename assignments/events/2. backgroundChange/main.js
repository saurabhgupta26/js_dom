function randomColor() {
    let hexValue = ("1234567890abcdef").split("");
    let color1 = "#";
    for(let i =0; i<6; i++) {
        color1 = color1 + hexValue[Math.floor(Math.random()*15)];
    }
    document.body.style.backgroundColor = color1;
    console.log(color1);
}

document.addEventListener("click", randomColor);