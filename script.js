
const signupForm = document.getElementById('signupForm');
if(signupForm) {
    signupForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        document.cookie = `username=${name}; max-age=86400; path=/`;
        alert(`Welcome ${name}! Your account has been created.`);
    });
}

function acceptCookies() {
    document.getElementById('cookie-popup').style.display = 'none';
    alert('Welcome! You accepted cookies.');
}

function rejectCookies() {
    document.getElementById('cookie-popup').style.display = 'none';
    alert('Welcome! You rejected cookies.');
}