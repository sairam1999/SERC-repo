var str="JavaScript is a full-fledged dynamic programming language that can add interactivity to a website.JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort.";
document.getElementById("js").innerHTML=str;

var a="SERC"
var b="RDIP"
console.log(a)
console.log(b)

//int to string
var a=[1,2,3,4,5]
var x
console.log(typeof(a[3]),a[3])
console.log(typeof(a[3].toString()),a[3])

//date
var d = new Date(2020, 6, 30, 12, 30);
console.log(d);


//total,average and other math functions
function totalavg()
{
let sum=0
let avg=0
let count=1
let i=0
 var arr=[92,85,75,75,85,87,93,91]
 for(i=0;i<arr.length;i++)
 {
     sum=sum+arr[i];
     count++;
 }
avg=sum/count
console.log(sum,avg)

document.getElementById("total").innerHTML=sum
document.getElementById("average").innerHTML=avg
document.getElementById("round").innerHTML=Math.round(avg)
document.getElementById("ceil").innerHTML=Math.ceil(avg)
document.getElementById("floor").innerHTML=Math.floor(avg)
document.getElementById("sqrt").innerHTML=Math.sqrt(avg)
document.getElementById("rand").innerHTML=Math.random()
document.getElementById("sin").innerHTML=Math.sin(avg)
}

function home()
{
    alert("moved to home page");

}
function register()
{
    alert("register page loaded");
}

function details()
{
    alert("moving to details page");
}

function IfElseAndFibonacci()
{
    //console.log("n is 15 ");
    n = prompt("enter value between 10 and 100");
  try { 
    if(n == "")  throw "empty";
    if(isNaN(n)) throw "not a number";
    n = Number(n);
    if(n < 10)  throw "too low";
    if(n > 100)   throw "too high";
  }
  catch(err) {
    alert("Input is " + err);
  }


  alert("check output in console-log");
    if(n>10 && n<100)
    {
        var a=0
        var b=1
        var i=0
        for(i=3;i<=n;i++)
        {
            c=a+b;
            console.log("fibonacci at"+ i+"="+ c);
            a=b;
            b=c;

        }
    }
}


function words() {
    var arr = str.split(" ");
    document.getElementById("word5").innerHTML = "word 5 is = " + "'"+ arr[4]+"'";
    document.getElementById("word7").innerHTML = "word 7 is = " + "'" +arr[6] + "'";
    document.getElementById("word10").innerHTML = "word 10 is = " +"'"+ arr[9]+"'";

  }