document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessages.innerHTML = '';

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        if (name === '') {
            valid = false;
            errorMessages.innerHTML += '<p>Please enter your name.</p>';
        }

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            valid = false;
            errorMessages.innerHTML += '<p>Please enter a valid 10-digit phone number.</p>';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            errorMessages.innerHTML += '<p>Please enter a valid email address.</p>';
        }

        if (message === '') {
            valid = false;
            errorMessages.innerHTML += '<p>Please enter your message.</p>';
        }

        if (valid) {
            showToast("Form submitted successfully!");
            form.reset();
        }
    });
});

// Toast notification function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function toggleMenu() {
    const nav = document.querySelector('header ul');
    nav.classList.toggle('active');
}