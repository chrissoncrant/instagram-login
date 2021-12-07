let labels = document.querySelectorAll(".input-container label");

let inputs = document.querySelectorAll(".input-container input");

let logInBtn = document.querySelector('input[type="submit"]');

//Setting the Show Hide Button
const showHideContainer = document.getElementById('show-hide-container');

let showHideBtn = document.createElement('button');

showHideBtn.setAttribute('type', 'button');

showHideBtn.textContent = "Show";

showHideBtn.addEventListener('click', () => {
    if (showHideBtn.textContent === "Show") {
        showHideBtn.textContent = "Hide";
        document.getElementById("password").type = "text";
    } else {
        showHideBtn.textContent = "Show";
        document.getElementById("password").type = "password";
    }
})

//Login Button check variables:
let check1 = 0;
let check2 = 0;

//Input Event Behavior:
inputs.forEach(input => {   
    input.addEventListener('input', () => {
        if (input.id === "username") {
            if (input.value === "") {
                labels[0].classList.remove('triggered');
                check1 = 0;
            } else {
                labels[0].classList.add('triggered');
                check1 = 1;
            };
        };

        if (input.id === "password") {
            if (input.value === "") {
                labels[1].classList.remove('triggered');
                showHideContainer.removeChild(showHideBtn);
                check2 = 0;
            } else {
                labels[1].classList.add('triggered');
                showHideContainer.appendChild(showHideBtn);
                check2 = 1;
            };
        };

        if (check1 && check2) {
            logInBtn.style.backgroundColor = "blue";
            logInBtn.style.cursor = "pointer";
        } else {
            logInBtn.style.backgroundColor = "#0095f64d";
            logInBtn.style.cursor = "default";
        }
    });
});

//Outline Behavior:
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        if (input.id === "username") {
            document.querySelectorAll(".input-container")[0].classList.add("active-outline");
        } else {
            document.querySelectorAll(".input-container")[1].classList.add("active-outline");
        };
    })

    input.addEventListener('blur', () => {
        if (input.id === "username") {
            document.querySelectorAll(".input-container")[0].classList.remove("active-outline");
        } else {
            document.querySelectorAll(".input-container")[1].classList.remove("active-outline");
        };
    })
})