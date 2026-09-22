import { useState } from "react";
import "./Register.css";

function Register({ onBack, onNavigateToSignIn, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "supplier", // supplier | buyer | both
    gstOrTaxId: "",
    contactName: "",
    email: "",
    password: "",
    industryCategory: "Metals",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }
    // Demo registration submission
    alert("Registration submitted! Pending verification.");
    onRegisterSuccess({
      email: formData.email,
      role: formData.businessType === "buyer" ? "buyer" : "supplier",
    });
  };

  return (
    <div className="register-container">
      <nav className="register-nav">
        <button className="back-btn" onClick={onBack}>
          ← Back to REVOXA
        </button>
        <span className="brand">REVOXA</span>
      </nav>

      <div className="register-card">
        <div className="register-header">
          <span className="eyebrow">COMPANY ONBOARDING</span>
          <h2>Register Your Business</h2>
          <p>Join the circular industrial marketplace to exchange reusable resources.</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Business Role *</label>
            <div className="role-selector">
              <button
                type="button"
                className={formData.businessType === "supplier" ? "active" : ""}
                onClick={() => setFormData({ ...formData, businessType: "supplier" })}
              >
                Supplier / Seller
              </button>
              <button
                type="button"
                className={formData.businessType === "buyer" ? "active" : ""}
                onClick={() => setFormData({ ...formData, businessType: "buyer" })}
              >
                Buyer / Receiver
              </button>
              <button
                type="button"
                className={formData.businessType === "both" ? "active" : ""}
                onClick={() => setFormData({ ...formData, businessType: "both" })}
              >
                Both
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company Legal Name *</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="e.g. Apex Industrial Solutions"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gstOrTaxId">GSTIN / Tax ID</label>
              <input
                id="gstOrTaxId"
                name="gstOrTaxId"
                type="text"
                placeholder="27AAAAA0000A1Z5"
                value={formData.gstOrTaxId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="industryCategory">Primary Industry</label>
              <select
                id="industryCategory"
                name="industryCategory"
                value={formData.industryCategory}
                onChange={handleChange}
              >
                <option value="Metals">Metals & Alloys</option>
                <option value="Plastics">Polymers & Plastics</option>
                <option value="Paper & Glass">Paper, Glass & Packaging</option>
                <option value="Wood">Wood & Timber</option>
                <option value="Chemicals">Industrial By-products</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactName">Contact Person Name</label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              placeholder="Full Name"
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Work Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="contact@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit for Company Verification ↗
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already registered?{" "}
            <button className="link-btn" onClick={onNavigateToSignIn}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;