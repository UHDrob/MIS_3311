

function start()
{
    var c = -9;
    var homework = "<h1> Homework 3 </h1>" + 
        "<h2>Roberto Gomez </h2>" +
        "<h4>  ---- Choose from the three sections below -----</h3>" +

        "<hr><h3> Section 1.1 - Math Methods for several values</h3>" +
        "<h4> Enter values for Z separated by space (Example: -2.5 3.7 1.2  ) then click on any button below <h4>" +
        
            "Z = " +
        "<textarea id = 'z'></textarea> <br> <br>" +
            
        "<button id = 'absArray'>ABS -Click to Calculate Absolute Value of X for an ARRAY </button>"  +
        "<br><br>" +
        "<p id = 'res6'></p>" +
        "<br><br>" +

        "<button id = 'ceilArray'>CEIL - Click to Round X to the smallest integer no less than X for an ARRAY</button>"  +
        "<br><br>" +
        "<p id = 'res7'></p>" +
        "<br><br>" +

        "<button id = 'floorArray'>FLOOR - Click to Round X to the largest integer no greater than X for an ARRAY</button>"  +
        "<br><br>" +
        "<p id = 'res8'></p>" +
        "<br><br>" +

        "<button id = 'roundArray'>ROUND - Click to Round X to the closest integer for an ARRAY</button>"  +
        "<br><br>" +
        "<p id = 'res9'></p>" +
        "<br><br>" +

        "<button id = 'logArray'>LOG - Click to Calculate the Natural Logarithm of X for an ARRAY</button>"  +
        "<br><br>" +
        "<p id = 'res10'></p>" +
        "<br><br>" +

        "<hr><h3> Section 1.2 - Math Methods for TWO values</h3>" +
        "<h4> Enter one number for X (example 5) and one numner for Y (example -2), then click on any button below <h4>" +

            "X = " +
        "<textarea id = 'x'></textarea> <br> <br>" +

            "Y = " +
        "<textarea id = 'y'></textarea> <br> <br>" +

        "<button id = 'max'>MAX -Calculate Larger Value of X and Y </button>"  +
        "<br><br>" +
        "<p id = 'res2'></p>" +
        "<br><br>" +

        "<button id = 'min'>MIN - Calculate Smaller Value of X and Y </button>"  +
        "<br><br>" +
        "<p id = 'res3'></p>" +
        "<br><br>" +

        "<hr><h3> Section 2 - Counter</h3>" +
        "<h4> Click the button to increase the counter <h4>" +

        "<button onclick='    document.getElementById('res').innerHTML = c++  '< - Click to count </button>"  +
        "<br><br>" +
        "<p id = 'res'>0</p>" +
        "<br><br>" ;

    document.getElementById("title").innerHTML = homework;

absoluteValueArray();
ceilingValueArray();
floorValueArray();
roundValueArray();
logValueArray();

maximumValue();
minimumValue();


// clicks();

} // end function start

// function clicks() 
// {
//     document.getElementById('counter').addEventListener("click",
//     counting() );
// }

function counting()
{
    document.getElementById('res').innerHTML = String(c++);


    // return;
    // let count = document.getElementById('count');
    // c++;
    
    // count.innerText = 'The button was clicked: ' + c + ' times!';
}



function absoluteValueArray()
{
    document.getElementById('absArray').addEventListener("click", 
    absoluteArray );
}

function ceilingValueArray()
{
    document.getElementById('ceilArray').addEventListener("click",
    ceilingArray );
}

function floorValueArray()
{
    document.getElementById('floorArray').addEventListener("click",
    floorArray );
}

function roundValueArray()
{
    document.getElementById('roundArray').addEventListener("click",
    roundArray );
}

function logValueArray()
{
    document.getElementById('logArray').addEventListener("click",
    logArray );
}

function maximumValue()
{
    document.getElementById('max').addEventListener("click", 
    maximum );
}

function minimumValue()
{
    document.getElementById('min').addEventListener("click", 
    minimum );
}


function absoluteArray ()
{
    var arrayAbs = new Array();
    arrayAbs = document.getElementById('z').value.split(' ');
    outputABS ("Absolute Method", arrayAbs, document.getElementById("res6"));
    return;
} ;

function outputABS( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th> X </th>  <th> Abs </th> </thead><tbody> ";

   for ( var element in theArray){
        content +=  "<tr> <td>" + theArray[ element ] + 
                    "</td><td>" + Math.abs(theArray[ element ]) + 
                    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; 
} 

function ceilingArray ()
{
    var arrayCeil = new Array();
    arrayCeil = document.getElementById('z').value.split(' ');
    outputCEIL ("Ceiling method", arrayCeil, document.getElementById("res7"));
    return;
} ;

function outputCEIL( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th> X </th>  <th> Ceil </th> </thead><tbody> ";

   for ( var element in theArray){
        content +=  "<tr> <td>" + theArray[ element ] + 
                    "</td><td>" + Math.ceil(theArray[ element ]) + 
                    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; 
} 

function floorArray ()
{
    var arrayFloor = new Array();
    arrayFloor = document.getElementById('z').value.split(' ');
    outputFLOOR ("Floor Method", arrayFloor, document.getElementById("res8"));
    return;
} ;

function outputFLOOR( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th> X </th>  <th> Floor </th> </thead><tbody> ";

   for ( var element in theArray){
        content +=  "<tr> <td>" + theArray[ element ] + 
                    "</td><td>" + Math.floor(theArray[ element ]) + 
                    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; 
} 

function roundArray ()
{
    var arrayRound = new Array();
    arrayRound = document.getElementById('z').value.split(' ');
    outputROUND ("Round Method", arrayRound, document.getElementById("res9"));
    return;
} ;

function outputROUND( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th> X </th>  <th> Round </th> </thead><tbody> ";

   for ( var element in theArray){
        content +=  "<tr> <td>" + theArray[ element ] + 
                    "</td><td>" + Math.round(theArray[ element ]) + 
                    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; 
} 

function logArray ()
{
    var arrayLog = new Array();
    arrayLog = document.getElementById('z').value.split(' ');
    outputLOG ("Log Method", arrayLog, document.getElementById("res10"));
    return;
} ;

function outputLOG( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th> X </th>  <th> Log </th> </thead><tbody> ";

   for ( var element in theArray){
        content +=  "<tr> <td>" + theArray[ element ] + 
                    "</td><td>" + Math.log(theArray[ element ]) + 
                    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; 
} 

function maximum ()
{
    var a = Number (document.getElementById('x').value);
    var b = Number (document.getElementById('y').value);
    var sol = Math.max(a, b);
    var res2 = document.getElementById('res2');
    res2.innerText=String(sol);
    return;
} ;

function minimum ()
{
    var a = Number (document.getElementById('x').value);
    var b = Number (document.getElementById('y').value);
    var sol = Math.min(a, b);
    var res3 = document.getElementById('res3');
    res3.innerText=String(sol);
    return;
} ;



window.addEventListener("load", start, false);