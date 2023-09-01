// ***********************************************************
// FAQ

//<![CDATA[
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove("fa-plus");
            icons[i].classList.add("fa-minus");
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove("fa-minus");
            icons[i].classList.add("fa-plus");
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = 0;
                toggles[j].style.color = "#111130";
                icons[j].classList.remove("fa-minus");
                icons[j].classList.add("fa-plus");
            }
        }
    });
}
//]]>

// ***********************************************************
// counter 
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


// ***********************************************************
// form validation

function validateForm() {
    
    const errorElements = document.getElementsByClassName('error');
    for (const errorElement of errorElements) {
        errorElement.textContent = '';
    }

    const username = document.getElementById('usernames').value;
    const email = document.getElementById('email').value;
    const service = document.querySelector('.state1').value;
    const phone = document.getElementById('conpassword').value;

    let isValid = true;

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'E-mail is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address';
        isValid = false;
    }

    if (service === 'AP') {
        document.getElementById('serviceError').innerText = 'Please select a service';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').innerText = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    // Phone number validation pattern (exactly 10 digits)
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
