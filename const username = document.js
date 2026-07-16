const username = document.getElementById("username");
const password = document.getElementById("password");
const signOnBtn = document.getElementById("signOnBtn");

function checkInputs() {
    if (username.value.trim() !== "" && password.value.trim() !== "") {
        signOnBtn.disabled = false;
        signOnBtn.style.background = "#8f2332";
        signOnBtn.style.cursor = "pointer";
    } else {
        signOnBtn.disabled = true;
        signOnBtn.style.background = "#bdbdbd";
        signOnBtn.style.cursor = "not-allowed";
    }
}

username.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);