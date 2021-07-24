function togglePanel() {
    var sp = document.getElementById("side-toggle");
    
    if (sp.style.display === "none") {
        sp.style.display = "block";
    } else {
        sp.style.display = "none";
    }
}

function loginVl() {
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    var mailVrf = document.getElementById("email-verif");
    var pVrf = document.getElementById("pw-verif");
    
    if (email == "" && pwd == "") {
        mailVrf.innerHTML = "Email must not be empty.";
        pVrf.innerHTML = "Password must not be empty.";
    } else {
        mailVrf.innerHTML = "";
        pVrf.innerHTML = "";
        
        if (!email.match(emailFormat)) {
            mailVrf.innerHTML = "Invalid email.";
        } else if (pwd.length < 8 || pwd.length > 10) {
            pVrf.innerHTML = "Password length must between 8 and 10."
        } else {
            location.replace("index.html");
        }
    }
    
    
}

function togglePw() {
    var togglePwd = document.getElementById("toggle-password");
    var password = document.getElementById("password");

    if (togglePwd) {
        var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        if (togglePwd.classList.contains('fa-eye-slash')) {
            togglePwd.classList.remove('fa-eye-slash');
            togglePwd.classList.add('fa-eye');
        } else {
            togglePwd.classList.remove('fa-eye');
            togglePwd.classList.add('fa-eye-slash');
        }
    }
}