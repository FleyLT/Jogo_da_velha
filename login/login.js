const btnSumbitLogin = document.querySelector('.login-form button');

btnSumbitLogin.onclick = (e) => {
    const socket = io('http://wings1.karenhosting.com.br:25508');
    e.preventDefault();
    alert("Opa amigo")
    window.location.href = "../index.html"
}