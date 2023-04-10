function start()
{
   var n1 = new Array( 5 ); // allocate five-element array
   var n2 = new Array(); // allocate empty array    
       
   // assign values to each element of array n1  
   var length = n1.length; // get array's length once before the loop

   for ( var i = 0; i < n1.length; ++i ) 
   {
      n1[ i ] = i;
   } // end for
   
   // create and initialize five elements in array n2
   for ( i = 0; i < 5; ++i )
   {
      n2[ i ] = i * 2;
   } // end for

   outputArray( "Array n1:", n1, document.getElementById( "output1" ) );
   outputArray( "Array n2:", n2, document.getElementById( "output2" ) );
} // end function start


// output the heading followed by a two-column table 
// containing indices and elements of "theArray"  
function outputArray( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Index</th><th>Value</th></thead><tbody>";

   // output the index and value of each array element
   var length = theArray.length; // get array's length once before loop
   
   for ( var i = 0; i < length; ++i )   
   {
      content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + 
         "</td></tr>";
   } // end for

   content += "</tbody></table>";
   output.innerHTML = content; // place the table in the output element
} // end function outputArray

window.addEventListener( "load", start, false );