const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    // 16777215 is special number when multiplied returns hexadecimal number
    const randomCode = "#"+randomNumber.toString(16);
    // 16 for hexadecimal code
    // console.log(randomNumber,randomCode);

    document.getElementById("colorCode").innerText = randomCode;



    document.body.style.backgroundColor = randomCode;
}


    // event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// initial call 
getColor();