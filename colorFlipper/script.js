document.addEventListener('DOMContentLoaded', () => {
    const btnSelector = document.getElementById("btn");
    const currentColor = document.getElementById("code");

    const hexaDec = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    function randomhexaDec(){
        return hexaDec[Math.floor(Math.random()*hexaDec.length)];
    }


    function randomColor(n) {
        colorCode = '';
        for(let i = 0; i < n; i++){
            colorCode += randomhexaDec();
        }
        
        return colorCode;
    }

    btnSelector.addEventListener('click', () => {
        
        const randHexaString = '#'+ randomColor(6);

        document.body.style.setProperty('background-color', randHexaString);

        currentColor.textContent = randHexaString;
    })
})