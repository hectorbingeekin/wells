// -------------------------
// Clear username
// -------------------------
const clearBtn = document.querySelector(".clear-btn");
const username = document.getElementById("username");

if (clearBtn && username) {
    clearBtn.addEventListener("click", function () {
        username.value = "";
        checkInputs();
    });
}

// -------------------------
// Show / Hide password
// -------------------------
const password = document.getElementById("password");
const showBtn = document.querySelector(".show-btn");

if (showBtn && password) {
    showBtn.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            showBtn.textContent = "Hide";
        } else {
            password.type = "password";
            showBtn.textContent = "Show";
        }
    });
}

// -------------------------
// Sign On Button
// -------------------------
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

        signonBtn.style.setProperty("background", "#b31b2c", "important");
        signonBtn.style.setProperty("color", "#ffffff", "important");
        signonBtn.style.cursor = "pointer";

    } else if (signonBtn) {

        signonBtn.disabled = true;

        signonBtn.style.setProperty("background", "#bdbdbd", "important");
        signonBtn.style.setProperty("color", "#888888", "important");
        signonBtn.style.cursor = "not-allowed";
    }
}

// Listen for typing
if (username) {
    username.addEventListener("input", checkInputs);
}

if (password) {
    password.addEventListener("input", checkInputs);
}

// Run once when page loads
checkInputs();