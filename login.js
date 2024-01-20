function validarLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Lista de usuários administradores
  const adminUsers = [
    { username: 'marcos', password: '123' },
    { username: 'admin', password: 'admin' },
    { username: 'seguranca', password: '2020' }
  ];

  const isAdminUser = adminUsers.some(user => user.username === username && user.password === password);

  if (isAdminUser) {
    alert('Login bem-sucedido como administrador!');

    // Redirecionar para a página de início
    window.location.href = 'homepage.html';
  } else {
    alert('Login falhou. Certifique-se de usar um nome de usuário e senha válidos.');
  }
}

document.querySelector('.btn-login').addEventListener('click', validarLogin);
