const form = document.getElementById('form-contato');
const tabela = document.getElementById('tabela-contatos');
const contatos = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato').value;
    const telefoneContato = document.getElementById('telefone-contato').value;

    adicionaContato(nomeContato, telefoneContato);
    atualizaTabela();

    document.getElementById('nome-contato').value = '';
    document.getElementById('telefone-contato').value = '';
});

function adicionaContato(nome, telefone) {
    contatos.push({ nome, telefone });
}

function atualizaTabela() {
    let linhas = '';

    contatos.forEach(contato => {
        linhas += `
    <tr>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td>
        <button>Editar</button>
        <button>Excluir</button>
        </td>
    </tr>
    `;
    });

    tabela.querySelector('tbody').innerHTML = linhas;
}
