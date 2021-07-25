window.onload = function() {
    var userSession = localStorage.getItem("sessionStorage");
    var sessionCid = JSON.parse(userSession);
    var rtData = localStorage.getItem("usersList");
    var storedUsers = JSON.parse(rtData);
    var storedName;

    for (var a = 0; a < storedUsers.length; a++) {
        var obj = storedUsers[a];
        
        storedName = obj.name;
    }

    if (sessionCid == null) {
        location.replace("login.html");
    }

    if (sessionCid == "cid") {
        var nama = storedName;
        var uname = document.getElementById("username");
        var btn = document.getElementById("sign-btn");
        uname.innerHTML = nama;
        btn.innerHTML = "<i class='fa fa-sign-out'></i> Logout";
    }
}