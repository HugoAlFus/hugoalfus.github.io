const form = document.querySelector('#form');
const buttonMailto = document.querySelector('#invisible');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(this);
    buttonMailto.setAttribute('href', `mailto:hugalmodovarfus@gmail.com?subject=Asunto: ${data.get('asunto')} Correo: ${data.get('email')}&body=${data.get('mensaje')}`)
    buttonMailto.click();
}