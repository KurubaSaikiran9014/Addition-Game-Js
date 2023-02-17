let f = document.getElementById("firstNumber");
let s = document.getElementById("secondNumber");
let gmsg = document.getElementById("gameResult");
let inp = document.getElementById("userInput");
f.textContent = Math.ceil(Math.random() * 100);
s.textContent = Math.ceil(Math.random() * 100);

function checkinput() {
    let fi = parseInt(f.textContent);
    let se = parseInt(s.textContent);
    let res = fi + se;
    let ip = parseInt(inp.value);
    if (res === ip) {
        gmsg.textContent = "Congratulations! You got it right.";
        gmsg.style.backgroundColor = "#028a0f";
    } else {
        gmsg.textContent = "Please Try Again!";
        gmsg.style.backgroundColor = "#1e217c";
    }
}

function resetall() {
    let fv = Math.ceil(Math.random() * 100);
    let sv = Math.ceil(Math.random() * 100);
    f.textContent = fv;
    s.textContent = sv;
    gmsg.textContent = "";
    inp.value = "";


}
