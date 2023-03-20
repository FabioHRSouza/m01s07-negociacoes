import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Tabela } from "./components/Tabela";

export const App = () => {
  // Armazena as negociações
  const [negociacoes, setNegociacoes] = useState([]);

  // Adiciona uma nova negociação
  const adicionarNegociacao = (negociacao) => {
    setNegociacoes([...negociacoes, negociacao]);
  };

  // Renderizando o componente
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Formulario Adicionando={adicionarNegociacao} />
        <Tabela negociacoes={negociacoes} />
      </div>
      
    </div>
  );
};
