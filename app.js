let amigos = [];

// Adiciona os nomes no array ''amigos''
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo == '') {
        alert('Por favor, insira um nome.');
        return;
        }
    amigos.push(amigo);
    atualizarListaAmigos();
    limparCampo();
}   

// Limpa a exibição de um nome após a sua digitação
function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

// Atualiza a name-list ''listaAmigos''
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    let tamanho = amigos.length;
    for (let i = 0; i < tamanho; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Efetua o sorteio de um nome
function sortearAmigo() {
    let tamanhoLista = amigos.length;
    if (tamanhoLista == 0) {
        alert('Você ainda não adicionou nenhum amigo');
        return;
    } else {
    let sorteado = Math.floor((Math.random() * tamanhoLista));
    exibirAmigoSorteado(sorteado);
    }

}

// Exibe o nome sorteado na tela
function exibirAmigoSorteado(index) {
    let escolhido = document.getElementById('resultado');
    escolhido.innerHTML = `<li>${amigos[index]}</li>`;
}