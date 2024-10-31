import React from "react";
import '../App.css';
function Login(){
  return (
    <section id="Login">
         <div style={styles.container}>
      <form style={styles.form}>
        <label style={styles.label}>Email</label>
        <input type="email" style={styles.input} placeholder="Value" />

        <label style={styles.label}>Senha</label>
        <input type="password" style={styles.input} placeholder="Value" />

        <button type="submit" style={styles.button}>Sign In</button>
      </form>
      <a href="#" style={styles.link}>Esqueceu a senha?</a>
    </div>
    </section>
   
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1a1a1a",
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
    backgroundColor: "#333333",
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
