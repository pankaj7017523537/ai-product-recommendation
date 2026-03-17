const SearchBox = ({ query, setQuery, onSearch }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Example: phone under $500 with good camera"
        style={{
          width: "65%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          background: "#020617",
          color: "#e5e7eb",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      />
      <br />
      <button
        onClick={onSearch}
        style={{
          marginTop: "15px",
          padding: "12px 26px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(135deg, #38bdf8, #6366f1)",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        Get AI Recommendation
      </button>
    </div>
  );
};

export default SearchBox;
