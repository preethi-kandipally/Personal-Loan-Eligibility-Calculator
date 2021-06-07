function mainfun()
{
var DOB=document.getElementById("DOB").value;
var today=new Date();
var mdate = DOB.toString();
var yearThen = parseInt(mdate.substring(0,4), 10);
var monthThen = parseInt(mdate.substring(5,7), 10);
var birthday = new Date(yearThen, monthThen-1);
var differenceInMilisecond = today.valueOf() - birthday.valueOf();
var year_age = Math.floor(differenceInMilisecond / 31536000000);
console.log(year_age);
if(year_age>=60 || year_age<=21)
alert("your not eligible for loan");


//loan
var s=document.getElementById("income").value;


console.log(s);
var e=document.getElementById("expenses").value;
console.log(e);


    if(s>=10000 && s<=100000)
    {    
        if(e>=s && Math.ceil((e/s)*100)>75)
        {
        a=0;
        console.log(Math.ceil((e/s)*100));
        console.log("1");
        }
        else if(Math.ceil(((e/s)*100))>=65 && Math.ceil(((e/s)*100)<=75))
        {
           a=(s*15)-50000;
          console.log("2");
        }
        else if(Math.ceil((e/s)*100)>75)
        {
       a=0;
        }
        else
        {
        a=s*15;
        console.log("3");
        
        }
    }
    else if(s>100000)
    {   if(Math.ceil((e/100000)*100)>75 && e>=s)
        {
        a=0;
        console.log("4");
        }
        else if(Math.ceil((e/100000)*100)>=65 || Math.ceil((e/100000)*100)<=75)
        {
            a=1000000;
            console.log("5");
        }
        else
        {
        a=1500000;
        console.log("6");
        }
    }
    else
    {
        a=0;
        console.log("7");
    }
    document.getElementById("amount").innerHTML=a;
    if(year_age>=60 || year_age<=21)
    document.getElementById("amount").innerHTML=0;


}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
