import { useMemo, useState } from "react";
import "./Marketplace.css";

const materials = [
  {
    id: 1,
    name: "Recycled Aluminum",
    category: "Metals",
    description: "Sorted aluminum scrap for reuse",
    quantity: "2.4 tonnes",
    location: "Pune, India",
    grade: "Grade details on request",
    price: "Request quote",
    symbol: "Al",
  },
  {
    id: 2,
    name: "HDPE Plastic",
    category: "Plastics",
    description: "Washed HDPE regrind",
    quantity: "850 kg",
    location: "Ahmedabad, India",
    grade: "Natural, details on request",
    price: "Request quote",
    symbol: "HD",
  },
  {
    id: 3,
    name: "Corrugated Cardboard",
    category: "Paper & Glass",
    description: "Baled post-industrial cardboard",
    quantity: "1.2 tonnes",
    location: "Nashik, India",
    grade: "Sorted, details on request",
    price: "Request quote",
    symbol: "P",
  },
  {
    id: 4,
    name: "Copper Wire",
    category: "Metals",
    description: "Reusable copper wire offcuts",
    quantity: "500 kg",
    location: "Mumbai, India",
    grade: "Purity details on request",
    price: "Request quote",
    symbol: "Cu",
  },
  {
    id: 5,
    name: "Reusable Timber",
    category: "Wood",
    description: "Recovered timber pieces",
    quantity: "300 kg",
    location: "Nagpur, India",
    grade: "Condition details on request",
    price: "Request quote",
    symbol: "W",
  },
  {
    id: 6,
    name: "PET Plastic Flakes",
    category: "Plastics",
    description: "Sorted PET flakes for processing",
    quantity: "700 kg",
    location: "Surat, India",
    grade: "Specification on request",
    price: "Request quote",
    symbol: "PET",
  },
];

const categories = [
  "All",
  "Metals",
  "Plastics",
  "Paper & Glass",
  "Wood",
];

export default function Marketplace({ onBack, onSignIn }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const matchesCategory =
        category === "All" || material.category === category;

      const searchableText =
        `${material.name} ${material.description} ${material.location} ${material.category}`;

      const matchesSearch = searchableText
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="market-page">
      <header className="market-topbar">
        <button className="market-back" onClick={onBack}>
          ← Back to REVOXA
        </button>
        <span className="market-page-label">PUBLIC MARKETPLACE</span>
        <button className="market-signin" onClick={onSignIn}>
          Sign in ↗
        </button>
      </header>

      <section className="market-intro">
        <span className="market-eyebrow">INDUSTRIAL RESOURCE EXCHANGE</span>
        <h1>
          Find value in
          <br />
          <span>what’s left over.</span>
        </h1>
        <p>
          Browse available materials, explore specifications,
          and discover potential suppliers.
        </p>
      </section>

      <section className="market-controls">
        <label className="market-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search materials, categories, or locations"
            aria-label="Search materials, categories, or locations"
          />
          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </label>

        <div className="market-filter-row">
          <div className="market-filter-label">MATERIAL CATEGORY</div>
          <div className="market-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "market-filter selected"
                    : "market-filter"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="market-results">
        <div className="market-results-heading">
          <div>
            <span className="market-eyebrow">EXPLORE SUPPLY</span>
            <h2>Available materials</h2>
          </div>
          <span className="market-result-count">
            {filteredMaterials.length} RESULTS
          </span>
        </div>

        {filteredMaterials.length > 0 ? (
          <div className="market-listing-grid">
            {filteredMaterials.map((material, index) => (
              <article className="market-listing" key={material.id}>
                <div className={`listing-art art-${index % 4}`}>
                  <span className="listing-art-label">
                    {material.category.toUpperCase()}
                  </span>
                  <span className="listing-art-symbol">
                    {material.symbol}
                  </span>
                  <span className="listing-art-index">
                    MATERIAL / {String(material.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="listing-content">
                  <h3>{material.name}</h3>
                  <p>{material.description}</p>

                  <div className="listing-details">
                    <div>
                      <span>QUANTITY</span>
                      <strong>{material.quantity}</strong>
                    </div>
                    <div>
                      <span>LOCATION</span>
                      <strong>{material.location}</strong>
                    </div>
                  </div>

                  <div className="listing-bottom">
                    <span>{material.price}</span>
                    <button
                      onClick={() => setSelectedMaterial(material)}
                      aria-label={`View details for ${material.name}`}
                    >
                      View details ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="market-empty">
            <h3>No matching materials</h3>
            <p>Try a different search or choose another category.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <footer className="market-footer">
        <span>REVOXA</span>
        <span>Waste for one. Value for another.</span>
        <span>DEMO LISTINGS · SAMPLE DATA</span>
      </footer>

      {selectedMaterial && (
        <div
          className="material-modal-backdrop"
          onClick={() => setSelectedMaterial(null)}
        >
          <section
            className="material-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="material-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMaterial(null)}
              aria-label="Close material details"
            >
              ×
            </button>

            <span className="market-eyebrow">MATERIAL DETAILS</span>
            <h2 id="material-modal-title">{selectedMaterial.name}</h2>
            <p>{selectedMaterial.description}</p>

            <div className="modal-detail-list">
              <div>
                <span>Category</span>
                <strong>{selectedMaterial.category}</strong>
              </div>
              <div>
                <span>Available quantity</span>
                <strong>{selectedMaterial.quantity}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{selectedMaterial.location}</strong>
              </div>
              <div>
                <span>Material specification</span>
                <strong>{selectedMaterial.grade}</strong>
              </div>
            </div>

            <div className="demo-notice">
              This is a sample listing. Supplier details and exchange
              requests will be connected in a later step.
            </div>

            <button
              className="modal-request-button"
              onClick={onSignIn}
            >
              Sign in to request an exchange ↗
            </button>
          </section>
        </div>
      )}
    </main>
  );
}