import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal() {
  return (

    <main className='principal_root'>
      Principal
      <BotaoCustomizado cor='primaria' aoClicar={() => alert("funcionou")}>
        Botão Primário </BotaoCustomizado>

        <BotaoCustomizado cor='secundaria'aoClicar={() => alert("funcionou")}>
        Botão Secundario </BotaoCustomizado>

        <BotaoCustomizado aoClicar={() => alert("funcionou")}>
        Botão Padrão </BotaoCustomizado>

    </main>);

}


export default Principal;
