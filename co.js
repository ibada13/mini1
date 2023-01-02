var in1 = document.getElementById('in1');
var in2 = document.getElementById('in2');
var in3 = document.getElementById('in3');
var bd = document.getElementById('bd');
let pr = document.getElementById('pr')
function tr() {

    pr.style.color="rgb(".concat(in1.value, ",").concat(in2.value, ",").concat(in3.value, ")");
    bd.style.backgroundColor = "rgb(".concat(in1.value, ",").concat(in2.value, ",").concat(in3.value, ")");
}
function gr() {
    in1.value = Math.round(Math.random() * 255);
    in2.value = Math.round(Math.random() * 255);
    in3.value = Math.round(Math.random() * 255);
    tr();
}
