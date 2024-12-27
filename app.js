let colorCode = document.getElementById("color-code");
let btn = document.getElementById("btn");

const getColor = () => {
    let randomNum = Math.floor(Math.random() * 16777215);
    let randomCode = `#${randomNum.toString(16)}`;
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
    
}

btn.addEventListener('click',getColor); 
getColor();