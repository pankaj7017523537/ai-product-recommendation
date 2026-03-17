const Recommendation = ({ text }) => {
  if (!text) return null;

  return (
    <div
      style={{
        marginBottom: "25px",
        padding: "20px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #eec860, #6366f1)",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
      }}
    >
      🤖 AI Recommendation: {text}
    </div>
  );
};

export default Recommendation;
