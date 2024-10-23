import "./MostrarSoma.css";
const MostrarSoma = () => {
  const numeroum = 16;
  const numerodois = 44;
  const resultado = numeroum + numerodois;
  return (
    <>
      <div className="MostrarSoma">
        {" "}
        A soma de {numeroum} + {numerodois} = {resultado}
      </div>
    </>
  );
};
export default MostrarSoma;
