{/* <script type="text/javascript"> */}
    window.onload = function () {
        //Reference the DropDownList.
        var ddlYears = document.getElementById("ddlYears");
 
        //Determine the Current Year.
        var currentYear = (new Date()).getFullYear();
 
        //Loop and add the Year values to DropDownList.
        for (var i = 1980; i <= currentYear; i++) {
            var option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            ddlYears.appendChild(option);
        }
    };
// </script>

var months = document.getElementById("months");
arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
for(var i=0; i<=arr.length; i++)
{
    var option = document.createElement("OPTION");
    txt=document.createTextNode(arr[i]);
    option.appendChild(txt);
    months.insertBefore(option,months.lastChild);

}

var D = document.getElementById("D");
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
for(var i=0; i<=arr.length; i++)
{
    var option = document.createElement("OPTION");
    txt=document.createTextNode(arr[i]);
    option.appendChild(txt);
    D.insertBefore(option,D.lastChild);

}



var m = document.getElementById("m");
arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
for(var i=0; i<arr.length; i++)
{
var option = document.createElement("OPTION");
txt=document.createTextNode(arr[i]);
option.appendChild(txt);
m.insertBefore(option,m.lastChild);

}

var Da = document.getElementById("Da");
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
for(var i=0; i<arr.length; i++)
{
var option = document.createElement("OPTION");
txt=document.createTextNode(arr[i]);
option.appendChild(txt);
Da.insertBefore(option,Da.lastChild);

}
var y = document.getElementById("y");
arr = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
for(var i=0; i<arr.length; i++)
{
var option = document.createElement("OPTION");
txt=document.createTextNode(arr[i]);
option.appendChild(txt);
y.insertBefore(option,y.lastChild);

}

// $(document).ready(function () {
//     $('.clsAlphaNoOnly').keypress(function (e) {  // Accept only alpha numerics, no special characters 
//           var regex = new RegExp("^[a-zA-Z0-9 ]+$");
//           var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
//           if (regex.test(str)) {
//               return true;
//           }
  
//           e.preventDefault();
//           return false;
//       }); 
//   })

  function togglePopup() {
    // e.preventDefault()
    $(".content").toggle();
}







