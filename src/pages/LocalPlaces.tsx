import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination, {
  paginateItems,
  PLACES_PAGE_SIZE,
} from "../components/Pagination";

import { products } from "../data/products";

function placeImage(origin: string) {
  const slug = origin.split(",")[0].trim().toLowerCase().replace(/\s+/g, "-");
  return `/src/assets/images/places/${slug}.jpg`;
}

function placeName(origin: string) {
  return origin.split(",")[0].trim();
}

function soldCount(sold: string) {
  const value = Number.parseInt(sold.replace(/[^\d]/g, ""), 10);
  return Number.isNaN(value) ? 0 : value;
}

function LocalPlaces() {
  const [page, setPage] = useState(1);
  const places = products.reduce<
    {
      origin: string;
      name: string;
      products: number;
      image: string;
    }[]
  >((list, product) => {
    const existing = list.find((place) => place.origin === product.origin);

    if (existing) {
      existing.products += soldCount(product.sold);
      return list;
    }

    list.push({
      origin: product.origin,
      name: placeName(product.origin),
      products: soldCount(product.sold),
      image: placeImage(product.origin),
    });

    return list;
  }, []);

  const paged = paginateItems(places, page, PLACES_PAGE_SIZE);

  function changePage(nextPage: number) {
    setPage(nextPage);
    document
      .querySelector(".places-list-section")
      ?.scrollIntoView({ behavior: "auto", block: "start" });
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="places-page">
        <section className="places-banner">
          <div className="places-banner-content">
            <span>EXPLORE LOCAL PLACES</span>
            <h1>Discover authentic products from their original places</h1>
            <p>
              Visit trusted farms and local sellers, then shop the
              products grown in each place.
            </p>
          </div>
        </section>

        <section className="places-list-section">
          <div className="places-grid">
            {paged.items.map((place) => (
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

          <Pagination
            page={paged.current}
            totalPages={paged.totalPages}
            onChange={changePage}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LocalPlaces;
