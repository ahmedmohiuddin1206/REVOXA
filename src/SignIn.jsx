import { useState } from "react";
import "./SignIn.css";

function SignIn({ onBack, onNavigateToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // buyer | supplier | admin

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    // Demo login handler
    onLoginSuccess({ email, role });
  };

  return (
    <div className="signin-container">
      <nav className="signin-nav">
        <button className="back-btn" onClick={onBack}>
          ← Back to REVOXA
        </button>
        <span className="brand">REVOXA</span>
      </nav>

      <div className="signin-card">
        <div className="signin-header">
          <span className="eyebrow">PORTAL ACCESS</span>
          <h2>Sign in to REVOXA</h2>
          <p>Access marketplace exchanges, manage inventory, or oversee operations.</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Select Portal Type</label>
            <div className="role-selector">
              <button
                type="button"
                className={role === "buyer" ? "active" : ""}
                onClick={() => setRole("buyer")}
              >
                Buyer / Receiver
              </button>
              <button
                type="button"
                className={role === "supplier" ? "active" : ""}
                onClick={() => setRole("supplier")}
              >
                Supplier / Seller
              </button>
              <button
                type="button"
                className={role === "admin" ? "active" : ""}
                onClick={() => setRole("admin")}
              >
                Admin Portal
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Sign In to {role.toUpperCase()} Portal ↗
          </button>
        </form>

        <div className="signin-footer">
          <p>
            Don't have an industrial account?{" "}
            <button className="link-btn" onClick={onNavigateToRegister}>
              Register Company
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;