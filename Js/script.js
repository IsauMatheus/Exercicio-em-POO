const biblioteca = new Biblioteca();

function adicionarLivro(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    const titulo = document.getElementById('title').value;
    const autor = document.getElementById('Autor').value;
    const anoPublicacao = document.getElementById('YearPublication').value;

    if (titulo && autor && anoPublicacao) {
        const livro = new Livro(titulo, autor, anoPublicacao);
        biblioteca.adicionarLivros(livro);
        
        document.getElementById('title').value = '';
        document.getElementById('Autor').value = '';
        document.getElementById('YearPublication').value = '';
    }
}
