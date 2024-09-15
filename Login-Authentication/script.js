function showRegisterPage() {
    document.getElementById('register-page').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('secured-page').style.display = 'none';
}

function showLoginPage() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('secured-page').style.display = 'none';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const messageElement = document.getElementById('register-message');

    if (!username || !password) {
        messageElement.textContent = 'Please fill in both fields.';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        messageElement.textContent = 'Username already exists!';
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    messageElement.textContent = 'Registration successful! Please login.';
    setTimeout(showLoginPage, 2000); // Auto-switch to login page after 2 seconds
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const messageElement = document.getElementById('login-message');

    if (!username || !password) {
        messageElement.textContent = 'Please fill in both fields.';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] === password) {
        messageElement.textContent = '';
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
    } else {
        messageElement.textContent = 'You are not registered! Please register first.';
    }
}

function logout() {
    document.getElementById('secured-page').style.display = 'none';
    showLoginPage(); // Redirect to login page
}

// Show the registration page initially
showRegisterPage();
