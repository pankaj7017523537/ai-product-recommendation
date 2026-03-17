import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import ProductList from "./components/ProductList";
import Recommendation from "./components/Recommendation";
import { products as productData } from "./data/products";
import { getAIRecommendation } from "./services/aiService";
 
import "./App.css";


function App() {
  const [query, setQuery] = useState("");
  const [recommendationText, setRecommendationText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getAIRecommendation(query, productData);

      setRecommendationText(result.message);
      setFilteredProducts(result.products);
    } catch (err) {
      setError("Something went wrong while fetching AI recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>AI Product Recommendation System</h2>

      <SearchBox
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />

      {loading && <p className="loading">Loading AI recommendations...</p>}
      {error && <p className="error">{error}</p>}

      <Recommendation text={recommendationText} />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
