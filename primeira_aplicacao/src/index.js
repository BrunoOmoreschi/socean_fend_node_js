import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
  
  const indice = props.indice;
  const item = lista[indice];
  return (
    <a href={"/visualizar/" + indice}>
      <div className="item">
        <br />
        <h1 className="item_title">{item.nome}</h1>
        <img src={item.imagemUrl} alt={item.nome} width="200" />
        <br />
        {"Validade: " + item.validade}
        <br />
        {"Quantidade: " + item.qtdDisp}
        <br />
        <p>Código de barras:</p>
        <div className="barCode">*{item.cBarras}*</div>
      </div>
    </a>
  );
}

function Lista() {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item indice={index} key={index} />
      ))}
    </div>
  );
}

function App(){
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route path="/" exact={true} component={ListarItens} />

        <Route path="/visualizar/:id" component={VisualizarItem} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <a href="/">
        <br />
        <img
          src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Pudim-de-Leite-Doces-PNG-1280x720.png"
          alt="Pudim de leite"
          width="300"
        />
      </a>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Todos os direitos reservados.</footer>;
}

function ListarItens() {
  return (
    <div className= "cards">
      <Lista />
    </div>
  );
}

function VisualizarItem(props) {
  return (
    <div>
      <Item indice={props.match.params.id} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

