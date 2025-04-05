import React, { useState, ChangeEvent, FormEvent } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Logged in with ${email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.avatar}>
          <LockOutlinedIcon fontSize="large" />
        </div>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <div style={styles.options}>
          <a href="#" style={styles.link}>
            Forgot password?
          </a>
          <a href="#" style={styles.link}>
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "0",
    fontFamily: "Arial, sans-serif",
    background:
      "url('https://source.unsplash.com/random/1600x900') no-repeat center center/cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  box: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    textAlign: "center" as const,
  },
  avatar: {
    marginBottom: "20px",
    color: "#1976d2",
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#1976d2",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "#115293",
  },
  options: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    display: "block",
    marginTop: "10px",
  },
};

export default LoginPage;
