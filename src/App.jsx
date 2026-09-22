import React, { useState } from "react";

// EXTENDED MARKETPLACE PRODUCTS (MULTIPLE COMPANIES PER CATEGORY WITH RATINGS & DETAILS)
const INITIAL_PRODUCTS = [
  // --- STEEL & METALS CATEGORY ---
  {
    id: "REV-STL-901",
    title: "Structural Heavy Melting Steel Scrap (HMS 1 & 2)",
    category: "Steel & Metals",
    defaultQty: 50,
    unit: "Metric Tons",
    pricePerTon: 42500,
    originalPricePerTon: 48000,
    discountBadge: "12% OFF",
    composition: "Fe: 98.2% | Carbon: 0.18% | Low Slag",
    moisture: "0.2%",
    location: "Raigarh Hub, CG",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 38,
    shippingInfo: "Containerized Freight (2x 20ft Flatbeds) • Dispatch: 24h",
    seller: {
      id: "COMP-701",
      name: "Apex Metallurgy & Waste Solutions",
      verificationStatus: "ISO 9001 & CPCB Verified",
      bankVerified: "Bank Escrow Guaranteed ✓",
      gstin: "22AAACA1234A1Z8",
      bankAcc: "HDFC Bank (A/C: XXXX-XXXX-8821)",
      contactPerson: "Rajesh Sharma (COO)",
      directPhone: "+91 98765 43210",
      address: "Plot 42, Industrial Growth Center, Raigarh, CG"
    }
  },
  {
    id: "REV-STL-902",
    title: "Industrial Grade Heavy Melting Steel Scrap (HMS 1)",
    category: "Steel & Metals",
    defaultQty: 75,
    unit: "Metric Tons",
    pricePerTon: 41800,
    originalPricePerTon: 47000,
    discountBadge: "11% OFF",
    composition: "Fe: 98.5% | Carbon: 0.16% | Dense Heavy Scrap",
    moisture: "0.1%",
    location: "Bhilai Steel Belt, CG",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 52,
    shippingInfo: "Heavy Rail/Road Freight • Dispatch: 12h",
    seller: {
      id: "COMP-707",
      name: "Bhilai Scrap Processing Works",
      verificationStatus: "CPCB Approved Recycler",
      bankVerified: "SBI Escrow Protected ✓",
      gstin: "22BBBCB5678B1Z4",
      bankAcc: "State Bank of India (A/C: XXXX-XXXX-5512)",
      contactPerson: "Amitabh Roy",
      directPhone: "+91 98321 65498",
      address: "Sector 5, Industrial Area, Bhilai, CG"
    }
  },
  {
    id: "REV-ALU-402",
    title: "High-Grade Industrial Aluminum Wire Scrap",
    category: "Steel & Metals",
    defaultQty: 18,
    unit: "Metric Tons",
    pricePerTon: 188000,
    originalPricePerTon: 205000,
    discountBadge: "8% OFF",
    composition: "Al: 99.1% | Conductive Grade | Stripped Clean",
    moisture: "0.0%",
    location: "Sanand Estate, GJ",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 29,
    shippingInfo: "Express Road Freight (Covered Trailer) • Dispatch: Immediate",
    seller: {
      id: "COMP-702",
      name: "Gujarat Non-Ferrous Recyclers Ltd",
      verificationStatus: "Verified B2B Exporter",
      bankVerified: "ICICI Escrow Active ✓",
      gstin: "24BBBCC5678B2Z1",
      bankAcc: "ICICI Bank (A/C: XXXX-XXXX-4412)",
      contactPerson: "Karan Patel (Director)",
      directPhone: "+91 98123 45678",
      address: "Phase III, GIDC Sanand, Ahmedabad, GJ"
    }
  },

  // --- HEAVY POLYMERS CATEGORY ---
  {
    id: "REV-POLY-305",
    title: "Baled High-Density Polyethylene Waste (HDPE Flakes)",
    category: "Heavy Polymers",
    defaultQty: 25,
    unit: "Metric Tons",
    pricePerTon: 48000,
    originalPricePerTon: 56000,
    discountBadge: "14% OFF",
    composition: "HDPE Flakes / Bales | Color-Sorted",
    moisture: "0.5%",
    location: "Chakan Zone, MH",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 19,
    shippingInfo: "Standard Rail/Road Heavy Freight • Dispatch: 48h",
    seller: {
      id: "COMP-703",
      name: "EcoPlast Waste Recycling Corp",
      verificationStatus: "State Pollution Board Approved",
      bankVerified: "Axis Escrow Secured ✓",
      gstin: "27CCCDD9012C3Z5",
      bankAcc: "Axis Bank (A/C: XXXX-XXXX-1190)",
      contactPerson: "Anish Kulkarni",
      directPhone: "+91 97654 32109",
      address: "MIDC Chakan Phase 2, Pune, MH"
    }
  },
  {
    id: "REV-POLY-306",
    title: "Washed Industrial HDPE Polymer Granules",
    category: "Heavy Polymers",
    defaultQty: 30,
    unit: "Metric Tons",
    pricePerTon: 46500,
    originalPricePerTon: 53000,
    discountBadge: "12% OFF",
    composition: "HDPE Re-granulated | Melt Flow Rate: 0.8",
    moisture: "0.3%",
    location: "Vapi Hub, GJ",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 44,
    shippingInfo: "Dry Containerized Express Freight • Dispatch: 24h",
    seller: {
      id: "COMP-708",
      name: "Vapi Polymer Cleantech Pvt Ltd",
      verificationStatus: "GPCB Grade A Certified",
      bankVerified: "HDFC Escrow Secured ✓",
      gstin: "24DDDCC8890D1Z7",
      bankAcc: "HDFC Bank (A/C: XXXX-XXXX-9912)",
      contactPerson: "Dharmesh Shah",
      directPhone: "+91 98222 11009",
      address: "Phase II GIDC, Vapi, GJ"
    }
  },

  // --- INDUSTRIAL WASTE & CHEMICALS CATEGORY ---
  {
    id: "REV-CHEM-808",
    title: "Industrial Solvent & Liquid Chemical Waste (99.8%)",
    category: "Industrial Waste & Chemicals",
    defaultQty: 15,
    unit: "Kiloliters",
    pricePerTon: 82000,
    originalPricePerTon: 95000,
    discountBadge: "14% OFF",
    composition: "Purity 99.8% | Residue < 0.001%",
    moisture: "0.01%",
    location: "Dahej SEZ, GJ",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 31,
    shippingInfo: "Hazmat Certified Stainless Tanker • Dispatch: Immediate",
    seller: {
      id: "COMP-706",
      name: "Gujarat Fine Chemicals & Treatment Ltd",
      verificationStatus: "Hazmat & PESO Certified",
      bankVerified: "ICICI Escrow Active ✓",
      gstin: "24FFFGG9012F2Z3",
      bankAcc: "ICICI Bank (A/C: XXXX-XXXX-7711)",
      contactPerson: "Dr. Suresh Joshi",
      directPhone: "+91 97222 33445",
      address: "SEZ Phase 1, Dahej, Bharuch, GJ"
    }
  },
  {
    id: "REV-CHEM-809",
    title: "Recovered Technical Grade Chemical Solvent Waste",
    category: "Industrial Waste & Chemicals",
    defaultQty: 20,
    unit: "Kiloliters",
    pricePerTon: 79500,
    originalPricePerTon: 91000,
    discountBadge: "12% OFF",
    composition: "Purity 99.4% | Distilled Liquid",
    moisture: "0.02%",
    location: "Ankleshwar Estate, GJ",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewsCount: 22,
    shippingInfo: "Insulated Chemical Tanker • Dispatch: 24h",
    seller: {
      id: "COMP-709",
      name: "Ankleshwar Waste Solvent Refining Co",
      verificationStatus: "CPCB Hazmat Authorized",
      bankVerified: "Axis Bank Escrow Active ✓",
      gstin: "24EEEFF1234E9Z2",
      bankAcc: "Axis Bank (A/C: XXXX-XXXX-6633)",
      contactPerson: "Pravin Mehta",
      directPhone: "+91 98980 44332",
      address: "GIDC Ankleshwar Phase 3, GJ"
    }
  }
];

const INITIAL_ESCROWS = [
  {
    id: "ESC-8821",
    productTitle: "Structural Heavy Melting Steel Scrap (HMS 1 & 2)",
    buyerName: "Ahmed Muhiuddin",
    sellerName: "Apex Metallurgy & Waste Solutions",
    qtyOrdered: 50,
    unit: "Metric Tons",
    unitPrice: 42500,
    totalAmountNum: 2125000,
    totalAmount: "₹21,25,000",
    step: 4,
    statusText: "Order Received & Payment Disbursed to Seller",
    origin: "Raigarh, CG",
    destination: "Jamshedpur, JH",
    progress: 100,
    eta: "24 Sep 2026",
    carrier: "Gati-KWE Heavy Freight Logix",
    waybillNo: "WB-99102-REV",
    vehicleNo: "CG-04-HE-9821",
    paymentSecurity: "Funds Disbursed to Seller Bank Account ✓",
    paymentMethod: "Bank NEFT / RTGS Transfer",
    isDisbursed: true,
    sellerDetails: {
      gstin: "22AAACA1234A1Z8",
      bankAcc: "HDFC Bank (A/C: XXXX-XXXX-8821)",
      contactPerson: "Rajesh Sharma (COO)",
      directPhone: "+91 98765 43210",
      address: "Plot 42, Industrial Growth Center, Raigarh, CG"
    }
  },
  {
    id: "ESC-8822",
    productTitle: "High-Grade Industrial Aluminum Wire Scrap",
    buyerName: "Bharat Cable Manufacturing Co",
    sellerName: "Gujarat Non-Ferrous Recyclers Ltd",
    qtyOrdered: 18,
    unit: "Metric Tons",
    unitPrice: 188000,
    totalAmountNum: 3384000,
    totalAmount: "₹33,84,000",
    step: 2,
    statusText: "Independent Quality Inspection Passed",
    origin: "Sanand, GJ",
    destination: "Vadodara, GJ",
    progress: 50,
    eta: "25 Sep 2026",
    carrier: "TCI Freight Express",
    waybillNo: "WB-44120-REV",
    vehicleNo: "GJ-01-BX-3319",
    paymentSecurity: "Escrow Locked (Awaiting Dispatch Approval)",
    paymentMethod: "Corporate UPI Payment",
    isDisbursed: false,
    sellerDetails: {
      gstin: "24BBBCC5678B2Z1",
      bankAcc: "ICICI Bank (A/C: XXXX-XXXX-4412)",
      contactPerson: "Karan Patel (Director)",
      directPhone: "+91 98123 45678",
      address: "Phase III, GIDC Sanand, Ahmedabad, GJ"
    }
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [user, setUser] = useState({ name: "Ahmed Muhiuddin", role: "SuperAdmin" });

  const [products] = useState(INITIAL_PRODUCTS);
  const [escrows, setEscrows] = useState(INITIAL_ESCROWS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // NEW FEATURE STATES
  const [searchQuery, setSearchQuery] = useState("");
  const [minRatingFilter, setMinRatingFilter] = useState(false);
  const [customQty, setCustomQty] = useState(1);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const [checkoutModal, setCheckoutModal] = useState(null);
  const [phoneCallModal, setPhoneCallModal] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [selectedAdminEscrow, setSelectedAdminEscrow] = useState(INITIAL_ESCROWS[0]);

  const handleStartCheckout = (item) => {
    setCustomQty(item.defaultQty);
    setCheckoutModal(item);
  };

  const confirmOnlinePayment = (item) => {
    const calculatedTotal = item.pricePerTon * customQty;
    const newDeal = {
      id: "ESC-" + Math.floor(1000 + Math.random() * 9000),
      productTitle: item.title,
      buyerName: user ? user.name : "Verified Buyer",
      sellerName: item.seller.name,
      qtyOrdered: customQty,
      unit: item.unit,
      unitPrice: item.pricePerTon,
      totalAmountNum: calculatedTotal,
      totalAmount: `₹${calculatedTotal.toLocaleString("en-IN")}`,
      step: 1,
      statusText: "Funds Secured in Revoxa Escrow Vault",
      origin: item.location,
      destination: "Buyer's Registered Industrial Yard",
      progress: 25,
      eta: "27 Sep 2026",
      carrier: "Revoxa Express Freight Lines",
      waybillNo: `WB-${Math.floor(10000 + Math.random() * 90000)}-REV`,
      vehicleNo: "MH-12-EQ-8812",
      paymentSecurity: "Escrow Held (Locked until physical receipt)",
      paymentMethod: paymentMethod,
      isDisbursed: false,
      sellerDetails: {
        gstin: item.seller.gstin,
        bankAcc: item.seller.bankAcc,
        contactPerson: item.seller.contactPerson,
        directPhone: item.seller.directPhone,
        address: item.seller.address
      }
    };
    setEscrows([newDeal, ...escrows]);
    setCheckoutModal(null);
    setCurrentView("escrow");
  };

  const handleBuyerReleasePayment = (id) => {
    setEscrows(
      escrows.map((e) => {
        if (e.id === id) {
          const updated = {
            ...e,
            step: 4,
            progress: 100,
            statusText: "Order Received & Payment Disbursed to Seller",
            paymentSecurity: "Funds Disbursed to Seller Bank Account ✓",
            isDisbursed: true
          };
          if (selectedAdminEscrow?.id === id) setSelectedAdminEscrow(updated);
          return updated;
        }
        return e;
      })
    );
  };

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.seller.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = !minRatingFilter || p.rating >= 4.8;
    return matchesCat && matchesSearch && matchesRating;
  });

  return (
    <div style={styles.creamTerminal}>
      {/* HEADER WITH REVOXA LOGO & BRANDING */}
      <header style={styles.headerCream}>
        <div style={styles.brandBox} onClick={() => setCurrentView("home")}>
          <div style={styles.revoxaLogoBox}>
            <span style={{ fontSize: "1.4rem" }}>♻️</span>
          </div>
          <div>
            <div style={styles.brandTitle}>REVOXA <span style={styles.goldTag}>INDUSTRIAL PLATFORM</span></div>
            <div style={styles.brandSubtitle}>INDUSTRIAL WASTE TREATMENT & COMMODITY CLEARING</div>
          </div>
        </div>

        <nav style={styles.navDeckCream}>
          <button onClick={() => setCurrentView("home")} style={currentView === "home" ? styles.navActiveCream : styles.navBtnCream}>Home</button>
          <button onClick={() => setCurrentView("marketplace")} style={currentView === "marketplace" ? styles.navActiveCream : styles.navBtnCream}>Marketplace ({products.length})</button>
          <button onClick={() => setCurrentView("escrow")} style={currentView === "escrow" ? styles.navActiveCream : styles.navBtnCream}>Escrow & Freight ({escrows.length})</button>
          {user?.role === "SuperAdmin" && (
            <button onClick={() => setCurrentView("admin")} style={currentView === "admin" ? styles.adminActiveCream : styles.adminBtnCream}>🛡️ Admin Vault</button>
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user ? (
            <div style={styles.userGlassTag}>
              <span style={{ color: "#064e3b" }}>🟢</span> <strong>{user.name}</strong>
              <button onClick={() => setUser(null)} style={styles.condensedAuthLink}>Sign Out</button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={() => { setAuthMode("login"); setShowAuthModal(true); }} style={styles.condensedAuthBtn}>Sign In</button>
              <button onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }} style={styles.condensedSignUpBtn}>Sign Up</button>
            </div>
          )}
        </div>
      </header>

      {/* OFFICIAL INVOICE MODAL */}
      {selectedInvoice && (
        <div style={styles.modalOverlay}>
          <div style={{ ...styles.modal3DCard, width: "600px", backgroundColor: "#ffffff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #064e3b", paddingBottom: "0.8rem", marginBottom: "1rem" }}>
              <div>
                <h2 style={{ margin: 0, color: "#064e3b", fontSize: "1.3rem", fontWeight: "900" }}>REVOXA TAX INVOICE & RECEIPT</h2>
                <span style={{ fontSize: "0.75rem", color: "#b45309", fontWeight: "800" }}>OFFICIAL ESCROW CLEARING CERTIFICATE</span>
              </div>
              <button onClick={() => setSelectedInvoice(null)} style={styles.closeBtn}>✕</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.82rem", backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "12px", marginBottom: "1rem", border: "1px solid #e5e7eb" }}>
              <div>
                <strong style={{ color: "#064e3b" }}>INVOICE ID:</strong> {selectedInvoice.id}<br />
                <strong>DATE:</strong> 22 Sep 2026<br />
                <strong>PAYMENT:</strong> {selectedInvoice.paymentMethod}
              </div>
              <div>
                <strong style={{ color: "#064e3b" }}>BUYER:</strong> {selectedInvoice.buyerName}<br />
                <strong>CARRIER:</strong> {selectedInvoice.carrier}<br />
                <strong>WAYBILL:</strong> {selectedInvoice.waybillNo}
              </div>
            </div>

            <div style={{ border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden", marginBottom: "1rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", textAlign: "left" }}>
                <thead style={{ backgroundColor: "#064e3b", color: "#ffffff" }}>
                  <tr>
                    <th style={{ padding: "0.6rem" }}>Description</th>
                    <th style={{ padding: "0.6rem" }}>Qty</th>
                    <th style={{ padding: "0.6rem" }}>Rate</th>
                    <th style={{ padding: "0.6rem" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}>{selectedInvoice.productTitle}</td>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}>{selectedInvoice.qtyOrdered} {selectedInvoice.unit}</td>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee" }}>₹{selectedInvoice.unitPrice?.toLocaleString("en-IN")}</td>
                    <td style={{ padding: "0.6rem", borderBottom: "1px solid #eee", fontWeight: "800" }}>{selectedInvoice.totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fdfbf7", border: "1px solid #d97706", padding: "0.8rem", borderRadius: "10px" }}>
              <span style={{ fontSize: "0.8rem", color: "#b45309", fontWeight: "700" }}>✓ Bank Escrow Cleared & Funds Released to Supplier</span>
              <button onClick={() => window.print()} style={styles.btnEmeraldGlow}>🖨️ Print / Download PDF</button>
            </div>
          </div>
        </div>
      )}

      {/* PHONE ORDERING / CALL SELLER MODAL */}
      {phoneCallModal && (
        <div style={styles.modalOverlay}>
          <div style={{ ...styles.modal3DCard, width: "420px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#064e3b", fontSize: "1.1rem", fontWeight: "800" }}>📞 Direct Supplier Contact & Phone Order</h3>
              <button onClick={() => setPhoneCallModal(null)} style={styles.closeBtn}>✕</button>
            </div>

            <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #d97706", padding: "1.2rem", borderRadius: "14px", marginBottom: "1rem" }}>
              <div style={{ color: "#064e3b", fontWeight: "900", fontSize: "1.1rem" }}>{phoneCallModal.seller.name}</div>
              <div style={{ color: "#b45309", fontSize: "0.82rem", margin: "0.3rem 0 0.8rem", fontWeight: "700" }}>★ Rating: {phoneCallModal.rating} / 5.0 ({phoneCallModal.reviewsCount} reviews)</div>

              <div style={{ fontSize: "0.85rem", color: "#1f2937", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div>👤 <strong>Contact Executive:</strong> {phoneCallModal.seller.contactPerson}</div>
                <div>📞 <strong>Direct Phone:</strong> <a href={`tel:${phoneCallModal.seller.directPhone}`} style={{ color: "#064e3b", fontWeight: "800" }}>{phoneCallModal.seller.directPhone}</a></div>
                <div>📄 <strong>GSTIN:</strong> {phoneCallModal.seller.gstin}</div>
                <div>📍 <strong>Yard Address:</strong> {phoneCallModal.seller.address}</div>
              </div>
            </div>

            <button onClick={() => { setPhoneCallModal(null); handleStartCheckout(phoneCallModal); }} style={styles.btnEmeraldFull}>
              Lock Funds in Escrow Online ➔
            </button>
          </div>
        </div>
      )}

      {/* AUTH MODAL */}
      {showAuthModal && (
        <div style={styles.modalOverlay}>
          <div style={{ ...styles.modal3DCard, width: "380px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#064e3b", fontSize: "1.1rem", fontWeight: "800" }}>
                {authMode === "login" ? "🔐 Enterprise Sign In" : "📝 Register Account"}
              </h3>
              <button onClick={() => setShowAuthModal(false)} style={styles.closeBtn}>✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {authMode === "signup" && (
                <input type="text" placeholder="Company / Individual Name" style={styles.creamInput} />
              )}
              <input type="email" placeholder="Corporate Email Address" style={styles.creamInput} />
              <input type="password" placeholder="Password" style={styles.creamInput} />

              <button 
                onClick={() => {
                  setUser({ name: authMode === "signup" ? "New Enterprise User" : "Ahmed Muhiuddin", role: "SuperAdmin" });
                  setShowAuthModal(false);
                }} 
                style={styles.btnEmeraldFull}
              >
                {authMode === "login" ? "Access Revoxa Portal ➔" : "Create Revoxa Account ➔"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL WITH DYNAMIC QUANTITY CALCULATOR */}
      {checkoutModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal3DCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.5rem" }}>🔒</span>
                <h3 style={{ margin: 0, color: "#064e3b", fontSize: "1.2rem", fontWeight: "800" }}>Revoxa Escrow Lock & Dynamic Checkout</h3>
              </div>
              <button onClick={() => setCheckoutModal(null)} style={styles.closeBtn}>✕</button>
            </div>

            <div style={styles.summaryCreamBox}>
              <div style={{ fontSize: "1rem", fontWeight: "800", color: "#064e3b" }}>{checkoutModal.title}</div>
              <div style={{ fontSize: "0.82rem", color: "#b45309", marginTop: "0.3rem", fontWeight: "700" }}>🚚 Shipping: {checkoutModal.shippingInfo}</div>
              <div style={{ fontSize: "0.82rem", color: "#374151", marginTop: "0.2rem" }}>🏢 Supplier: <strong>{checkoutModal.seller.name}</strong></div>

              {/* DYNAMIC QUANTITY ADJUSTER */}
              <div style={{ marginTop: "1rem", backgroundColor: "#ffffff", padding: "0.8rem", borderRadius: "10px", border: "1px solid #d1d5db" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: "800", color: "#064e3b", display: "block", marginBottom: "0.4rem" }}>
                  Adjust Required Quantity ({checkoutModal.unit}):
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <input
                    type="number"
                    min="1"
                    value={customQty}
                    onChange={(e) => setCustomQty(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ ...styles.creamInput, width: "100px", padding: "0.4rem 0.6rem", fontWeight: "800", textAlign: "center" }}
                  />
                  <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>x ₹{checkoutModal.pricePerTon.toLocaleString("en-IN")} / {checkoutModal.unit}</span>
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.8rem", fontSize: "1.2rem", fontWeight: "900", color: "#064e3b", borderTop: "2px solid #e5e7eb", paddingTop: "0.6rem" }}>
                <span>Total Escrow Deposit:</span>
                <span>₹{(checkoutModal.pricePerTon * customQty).toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div style={{ margin: "1.2rem 0" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "800", color: "#064e3b", display: "block", marginBottom: "0.6rem" }}>Select Payment Method:</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem" }}>
                <button onClick={() => setPaymentMethod("UPI")} style={paymentMethod === "UPI" ? styles.payTabActiveCream : styles.payTabCream}>📱 UPI / QR</button>
                <button onClick={() => setPaymentMethod("NEFT")} style={paymentMethod === "NEFT" ? styles.payTabActiveCream : styles.payTabCream}>🏦 Bank NEFT</button>
                <button onClick={() => setPaymentMethod("Card")} style={paymentMethod === "Card" ? styles.payTabActiveCream : styles.payTabCream}>💳 Corporate Card</button>
              </div>
            </div>

            <button onClick={() => confirmOnlinePayment(checkoutModal)} style={styles.btnEmeraldFull}>
              Lock Funds in Escrow & Start Freight Dispatch ➔
            </button>
          </div>
        </div>
      )}

      {/* VIEW 1: HERO HOME */}
      {currentView === "home" && (
        <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
          <div style={styles.heroBadge3DCream}>♻️ REVOXA INDUSTRIAL WASTE & RECYCLING EXCHANGE</div>
          <h1 style={styles.hero3DHeadingCream}>
            Industrial Waste Treatment & Commodities <br />
            <span style={styles.goldGlowText}>Multi-Supplier Comparison & Escrow Protection</span>
          </h1>
          <p style={styles.heroSubTextCream}>
            Compare multiple supplier companies per product category with verified reviews, rating scores, direct telephone contact, and bank escrow security.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "3.5rem" }}>
            <button onClick={() => setCurrentView("marketplace")} style={styles.btnEmeraldGlow}>Explore Marketplace ({products.length}) ➔</button>
            <button onClick={() => setCurrentView("escrow")} style={styles.btnGlassSecondaryCream}>View Escrows & Freight ({escrows.length})</button>
          </div>

          <div style={styles.stats3DGridCream}>
            <div style={styles.stat3DBoxCream}>
              <div style={styles.statValCream}>₹18.5 Cr+</div>
              <div style={styles.statLblCream}>Waste Commodities Traded</div>
            </div>
            <div style={styles.stat3DBoxCream}>
              <div style={{ ...styles.statValCream, color: "#064e3b" }}>100%</div>
              <div style={styles.statLblCream}>Escrow Protection Guarantee</div>
            </div>
            <div style={styles.stat3DBoxCream}>
              <div style={{ ...styles.statValCream, color: "#b45309" }}>100%</div>
              <div style={styles.statLblCream}>CPCB/SPCB Verified Sellers</div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: MARKETPLACE WITH SEARCH, FILTERS & MULTI-COMPANY COMPARISON */}
      {currentView === "marketplace" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 style={{ color: "#064e3b", margin: 0, fontSize: "1.6rem", fontWeight: "900" }}>Revoxa Marketplace (Multi-Company Suppliers)</h2>
              <p style={{ color: "#4b5563", margin: "0.3rem 0 0", fontSize: "0.9rem" }}>Compare 2 to 3 competing suppliers per category with individual ratings & company details</p>
            </div>

            {/* SEARCH & RATING FILTER CONTROL BAR */}
            <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <input
                type="text"
                placeholder="🔍 Search products or suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ ...styles.creamInput, width: "260px", padding: "0.55rem 0.9rem" }}
              />
              <button
                onClick={() => setMinRatingFilter(!minRatingFilter)}
                style={minRatingFilter ? styles.filterActiveBtn : styles.filterInactiveBtn}
              >
                ★ Top Rated (4.8+)
              </button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {["All", "Steel & Metals", "Heavy Polymers", "Industrial Waste & Chemicals"].map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={selectedCategory === cat ? styles.catPillActiveCream : styles.catPillCream}>
                {cat}
              </button>
            ))}
          </div>

          <div style={styles.grid3D}>
            {filteredProducts.map((item) => (
              <div key={item.id} style={styles.card3DCream}>
                <div style={{ position: "relative" }}>
                  <img src={item.image} alt={item.title} style={styles.card3DImg} />
                  <span style={styles.discountTag3D}>{item.discountBadge}</span>
                </div>

                <div style={{ padding: "1.3rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={styles.emeraldPill}>{item.category}</span>
                    <span style={{ color: "#d97706", fontWeight: "800", fontSize: "0.85rem" }}>★ {item.rating} / 5.0 ({item.reviewsCount} reviews)</span>
                  </div>

                  <h3 style={styles.card3DTitleCream}>{item.title}</h3>

                  {/* MULTI-COMPANY DETAILS CARD */}
                  <div style={styles.sellerBoxCream}>
                    <div style={{ fontWeight: "800", color: "#064e3b", fontSize: "0.88rem" }}>🏢 Supplier: {item.seller.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#1f2937", marginTop: "4px" }}>
                      📞 <strong>Phone:</strong> <span style={{ color: "#064e3b", fontWeight: "800" }}>{item.seller.directPhone}</span> ({item.seller.contactPerson})
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#b45309", marginTop: "2px", fontWeight: "700" }}>
                      📍 GSTIN: {item.seller.gstin} | {item.seller.address}
                    </div>
                  </div>

                  <div style={styles.shippingTagBoxCream}>
                    🚚 <strong>Freight:</strong> {item.shippingInfo}
                  </div>

                  <p style={{ color: "#4b5563", fontSize: "0.82rem", margin: "0.6rem 0" }}>📍 Location: <strong>{item.location}</strong> &bull; Standard Lot: <strong>{item.defaultQty} {item.unit}</strong></p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.2rem", paddingTop: "0.8rem", borderTop: "1px solid #e5e7eb" }}>
                    <div>
                      <div style={{ fontSize: "1.3rem", fontWeight: "900", color: "#064e3b" }}>
                        ₹{item.pricePerTon.toLocaleString("en-IN")}
                        <span style={{ fontSize: "0.75rem", color: "#6b7280" }}> / {item.unit}</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      <button onClick={() => setPhoneCallModal(item)} style={styles.btnPhoneSmallCream}>📞 Call Supplier</button>
                      <button onClick={() => handleStartCheckout(item)} style={styles.btnPrimarySmallCream}>Buy via Escrow</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: ESCROW & FREIGHT */}
      {currentView === "escrow" && (
        <div>
          <h2 style={{ color: "#064e3b", margin: 0, fontSize: "1.6rem", fontWeight: "900" }}>Escrow Vault & Shipping Freight Manifests</h2>
          <p style={{ color: "#4b5563", margin: "0.3rem 0 1.8rem", fontSize: "0.9rem" }}>Funds are locked in bank escrow and released only after physical receipt at buyer yard</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {escrows.map((deal) => (
              <div key={deal.id} style={styles.escrow3DCreamCard}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", borderBottom: "1px solid #e5e7eb", paddingBottom: "1rem" }}>
                  <div>
                    <span style={styles.emeraldPill}>{deal.id}</span>
                    <h3 style={{ color: "#064e3b", margin: "0.4rem 0", fontSize: "1.2rem", fontWeight: "800" }}>{deal.productTitle}</h3>
                    <p style={{ color: "#4b5563", fontSize: "0.85rem", margin: 0 }}>
                      Seller: <strong style={{ color: "#064e3b" }}>{deal.sellerName}</strong> | Buyer: <strong style={{ color: "#b45309" }}>{deal.buyerName}</strong>
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#064e3b", fontSize: "1.4rem", fontWeight: "900" }}>{deal.totalAmount}</div>
                    <span style={deal.isDisbursed ? styles.statusDisbursedPillCream : styles.statusLockedPillCream}>
                      {deal.statusText}
                    </span>
                  </div>
                </div>

                <div style={styles.shippingManifestBoxCream}>
                  <div style={{ fontWeight: "800", color: "#b45309", marginBottom: "0.5rem", fontSize: "0.85rem" }}>🚚 LOGISTICS & SHIPPING MANIFEST</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", fontSize: "0.85rem", color: "#1f2937" }}>
                    <div>Carrier: <strong style={{ color: "#064e3b" }}>{deal.carrier}</strong></div>
                    <div>Waybill No: <strong style={{ color: "#b45309" }}>{deal.waybillNo}</strong></div>
                    <div>Vehicle: <strong>{deal.vehicleNo}</strong></div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: "0.85rem", color: "#064e3b", fontWeight: "700" }}>
                    🔒 Security: <strong>{deal.paymentSecurity}</strong> | Method: <strong style={{ color: "#b45309" }}>{deal.paymentMethod}</strong>
                  </div>

                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    {deal.isDisbursed && (
                      <button onClick={() => setSelectedInvoice(deal)} style={styles.btnGlassSecondaryCream}>
                        📄 View Official Invoice
                      </button>
                    )}

                    {!deal.isDisbursed ? (
                      <button onClick={() => handleBuyerReleasePayment(deal.id)} style={styles.btnEmeraldGlow}>
                        ✓ Confirm Yard Receipt & Release Escrow
                      </button>
                    ) : (
                      <span style={{ color: "#059669", fontWeight: "800", fontSize: "0.9rem", alignSelf: "center" }}>
                        ✓ Delivered & Disbursed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 4: ADMIN VAULT */}
      {currentView === "admin" && user?.role === "SuperAdmin" && (
        <div>
          <h2 style={{ color: "#064e3b", margin: 0, fontSize: "1.6rem", fontWeight: "900" }}>Revoxa SuperAdmin Command Portal</h2>
          <p style={{ color: "#4b5563", margin: "0.3rem 0 1.8rem", fontSize: "0.9rem" }}>Full administrative monitoring for waste treatment compliance, company audits & escrow clearing</p>

          <div style={styles.adminGrid3D}>
            <div style={styles.adminPanel3D}>
              <div style={styles.adminPanelHeader}>BUYING & ESCROW TRANSACTIONS QUEUE ({escrows.length})</div>
              {escrows.map((e) => (
                <div key={e.id} onClick={() => setSelectedAdminEscrow(e)} style={selectedAdminEscrow?.id === e.id ? styles.adminQueueActive : styles.adminQueueItem}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={styles.emeraldPill}>{e.id}</span>
                    <span style={{ color: e.isDisbursed ? "#059669" : "#d97706", fontSize: "0.78rem", fontWeight: "800" }}>
                      {e.isDisbursed ? "Disbursed ✓" : "Vault Locked 🔒"}
                    </span>
                  </div>
                  <h4 style={{ color: "#064e3b", margin: "0.4rem 0 0.2rem", fontSize: "0.95rem", fontWeight: "800" }}>{e.productTitle}</h4>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#4b5563" }}>
                    <span>Seller: <strong>{e.sellerName}</strong></span>
                    <span style={{ color: "#064e3b", fontWeight: "900" }}>{e.totalAmount}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.adminPanel3D}>
              <div style={styles.adminPanelHeader}>FULL COMPANY AUDIT & ESCROW CONTROL</div>
              {selectedAdminEscrow && (
                <div>
                  <div style={styles.auditDetailsCream}>
                    <div style={styles.auditRow}><span>DEAL ID:</span> <strong style={{ color: "#064e3b" }}>{selectedAdminEscrow.id}</strong></div>
                    <div style={styles.auditRow}><span>BUYER ENTITY:</span> <strong>{selectedAdminEscrow.buyerName}</strong></div>
                    <div style={styles.auditRow}><span>SELLER COMPANY:</span> <strong>{selectedAdminEscrow.sellerName}</strong></div>
                    <div style={styles.auditRow}><span>ESCROW AMOUNT:</span> <strong style={{ color: "#064e3b", fontSize: "1.1rem" }}>{selectedAdminEscrow.totalAmount}</strong></div>
                    
                    {selectedAdminEscrow.sellerDetails && (
                      <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #d97706", padding: "0.9rem", borderRadius: "10px", marginTop: "0.8rem" }}>
                        <div style={{ fontWeight: "800", color: "#b45309", marginBottom: "0.4rem", fontSize: "0.85rem" }}>🏢 SELLER AUDIT DATA</div>
                        <div style={{ fontSize: "0.8rem", color: "#1f2937", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                          <div><strong>GSTIN:</strong> {selectedAdminEscrow.sellerDetails.gstin}</div>
                          <div><strong>Direct Phone:</strong> <span style={{ color: "#064e3b", fontWeight: "800" }}>{selectedAdminEscrow.sellerDetails.directPhone}</span></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {!selectedAdminEscrow.isDisbursed && (
                    <button onClick={() => handleBuyerReleasePayment(selectedAdminEscrow.id)} style={styles.btnEmeraldFull}>
                      SuperAdmin Manual Release Override ➔
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// STYLES: REVOXA CREAM WHITE, EMERALD GREEN & METALLIC GOLD
const styles = {
  creamTerminal: { backgroundColor: "#fdfbf7", color: "#1f2937", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", padding: "1.5rem 2.5rem", boxSizing: "border-box" },
  headerCream: { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#ffffff", padding: "1rem 1.8rem", borderRadius: "20px", border: "1px solid #e5e7eb", marginBottom: "2.5rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)" },
  brandBox: { display: "flex", alignItems: "center", gap: "0.9rem", cursor: "pointer" },
  revoxaLogoBox: { width: "44px", height: "44px", background: "linear-gradient(135deg, #064e3b, #047857)", color: "#ffffff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(6, 78, 59, 0.3)" },
  brandTitle: { color: "#064e3b", fontWeight: "900", fontSize: "1.4rem", letterSpacing: "0.5px" },
  goldTag: { backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.58rem", padding: "0.15rem 0.4rem", borderRadius: "4px", verticalAlign: "middle" },
  brandSubtitle: { color: "#b45309", fontSize: "0.62rem", fontWeight: "800", letterSpacing: "0.5px" },
  navDeckCream: { display: "flex", gap: "0.4rem", backgroundColor: "#f3f4f6", padding: "0.4rem", borderRadius: "12px", border: "1px solid #e5e7eb" },
  navBtnCream: { background: "none", border: "none", color: "#4b5563", padding: "0.55rem 1.1rem", cursor: "pointer", fontWeight: "600", fontSize: "0.85rem", borderRadius: "8px" },
  navActiveCream: { background: "linear-gradient(135deg, #064e3b, #047857)", color: "#ffffff", padding: "0.55rem 1.1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "800", fontSize: "0.85rem", border: "none", boxShadow: "0 4px 12px rgba(6, 78, 59, 0.25)" },
  adminBtnCream: { background: "rgba(217, 119, 6, 0.1)", color: "#b45309", padding: "0.55rem 1.1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "0.85rem", border: "1px solid #d97706" },
  adminActiveCream: { background: "linear-gradient(135deg, #d97706, #b45309)", color: "#ffffff", padding: "0.55rem 1.1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "800", fontSize: "0.85rem", border: "none" },
  
  userGlassTag: { fontSize: "0.85rem", color: "#064e3b", background: "#f3f4f6", padding: "0.4rem 0.8rem", borderRadius: "10px", border: "1px solid #d1d5db", display: "flex", gap: "8px", alignItems: "center" },
  condensedAuthLink: { background: "none", border: "none", color: "#dc2626", cursor: "pointer", fontSize: "0.75rem", textDecoration: "underline", marginLeft: "6px" },
  condensedAuthBtn: { backgroundColor: "#ffffff", border: "1px solid #064e3b", color: "#064e3b", padding: "0.45rem 0.9rem", borderRadius: "8px", fontWeight: "700", fontSize: "0.8rem", cursor: "pointer" },
  condensedSignUpBtn: { background: "linear-gradient(135deg, #064e3b, #047857)", border: "none", color: "#ffffff", padding: "0.45rem 0.9rem", borderRadius: "8px", fontWeight: "800", fontSize: "0.8rem", cursor: "pointer", boxShadow: "0 2px 8px rgba(6, 78, 59, 0.2)" },

  heroBadge3DCream: { display: "inline-block", backgroundColor: "rgba(217, 119, 6, 0.1)", border: "1px solid #d97706", color: "#b45309", fontSize: "0.78rem", fontWeight: "800", padding: "0.4rem 1rem", borderRadius: "20px", marginBottom: "1.2rem" },
  hero3DHeadingCream: { fontSize: "2.8rem", color: "#064e3b", fontWeight: "900", maxWidth: "880px", margin: "0 auto 1.2rem", lineHeight: "1.25" },
  goldGlowText: { background: "linear-gradient(90deg, #d97706, #b45309)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubTextCream: { color: "#4b5563", maxWidth: "680px", margin: "0 auto 2.2rem", fontSize: "1.1rem", lineHeight: "1.6" },
  btnEmeraldGlow: { background: "linear-gradient(135deg, #064e3b, #047857)", color: "#fff", border: "none", padding: "0.8rem 1.8rem", borderRadius: "12px", fontWeight: "800", cursor: "pointer", fontSize: "0.95rem", boxShadow: "0 6px 18px rgba(6, 78, 59, 0.3)" },
  btnGlassSecondaryCream: { backgroundColor: "#ffffff", border: "1px solid #d97706", color: "#b45309", padding: "0.6rem 1.2rem", borderRadius: "12px", cursor: "pointer", fontSize: "0.85rem", fontWeight: "700" },
  stats3DGridCream: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.8rem", maxWidth: "900px", margin: "0 auto" },
  stat3DBoxCream: { backgroundColor: "#ffffff", padding: "2rem", borderRadius: "20px", border: "1px solid #e5e7eb", textAlign: "center", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.04)" },
  statValCream: { fontSize: "2.2rem", fontWeight: "900", color: "#d97706" },
  statLblCream: { color: "#4b5563", fontSize: "0.85rem", fontWeight: "600", marginTop: "0.4rem" },
  
  catPillCream: { backgroundColor: "#ffffff", border: "1px solid #d1d5db", color: "#4b5563", padding: "0.5rem 1rem", borderRadius: "20px", cursor: "pointer", fontSize: "0.82rem", fontWeight: "600" },
  catPillActiveCream: { backgroundColor: "#064e3b", border: "none", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "20px", cursor: "pointer", fontWeight: "800", fontSize: "0.82rem", boxShadow: "0 4px 12px rgba(6, 78, 59, 0.3)" },
  filterInactiveBtn: { backgroundColor: "#ffffff", border: "1px solid #d97706", color: "#b45309", padding: "0.55rem 1rem", borderRadius: "10px", cursor: "pointer", fontSize: "0.82rem", fontWeight: "700" },
  filterActiveBtn: { backgroundColor: "#d97706", border: "none", color: "#ffffff", padding: "0.55rem 1rem", borderRadius: "10px", cursor: "pointer", fontSize: "0.82rem", fontWeight: "800" },

  grid3D: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.8rem" },
  card3DCream: { backgroundColor: "#ffffff", borderRadius: "20px", border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" },
  card3DImg: { width: "100%", height: "180px", objectFit: "cover" },
  discountTag3D: { position: "absolute", top: "14px", right: "14px", backgroundColor: "#dc2626", color: "#fff", padding: "0.3rem 0.7rem", borderRadius: "8px", fontSize: "0.75rem", fontWeight: "900" },
  emeraldPill: { backgroundColor: "rgba(6, 78, 59, 0.1)", color: "#064e3b", border: "1px solid #064e3b", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.72rem", fontWeight: "800" },
  card3DTitleCream: { margin: "0.4rem 0 0.6rem", color: "#064e3b", fontSize: "1.05rem", fontWeight: "800" },
  sellerBoxCream: { backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", padding: "0.7rem", borderRadius: "10px", margin: "0.4rem 0" },
  shippingTagBoxCream: { backgroundColor: "rgba(217, 119, 6, 0.08)", border: "1px solid rgba(217, 119, 6, 0.3)", padding: "0.55rem 0.7rem", borderRadius: "8px", fontSize: "0.78rem", color: "#b45309", margin: "0.5rem 0" },
  btnPhoneSmallCream: { backgroundColor: "#ffffff", border: "1px solid #064e3b", color: "#064e3b", padding: "0.55rem 0.8rem", borderRadius: "8px", cursor: "pointer", fontSize: "0.8rem", fontWeight: "800" },
  btnPrimarySmallCream: { background: "linear-gradient(135deg, #064e3b, #047857)", color: "#fff", border: "none", padding: "0.55rem 0.9rem", borderRadius: "8px", fontWeight: "800", cursor: "pointer", fontSize: "0.82rem" },
  
  escrow3DCreamCard: { backgroundColor: "#ffffff", border: "1px solid #e5e7eb", padding: "1.8rem", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" },
  shippingManifestBoxCream: { backgroundColor: "#fdfbf7", border: "1px solid #d97706", padding: "0.88rem 1rem", borderRadius: "12px", margin: "1rem 0 0.5rem" },
  statusLockedPillCream: { backgroundColor: "rgba(217, 119, 6, 0.12)", color: "#b45309", border: "1px solid #d97706", padding: "0.3rem 0.8rem", borderRadius: "8px", fontSize: "0.78rem", fontWeight: "800" },
  statusDisbursedPillCream: { backgroundColor: "rgba(5, 150, 105, 0.12)", color: "#059669", border: "1px solid #059669", padding: "0.3rem 0.8rem", borderRadius: "8px", fontSize: "0.78rem", fontWeight: "800" },
  
  adminGrid3D: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.8rem" },
  adminPanel3D: { backgroundColor: "#ffffff", border: "1px solid #e5e7eb", padding: "1.5rem", borderRadius: "20px" },
  adminPanelHeader: { borderBottom: "2px solid #f3f4f6", paddingBottom: "0.6rem", marginBottom: "1.2rem", fontSize: "0.78rem", fontWeight: "900", color: "#064e3b", letterSpacing: "1px" },
  adminQueueItem: { backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", padding: "1rem", borderRadius: "12px", cursor: "pointer", marginBottom: "0.8rem" },
  adminQueueActive: { backgroundColor: "rgba(6, 78, 59, 0.08)", border: "1px solid #064e3b", padding: "1rem", borderRadius: "12px", cursor: "pointer", marginBottom: "0.8rem" },
  auditDetailsCream: { display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "1.5rem", backgroundColor: "#f9fafb", padding: "1.2rem", borderRadius: "12px", border: "1px solid #e5e7eb" },
  auditRow: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e5e7eb", paddingBottom: "0.5rem", fontSize: "0.85rem", color: "#374151" },

  modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 },
  modal3DCard: { backgroundColor: "#ffffff", border: "2px solid #064e3b", padding: "2rem", borderRadius: "24px", width: "540px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" },
  summaryCreamBox: { backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "12px", border: "1px solid #e5e7eb", marginBottom: "1rem" },
  payTabCream: { backgroundColor: "#f3f4f6", border: "1px solid #d1d5db", padding: "0.7rem 0.5rem", borderRadius: "10px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "700", color: "#374151" },
  payTabActiveCream: { backgroundColor: "rgba(6, 78, 59, 0.1)", border: "2px solid #064e3b", padding: "0.7rem 0.5rem", borderRadius: "10px", cursor: "pointer", fontSize: "0.78rem", fontWeight: "900", color: "#064e3b" },
  creamInput: { width: "100%", padding: "0.8rem", backgroundColor: "#f9fafb", border: "1px solid #d1d5db", color: "#1f2937", borderRadius: "10px", boxSizing: "border-box", outline: "none", fontSize: "0.88rem" },
  btnEmeraldFull: { width: "100%", background: "linear-gradient(135deg, #064e3b, #047857)", color: "#fff", border: "none", padding: "0.95rem", borderRadius: "12px", fontWeight: "900", cursor: "pointer", fontSize: "0.95rem", boxShadow: "0 4px 15px rgba(6, 78, 59, 0.3)" },
  closeBtn: { background: "none", border: "none", color: "#6b7280", cursor: "pointer", fontSize: "1.3rem" }
};