const registroCaixa = document.querySelector('.registro-caixa');
const loginLink = document.querySelector('.loguin-Link'); // Corrigido para 'loguin-Link'
const registerLink = document.querySelector('.register-Link'); // Corrigido para 'register-Link'

registerLink.addEventListener('click', () => {
    registroCaixa.classList.add('active');
});

loginLink.addEventListener('click', () => {
    registroCaixa.classList.remove('active');
});

