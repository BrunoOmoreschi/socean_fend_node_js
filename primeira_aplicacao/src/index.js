import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Esse será um exemplo de aplicação CRUD, mas focado no Front End. 
//A ideia:
/*Create -> Formulário de criação
Read All -> Listagem de itens cadastrados
Read Single -> Visualização de um item específico
Update -> Formulário de edição
Delete -> Remover um item específico
*/

const lista = [
  {
    id: 1,
    nome: "Naldecon Dia",
    imagemUrl: "https://cdn-bifarma3.stoom.com.br/fotos/1535572866406.jpg",
    validade: "08/20",
    cBarras: "7896016806254",
    cAtivo: "paracetamol",
    qtdDisp: "0",
  },
  {
    id: 2,
    nome: "Tylenol Sinus",
    imagemUrl:"https://www.farmaconde.com.br/media/catalog/product/cache/b4cc36691a12d79f76baec54b1df8cf2/7/8/7896212415618_1.jpg",
    validade: "02/21",
    cBarras: "7896212415618",
    cAtivo: "paracetamol",
    qtdDisp: "0",
  },
];

function Item(props) {
  console.log(props);
  const indice = props.indice;
  const item = lista[indice];
  return (
    <div>
      <br />
      <br />
      {item.nome}
      <br />
      <img src={item.imagemUrl} alt={item.nome} width="200" />
      <br />
      {"Validade: " + item.validade}
      <br />
      {"Quantidade: " + item.qtdDisp}
      <br />
      {item.cBarras}
    </div>
  );
}

function Lista() {
  return (
    <div>
      {lista.map((item, index) => (
        <Item indice={index} key={index} />
      ))}
    </div>
  );
}

function Body(){
  return <div><Lista></Lista></div>;
}

ReactDOM.render(
  <React.StrictMode>
    <Body></Body>
  </React.StrictMode>,
  document.getElementById("root")
);

