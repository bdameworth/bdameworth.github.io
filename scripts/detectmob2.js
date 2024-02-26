
 


(function(window, document, undefined){

    function swapStyleSheet(sheet) {
        document.getElementById("pagestyle").setAttribute("href", sheet);  
    }
    
    window.onload = init;
    
      function init(){
        console.log("version 1.0.7");
        if (/*typeof screen.orientation !== 'undefined' ||*/ navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) { 
            //swapStyleSheet("scripts/mobilestylesheet.css");
            //window.location.href = "https://bdameworth.github.io/santadmob.html";
            window.location.assign("https://bdameworth.github.io/santadmob.html");
            
         }else{
            console.log("PC mode!");

         }
      }
    
    })(window, document, undefined);