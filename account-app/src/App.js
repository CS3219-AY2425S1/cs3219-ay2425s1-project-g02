import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="content">
        <h1 className="header">PeerPrep</h1>
        <p className="description">
          Boost your skills and ace technical <br />
          interviews with real-time peer <br />
          collaboration.
        </p>
        <div className="button-container">
          <button onClick={() => navigate("/login")} className="login-button">Login</button>
          <button onClick={() => navigate("/create-account")} className="create-account-button">Create Account</button>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login attempted");

    const response = await fetch("http://localhost:5001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();

    if (data.success) {
      navigate("/login-success");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="forgot-password-btn">Forgot Password</button>
        </div>
      </form>
    </div>
  );
}

function LoginSuccessPage() {
  return (
    <div>
      <h1>Login Successful!</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />
        <Route path="/create-account" element={<div>Create Account Page</div>} /> {/* Placeholder for Create Account Page */}
        <Route path="*" element={<p>404: Page Not Found!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
