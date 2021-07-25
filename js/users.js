let users = [];

const addUser = (e) => {
    e.preventDefault;
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value
    }

    users.push(user);
    localStorage.setItem('usersList', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', () => {
    var btn = document.getElementById("submit");
    btn.addEventListener('click', addUser);
})