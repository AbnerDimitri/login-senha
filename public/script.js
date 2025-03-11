document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, senha }),
    });

    const data = await response.json();
    document.getElementById('response').innerText = `Login: ${data.login}\nSenha: ${data.senha}`;
});
