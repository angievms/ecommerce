import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      {/* Usamos 'px-8 py-4' para mayor separación */}
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
          <h1>My Ecommerce</h1>
        </Link>
        <div className="flex space-x-4 items-center">
          {location.pathname === "/productos" && usuario ? (
            <>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-300" />
                <span className="text-gray-300">{usuario.nombre}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-300 ml-4"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
