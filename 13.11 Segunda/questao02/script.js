function enviarReserva() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;

    if (!validartel(telefone)) {
        alert('Digite um telefone valido');
        return;
    }

    const div = document.getElementById('dadosReserva');
    div.innerHTML = `
    <span>Dados da reserva</span>
    <p>Nome: ${nome}</p>
    <p>Telefone: ${telefone}</p>
    <p>Data: ${data}</p>`

    document.getElementById('reservaForm').reset();

}

function validartel(telefone) {
    const tel = telefone.replace(/\D/g, '');
    return tel.length >= 10 && tel.length <= 11;
}