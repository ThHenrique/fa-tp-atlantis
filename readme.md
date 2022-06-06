Dado desafio e estrutura base do projeto:

"
  **Seu trabalho é ajudar a equipe e terminar a implementação do padrão protótipo, que já está pronto na classe Endereço, mas falta para a classe telefone. A primeira versão do projeto está disponível em: (https://github.com/gerson-pn/atvi-atlantis).** by Gerson
"

---

Para rodar o projeto basta instalar as dependêncas com **npm install** e executá-lo com o **npm start**


---

## Resolução

Foi criado na classe Telefone o método clonar:

```ts
  public clonar(): Prototipo {
    let telefone = new Telefone()
    telefone.ddd = this.ddd
    telefone.numero = this.numero

    return telefone
  }
```

Agora ao criar cliente (titular) podemos atribuir a ele seu número de telefone:

```ts
  let telefone = new Telefone()
  telefone.ddd = "12"
  telefone.numero = "1234-4321"

  titular.telefones.push(telefone)
```

E conforme a regra de negócio:

- "Como todo dependente tem um responsável, os dados de endereço e telefones do dependente devem ser iguais aos dados do responsável." by Gerson.

O dependente deve conter o mesmo número de telefone que seu titular. Para isso foi feito os seguintes passos:

1º: Cria-se o dependente

```ts
let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)

```

2º Associa as informações de telefone e endereço do titular a ele:

```ts

dependente.endereco = (titular.endereco.clonar() as Endereco)

titular.telefones.forEach(telefoneTitular => {
  dependente.telefones.push(telefoneTitular.clonar() as Telefone);
})

```

3º Por fim, associa o dependete ao titular e o dependente a lista de dependentes do titular:

```ts
dependente.titular = titular

titular.dependentes.push(dependente)
```