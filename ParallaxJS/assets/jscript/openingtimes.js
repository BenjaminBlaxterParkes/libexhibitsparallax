/**
 * openingtimes.js
 * 
 * simple script to check date and print appropriate opening times for UofE library main gallery
 * 
 * @author bparkes.ed.ac.uk
 */

var dt = new Date("June 12, 2019 00:00:00");
    if (dt.getDay()!==0){
        document.getElementById("opening-times").innerHTML = "OPEN TODAY:   9am - 5pm";
    }
    else {
        document.getElementById("opening-times").innerHTML = "CLOSED TODAY";
    }