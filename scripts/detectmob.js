function initiate(){
    if (typeof screen.orientation !== 'undefined' || screen.width < 1500 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) { 
        swapStyleSheet("mobilestylesheet.css");
     }
}

 
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

window.onload = initiate();