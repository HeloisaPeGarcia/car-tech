import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Footer from './Footer';
import Header from './Header';

function Login() {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    navigate('/estoque'); // Redireciona para a página de Estoque
  };

  return (
    <section id="Login" className="page">
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} placeholder="Value" />

          <label style={styles.label}>Senha</label>
          <input type="password" style={styles.input} placeholder="Value" />

          <button type="submit" style={styles.button}>Sign In</button>
        </form>
        <a href="#" style={styles.link}>Esqueceu a senha?</a>
      </div>
      <Footer />
    </section>
  );
}

const styles = {
  container: {
    backgroundcolor: "#1E1E1E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",  
    width: "100vw",       
    color: "#ffffff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  label: {
    color: "#ffffff",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #444444",
    borderRadius: "5px",
    color: "#ffffff",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline",
    marginTop: "15px",
  },
};

export default Login;

