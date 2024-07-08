function showLogin(role) {
    document.getElementById('student-login').style.display = 'none';
    document.getElementById('trainer-login').style.display = 'none';
    
    if (role === 'student') {
        document.getElementById('student-login').style.display = 'block';
    } else if (role === 'trainer') {
        document.getElementById('trainer-login').style.display = 'block';
    }
}

function validateStudentLogin() {
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;

    const validUsername = 'karan';
    const validPassword = 'karan1015';

    if (username === validUsername && password === validPassword) {
        window.location.href = './student_dashboard.html';
        return false; // Prevent form submission
    } else {
        alert("Check Username and password");
        return false; // Prevent form submission
    }
}

function validateTrainerLogin() {
    const username = document.getElementById('trainer-username').value;
    const password = document.getElementById('trainer-password').value;

    const validUsername = 'binu';
    const validPassword = 'binu10';

    if (username === validUsername && password === validPassword) {
        window.location.href = './trainer_dashboard.html';
        return false; // Prevent form submission
    } else {
        alert("Check Username and password");
        return false; // Prevent form submission
    }
}