import "./MostrarSubtracao.css";
const MostrarSubtracao = () => {
  const numeroum = 44;
  const numerodois = 18;
  const resultado = numeroum - numerodois;
  return (
    <>
      <div className="MostrarSubtracao">
        {" "}
        A subtracao de {numeroum} + {numerodois} = {resultado}
      </div>
    </>
  );
};
export default MostrarSubtracao;
