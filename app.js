const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

const result = document.getElementById("result");
let count = 0;
function pressInc() {
    count++;
    // console.log(count);
    result.innerHTML = count;
}
function pressDec() {
    count--;
    // console.log(count);
    result.innerText=count;
}
inc.addEventListener("click", pressInc);
dec.addEventListener("click", pressDec);
