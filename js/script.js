function togglePanel() {
    var sp = document.getElementById("side-toggle");
    
    if (sp.style.display === "none") {
        sp.style.display = "block";
    } else {
        sp.style.display = "none";
    }
}

function isEmpty(str) {
    return !str.trim().length;
}

function regVl() {
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/;
    var phoneFormat = /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/im;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var addr = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    var nameVrf = document.getElementById("name-verif");
    var mailVrf = document.getElementById("email-verif");
    var pVrf = document.getElementById("pw-verif");
    var addrVrf = document.getElementById("addr-verif");
    var phoneVrf = document.getElementById("phone-verif");
    var dobVrf = document.getElementById("dob-verif");

    nameVrf.innerHTML = "";
    mailVrf.innerHTML = "";
    pVrf.innerHTML = "";
    addrVrf.innerHTML = "";
    phoneVrf.innerHTML = "";
    dobVrf.innerHTML = "";

    if (isEmpty(name)) {
        nameVrf.innerHTML = "must not be empty.";
        return
    } else if (!email.match(emailFormat) || isEmpty(email)) {
        mailVrf.innerHTML = "invalid email.";
        return
    } else if (!pwd.match(pwdFormat) || isEmpty(pwd)) {
        pVrf.innerHTML = "length must between 8 and 10. must contains uppercase, lowercase, and number.";
        return
    } else if (isEmpty(addr)) {
        addrVrf.innerHTML = "must not be empty.";
        return
    } else if (!phone.match(phoneFormat) || isEmpty(phone)) {
        phoneVrf.innerHTML = "invalid phone number.";
        return
    } else if (isEmpty(dob)) {
        dobVrf.innerHTML = "must be selected.";
        return
    }

    location.replace("login.html");
}

function loginVl() {
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/;

    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    var mailVrf = document.getElementById("email-verif");
    var pVrf = document.getElementById("pw-verif");
    var logVrf = document.getElementById("log-verif");

    var rtData = localStorage.getItem("usersList");
    var storedUsers = JSON.parse(rtData);
    var storedEmail;
    var storedPwd;

    if (rtData == null) {
        console.log("no data");
    } else {
        for (var a = 0; a < storedUsers.length; a++) {
            var obj = storedUsers[a];
            
            storedEmail = obj.email;
            storedPwd = obj.password;
        }
    }

    // console.log(storedEmail);
    // console.log(storedPwd);
    
    mailVrf.innerHTML = "";
    pVrf.innerHTML = "";
    logVrf.innerHTML = "";
    
    if (!email.match(emailFormat) || isEmpty(email)) {
        mailVrf.innerHTML = "invalid email.";
        return
    } else if (!pwd.match(pwdFormat) || isEmpty(pwd)) {
        pVrf.innerHTML = "length must between 8 and 10. must contains uppercase, lowercase, and number.";
        return
    } else if (email != storedEmail || pwd != storedPwd) {
        logVrf.innerHTML = "invalid email or password.";
        return
    }

    localStorage.setItem("sessionStorage", JSON.stringify("cid"))
    location.replace("index.html");
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

function logOut() {
    localStorage.removeItem("sessionStorage");
}