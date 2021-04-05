function HCF(x,y){
    while(x!=y)
    {
      if(x>y)
      x=x-y;
      else
      y=y-x;
    }
    return x;
}
function getHCF(){
   var a= parseInt(document.getElementById("num1").value);
   var b= parseInt(document.getElementById("num2").value);
   var res=HCF(a,b);
   alert("The HCF of the given numbers is = "+res);
}

function getLCM(){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    var res=HCF(a,b);
    res=(a*b)/res;
    alert("The LCM of the given numbers is = "+res);
 }

var π=Math.PI;

function log(a){
  var n=Math.log(10);a
  return Math.log(a)/n;
}
function ln(a){ return Math.log(a); }
function exp(a){ return Math.exp(a); }

function toDegree(x){
  return (x*180)/Math.PI;
}

function CLS(){
   document.getElementById("screen").innerText="";
   document.getElementById("result").innerText="0.00";
}

function PIE(){ document.getElementById("screen").innerText+="π"; }

function sinB(){ document.getElementById("screen").innerText+="sin("; }
function cosB(){ document.getElementById("screen").innerText+="cos("; }
function tanB(){ document.getElementById("screen").innerText+="tan("; }

function sinhB(){ document.getElementById("screen").innerText+="sinh("; }
function coshB(){ document.getElementById("screen").innerText+="cosh("; }
function tanhB(){ document.getElementById("screen").innerText+="tanh("; }

function logB(){ document.getElementById("screen").innerText+="log("; }
function lnB(){ document.getElementById("screen").innerText+="ln("; }
function expB(){ document.getElementById("screen").innerText+="exp("; }

function multiply(){ document.getElementById("screen").innerText+="×"; }
function divide(){ document.getElementById("screen").innerText+="÷"; }
function add(){ document.getElementById("screen").innerText+="+"; }
function minus(){ document.getElementById("screen").innerText+="-"; }

function bracket_left(){ document.getElementById("screen").innerText+="("; }
function bracket_right(){ document.getElementById("screen").innerText+=")"; }
function comma(){ document.getElementById("screen").innerText+=","; }
function decimal(){ document.getElementById("screen").innerText+="."; }
function mod(){ document.getElementById("screen").innerText+="%"; }

function butt0(){ document.getElementById("screen").innerText+="0";}
function butt1(){ document.getElementById("screen").innerText+="1";}
function butt2(){ document.getElementById("screen").innerText+="2";}
function butt3(){ document.getElementById("screen").innerText+="3";}
function butt4(){ document.getElementById("screen").innerText+="4";}
function butt5(){ document.getElementById("screen").innerText+="5";}
function butt6(){ document.getElementById("screen").innerText+="6";}
function butt7(){ document.getElementById("screen").innerText+="7";}
function butt8(){ document.getElementById("screen").innerText+="8";}
function butt9(){ document.getElementById("screen").innerText+="9";}

function powB(){ document.getElementById("screen").innerText+="pow(";}
function DEL(){
  var input=document.getElementById("screen").innerText;
   var ch=input.charAt(input.length-2);
   if(ch=='h') input=input.substr(0,input.length-5);
   else if((ch=='n' && input.charAt(input.length-3)!='l') || ch=='s' || ch=='g' || ch=='p' || ch=='w') input=input.substr(0,input.length-4);
   else if(ch=='n' && input.charAt(input.length-3)=='l') input=input.substr(0,input.length-3);
   else input=input.substr(0,input.length-1);
   document.getElementById("screen").innerText=input;
}

function pow(a,b){
   return Math.pow(a,b);
}
function sin(x){
  return Math.sin(x);
}
function cos(x){
  return Math.sin(x);
}
function tan(x){
  return Math.sin(x);
}
function sinh(x){
  return Math.sin(x);
}
function cosh(x){
  return Math.sin(x);
}
function tanh(x){
  return Math.sin(x);
}
function exp(x){
  return Math.exp(x);
}

function Calculate(){
  try {
    var input=document.getElementById("screen").innerText;
    input = input.replace("×","*");
    input = input.replace("÷","/");  
    var value=eval(input);
    document.getElementById("result").innerText=value.toFixed(3);
  } catch (err) {
    document.getElementById("result").innerText="Malformed Expression";
  }
}

document.addEventListener("contextmenu",function(arg){
  arg.preventDefault();
});




