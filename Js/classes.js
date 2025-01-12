class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.Title = titulo;
        this.author = autor;
        this.YearPublication = anoPublicacao;
        this.lend = false;
    }
    
    emprestar() {
        this.lend = true;
    }

    devolver() {
        this.lend = false;
    }
}
class Biblioteca {
    constructor() {
        this.listLivros = [];
    }

    adicionarLivros(book) {
        this.listLivros.push(book);
        this.exibirLivros();
    }

    emprestarLivro(titulo) {
        const livro = this.listLivros.find(livro => livro.Title === titulo && !livro.lend);
        if (livro) {
            livro.emprestar();
            this.exibirLivros();
        }
    }

    devolverLivro(titulo) {
        const livro = this.listLivros.find(livro => livro.Title === titulo && livro.lend);
        if (livro) {
            livro.devolver();
            this.exibirLivros();
        }
    }

    exibirLivros() {
        const listalivros = document.getElementById('lista-livros');
        listalivros.innerHTML = "";

        this.listLivros.forEach(livro => {
            const livroItem = document.createElement('li');
            livroItem.innerHTML = `
            <strong>${livro.Title}</strong> por ${livro.author} (${livro.YearPublication}) 
            - <em class="${livro.lend ? "em-emprestado" : "em-disponivel"}">
                ${livro.lend ? "Emprestado" : "Disponível"}
            </em>
        `;

            const botaoEmprestar = document.createElement('button');
            botaoEmprestar.textContent = 'Emprestar';
            botaoEmprestar.onclick = () => this.emprestarLivro(livro.Title);

            const botaoDevolver = document.createElement('button');
            botaoDevolver.textContent = 'Devolver';
            botaoDevolver.onclick = () => this.devolverLivro(livro.Title);

            livroItem.appendChild(botaoEmprestar);
            livroItem.appendChild(botaoDevolver);
            listalivros.appendChild(livroItem);
        });
    }
}
