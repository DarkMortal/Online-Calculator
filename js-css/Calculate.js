function HCF(x, y) {
  while (x != y) {
    if (x > y)
      x = x - y;
    else
      y = y - x;
  }
  return x;
}
function getHCF() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var res = HCF(a, b);
  alert("The HCF of the given numbers is = " + res);
}

function getLCM() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var res = HCF(a, b);
  res = (a * b) / res;
  alert("The LCM of the given numbers is = " + res);
}

var π = Math.PI;

function log(a) {
  var n = Math.log(10); a
  return Math.log(a) / n;
}
function ln(a) { return Math.log(a); }
function exp(a) { return Math.exp(a); }

function toDegree(x) {
  return (x * 180) / Math.PI;
}

function CLS() {
  document.getElementById("screen").innerText = "";
  document.getElementById("result").innerText = "0.000";
}

function inputHelper(x) { document.getElementById("screen").innerHTML += x; }

function DEL() {
  var input = document.getElementById("screen").innerText;
  var n = 0, ch = input.charAt(input.length - 2);
  if (ch == 'h') n = 5;
  else if (ch == '0' && input.charAt(input.length - 1) == '(') n = 6;
  else if ((ch == 'n' && input.charAt(input.length - 3) != 'l') || ch == 's' || ch == 'g' || ch == 'p' || ch == 'w') n = 4;
  else if (ch == 'n' && input.charAt(input.length - 3) == 'l') n = 3;
  else n = 1;
  document.getElementById("screen").innerText = input.substring(0, input.length - n);
}

function Calculate() {
  try {
    var input = document.getElementById("screen").innerText;
    input = input.replaceAll("×", "*");
    input = input.replaceAll("÷", "/");
    input = input.replaceAll("π", "PI");
    var value = math.evaluate(input);
    document.getElementById("result").innerText = value.toFixed(3);
  } catch (err) {
    console.log(input);
    document.getElementById("result").innerText = "Malformed Expression";
  }
}

document.addEventListener("contextmenu", function (arg) {
  arg.preventDefault();
});




