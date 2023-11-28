let totalGeral;
limpar();

function adicionar() {
    //recuperando valores de produtos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0] //o Split é uma função do JavaScript que divide um texto com base no caractere passado como delimitador, 
    let valorUnitario = produto.split('R$')[1] // retornando um array. Sendo assim, o tamanho do array dependerá de quantas vezes esse caractere aparece.
    let quantidade = document.getElementById('quantidade').value;
    // calcular o preço, subtotal
    let preco = quantidade * valorUnitario;
    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    //atualizar valor total

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;


}

function limpar() {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}