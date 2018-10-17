
window.onload = function(){
    var d = new Date();
    var monthName = [
                    "Janaury", 
                    "February", 
                    "March", 
                    "April", 
                    "May", 
                    "June", 
                    "July", 
                    "August", 
                    "September", 
                    "October", 
                    "November", 
                    "December"
                    ];
    var month = d.getMonth(); // getMonth = a value between 0-11
    var year = d.getFullYear(); // getYear = a predifined year method
    var firstDate = monthName[month] + " " + 1 + " " + year;

    var tmp = new Date(firstDate).toDateString(); 

    var firstDay = tmp.substring(0, 3);
    var dayName = [
                    "Mon", 
                    "Tue", 
                    "Wed", 
                    "Thu", 
                    "Fri", 
                    "Sat", 
                    "Sun"
                    ];
    var dayNo = dayName.indexOf(firstDay);
    // var month returns value between 1-11, we add 1 to get 12 (a year)
    var days = new Date (year, month+1, 0).getDate(); // Forstår ikke


    var calendar = getCalendar(dayNo, days);
    document.getElementById("calendar-month-year").innerHTML = monthName[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
} 

function getCalendar(dayNo, days) {
    var table = document.createElement("table");
    var tr = document.createElement("tr");

    // First row for the day letters
    for (var i = 0; i <= 6; i ++){
        var td = document.createElement("td");
        td.innerHTML = "MTWTFSS"[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // Second row for blanks spaces and days in second row
    var tr = document.createElement("tr");
    var i; 
    for (i = 0; i <= 6; i++){
        if(i === dayNo){
            break;
        }
        var td = document.createElement("td");
        td.innerHTML = ""; 
        tr.appendChild(td);
    }
    
    var count = 1; 
    for(var i = 0; i <= 6; i++){
        var td = document.createElement("td")
        td.innerHTML = count;
        count ++;
        td.setAttribute("id", "day_"+count);
            td.setAttribute("class", "day");
            td.addEventListener("click", function(){
                console.log(this);
            });
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // The rest of the date rows
    for (var r = 3; r <= 6; r++){
        tr = document.createElement("tr"); 
        for (var i = 0; i <= 6; i ++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement("td");
            td.innerHTML = count;
            count++;
            td.setAttribute("id", "day_"+count);
            td.setAttribute("class", "day");
            td.addEventListener("click", function(){
                console.log(this);

            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    td.setAttribute(id = "day");
}

var calendarClick = document.getElementsByName("td");
calendarClick.onclick = function(){
    console.log("hey");
} 

class Day {
    constructor(date, name){
        this.date = date;
        this.name = name; 
        this.events = [];
    }
    addEvent(event) {
        this.events.push(event);
    }
}


class Event {
    constructor(name, location, description, eventId){
        this.name = name; 
        this.location = location; 
        this.description = description;
        this.eventId = eventId;
    }
}

