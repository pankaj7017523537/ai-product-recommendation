// src/services/aiService.js
// Gemini API mock version for safe testing

export async function getAIRecommendation(userInput, products) {
  try {
    // SIMULATED delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // MOCK Gemini logic: filter products based on "under $X"
    const lowerInput = userInput.toLowerCase();
    let filtered = products; // <<< Make sure 'filtered' is defined

    if (lowerInput.includes("under")) {
      const priceMatch = lowerInput.match(/\d+/);
      if (priceMatch) {
        const maxPrice = parseInt(priceMatch[0]);
        filtered = products.filter((p) => p.price <= maxPrice);
      }
    }

    return {
      message: `Showing products based on "${userInput}" `,
      products: filtered, // <<< Now 'filtered' is defined
    };
  } catch (err) {
    console.error(err);
    return {
      message: `Something went wrong. Showing all products.`,
      products: products, // fallback to full list
    };
  }
}
