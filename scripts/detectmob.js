function initiate(){
    if (typeof screen.orientation !== 'undefined') { 
        swapStyleSheet("mobilestylesheet.css");
     }
}

 
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

window.onload = initiate();