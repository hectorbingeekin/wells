// Clear username
// Clear username
const clearBtn = document.querySelector(".clear-btn");

if (clearBtn) {
    clearBtn.onclick = function () {
        document.querySelector('input[type="text"]').value = "";
    };
}

// Show/Hide password
const password = document.getElementById("password");
const showBtn = document.querySelector(".show-btn");

if (showBtn) {
    showBtn.onclick = function () {
        if (password.type === "password") {
            password.type = "text";
            showBtn.textContent = "Hide";
        } else {
            password.type = "password";
            showBtn.textContent = "Show";
        }
    };
}

// Enable/Disable Sign On button
const username = document.getElementById("username");
const signonBtn = document.getElementById("signonBtn");

function checkInputs() {
    if (
        username &&
        password &&
        signonBtn &&
        username.value.trim() !== "" &&
        password.value.trim() !== ""
    ) {
        signonBtn.disabled = false;
        signonBtn.style.background = "#b31b2c";
        signonBtn.style.cursor = "pointer";
    } else if (signonBtn) {
        signonBtn.disabled = true;
        signonBtn.style.background = "#bdbdbd";
        signonBtn.style.cursor = "not-allowed";
    }
}

if (username) username.addEventListener("input", checkInputs);
if (password) password.addEventListener("input", checkInputs);

checkInputs();