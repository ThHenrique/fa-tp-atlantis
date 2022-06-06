import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let titular = new Cliente()
titular.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
titular.nomeSocial = `Dom Pedro II`
titular.dataCadastro = new Date(1840, 6, 23)
titular.dataNascimento = new Date(1825, 11, 2)


let telefone = new Telefone()
telefone.ddd = "12"
telefone.numero = "1234-4321"

titular.telefones.push(telefone)


let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`

titular.endereco = endereco


let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (titular.endereco.clonar() as Endereco)

titular.telefones.forEach(telefoneTitular => {
  dependente.telefones.push(telefoneTitular.clonar() as Telefone);
})
dependente.titular = titular

titular.dependentes.push(dependente)

console.log("Titular ", titular);
console.log("Dependente ", dependente);
