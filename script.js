let labels = document.querySelectorAll(".input-container label");

let inputs = document.querySelectorAll(".input-container input");

let logInBtn = document.querySelector('input[type="submit"]')




const showHideContainer = document.getElementById('show-hide-container');

let showHideBtn = document.createElement('button');

showHideBtn.classList.add("check");

showHideBtn.textContent = "Show";

showHideContainer.appendChild(showHideBtn);



console.log(labels);

console.log(showHideBtn);

let check = 0;

logInBtn.addEventListener('click', () => {
    if (!check) {
        showHideContainer.removeChild(showHideBtn);
        check++;
    } else {
        showHideContainer.appendChild(showHideBtn);
        check--;
    }  
})


inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.id === "username") {
            if (input.value === "") {
                labels[0].classList.remove('triggered');
            } else {
                labels[0].classList.add('triggered');
            }
        }

        if (input.id === "password") {
            if (input.value === "") {
                labels[1].classList.remove('triggered');
            } else {
                labels[1].classList.add('triggered');
            }
        }

    })
});