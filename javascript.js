var hr=document.getElementById("hours");
var mn=document.getElementById("minutes");
var sc=document.getElementById("sec");


function analog()
{
    var today=new Date()
    var hrs=today.getHours();
    var mins=today.getMinutes();
    var secs=today.getSeconds();
    
      
    var hrsplace=hrs*(360/12)+(mins*360/60)/12;
    var minplace=mins*360/60 +(secs*360/60)/60;
    var secplace=secs*360/60;
    
  sc.style.cssText =
   "-webkit-transform:rotate(" + secplace + "deg);";
 mn.style.cssText =
   "-webkit-transform:rotate(" + minplace + "deg);";
 hr.style.cssText =
 "-webkit-transform:rotate(" + hrsplace + "deg);";
 

setTimeout(analog,1000)

}
window.onmousemove=analog;






function digital()
{
    var day= new Date()
var hours=day.getHours();
var minutes=day.getMinutes();
var secoonds=day.getSeconds();
var s="AM";
//for 12hours format
if(hours==0)
{
    hours=12;
}
else if (hours>12)
{
 hours=hours-12;
 s="PM";
}
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
secoonds = (secoonds < 10) ? "0" + secoonds : secoonds;

    document.getElementById("digital1").innerHTML=   hours+":"+minutes+":"+secoonds+""+s;
    setTimeout(digital, 1000);
    
}
window.onload=digital;

