import { Link } from "react-router-dom";
import "./Principal.css";
import { GrReturn } from "react-icons/gr";
function Principal({ voltarPara, titulo, children }) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {voltarPara && (
          <Link to={voltarPara}>{<GrReturn color="blue" size={40} />}</Link>
        )}
        <h1>{titulo}</h1>
      </div>

      {children}
    </main>
  );
}

export default Principal;
