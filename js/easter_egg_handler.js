var mcrib_pattern = ["m", "c", "r", "i", "b"];
var mcrib_current = 0;

var keyHandler = function(event) {
    if((mcrib_pattern.indexOf(event.key) < 0) || event.key !== mcrib_pattern[mcrib_current]){
        mcrib_current = 0;
        return;
    }

    mcrib_current++;
    if (mcrib_pattern.length == mcrib_current) {
        window.location.replace("https://twitter.com/PointyyESM/status/1364715306611073032");   
    }

}

document.addEventListener("keydown", keyHandler, false);