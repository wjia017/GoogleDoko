import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Leaf, MapPin, Search as SearchIcon } from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { searchPlaces, searchProducts } from "../data/search";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  const matchedProducts = searchProducts(query);
  const matchedPlaces = searchPlaces(query);
  const total = matchedProducts.length + matchedPlaces.length;

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>SEARCH</span>
            <h1>
              {query
                ? `Results for “${query}”`
                : "Search products or places"}
            </h1>
            <p>
              {query
                ? `${total} match${total === 1 ? "" : "es"} found`
                : "Type a product name, category, or place in the search bar."}
            </p>
          </div>
        </section>

        {matchedPlaces.length > 0 && (
          <section className="all-products-section search-places-section">
            <div className="all-products-heading">
              <h2>Places</h2>
              <p>Origins that match your search</p>
            </div>

            <div className="places-grid search-places-grid">
              {matchedPlaces.map((place) => (
                <Link
                  key={place.origin}
                  to={`/categories?place=${encodeURIComponent(place.origin)}`}
                  className="place-card"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="place-card-image"
                  />

                  <div className="place-card-overlay">
                    <div>
                      <h2>{place.name}</h2>
                      <p>
                        <MapPin size={16} />
                        {place.products} products
                      </p>
                    </div>

                    <span className="place-card-arrow" aria-hidden="true">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="all-products-section">
          {matchedProducts.length > 0 ? (
            <>
              <div className="all-products-heading">
                <h2>Products</h2>
                <p>Items that match your search</p>
              </div>

              <div className="categories-products-grid">
                {matchedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : query && matchedPlaces.length === 0 ? (
            <div className="no-products-message">
              <SearchIcon size={40} />
              <h3>No results for “{query}”</h3>
              <p>
                Try another product name or place, such as Apple, Honey, or Kullu.
              </p>
              <Link to="/shop">View all products</Link>
            </div>
          ) : !query ? (
            <div className="no-products-message">
              <Leaf size={40} />
              <h3>Start a search</h3>
              <p>Use the search bar above to find products or places.</p>
              <Link to="/shop">Browse products</Link>
            </div>
          ) : null}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Search;
