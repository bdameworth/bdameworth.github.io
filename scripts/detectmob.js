
 


(function(window, document, undefined){

    function swapStyleSheet(sheet) {
        document.getElementById("pagestyle").setAttribute("href", sheet);  
    }
    
    window.onload = init;
    
      function init(){
        if (/*typeof screen.orientation !== 'undefined' ||*/ navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) { 
            swapStyleSheet("scripts/mobilestylesheet.css");
            console.log("mobile mode!");
         }else{
            console.log("PC mode!");
         }
      }
    
    })(window, document, undefined);