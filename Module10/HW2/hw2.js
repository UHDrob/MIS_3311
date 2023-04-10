// Initializing arrays with initializer lists.
function start()
{
   // Initializer list specifies the number of elements and
   // a value for each element.
   var integers1 = new Array();                                
                                 
   var counter = 0;
   while (counter < 10) {
    numero = window.prompt("Enter integer between 50 and 100: ", "0");
    numValue = parseInt(numero);

    if (numValue < 50 | numValue > 100) {
        window.prompt("Only integers between 50 and 100")
        continue;
    }

    var searchKey = numValue;
    var element = integers1.indexOf( searchKey);

    if (element != -1) {
        integers1.splice(counter, 1);
    }
    else {
        integers1[counter] = numValue;
    }

    counter ++;
   } 


   outputArray( "Array contains", integers1, document.getElementById( "output1" ) );

} // end function start

// output the heading followed by a two-column table 
// containing indices and elements of "theArray"  
function outputArray( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Index</th><th>Value</th></thead><tbody>";

   // output the index and value of each array element
   var length = theArray.length; // get array's length once before loop
   
//    for ( var i = 0; i < length; ++i )   
//    {
//       content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + 
//          "</td></tr>";
//    } // end for

   for ( var element in theArray){
        content += "<tr><td>" + element + "</td><td>" + theArray[ element ] + 
    "</td></tr>";
   }

   content += "</tbody></table>";
   output.innerHTML = content; // place the table in the output element
} // end function outputArray

window.addEventListener( "load", start, false );