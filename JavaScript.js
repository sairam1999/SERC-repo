document.write("JavaScript ('JS' for short) is a full-fledged dynamic programming language that can add interactivity to a website.JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort.");
var a="SERC"
var b="RDIP"
console.log(a)
console.log(b)
var a=[1,2,3,4,5]
var x
console.log(typeof(a[3]),a[3])
console.log(typeof(a[3].toString()),a[3])
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

