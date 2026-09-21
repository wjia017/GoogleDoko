import { useEffect, useMemo, useState } from "react";
import { Leaf } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Pagination, { paginateItems } from "../components/Pagination";

import { products } from "../data/products";
import categoriesBanner from "../assets/images/categories/categories-banner.jpg";
import categoryPromo from "../assets/images/categories/category-promo.jpg";

type Category =
    | "All"
    | "Fruits"
    | "Vegetables"
    | "Spices"
    | "Dairy & Eggs"
    | "Grains";

const categoryOptions: Category[] = [
    "All",
    "Fruits",
    "Vegetables",
    "Spices",
    "Dairy & Eggs",
    "Grains",
];

function CategoriesPage() {
    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get("category");
    const placeFromUrl = searchParams.get("place");

    const [selectedCategory, setSelectedCategory] =
        useState<Category>(
            categoryFromUrl &&
            categoryOptions.includes(categoryFromUrl as Category)
                ? (categoryFromUrl as Category)
                : "All",
        );
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (
            categoryFromUrl &&
            categoryOptions.includes(categoryFromUrl as Category)
        ) {
            setSelectedCategory(categoryFromUrl as Category);
        }
    }, [categoryFromUrl]);

    useEffect(() => {
        setPage(1);
    }, [placeFromUrl, selectedCategory]);

    const filteredProducts = useMemo(() => {
        const byPlace = placeFromUrl
            ? products.filter((product) => product.origin === placeFromUrl)
            : products;

        if (selectedCategory === "All") {
            return byPlace;
        }

        return byPlace.filter(
            (product) => product.category === selectedCategory,
        );
    }, [placeFromUrl, selectedCategory]);

    const paged = paginateItems(filteredProducts, page);

    function changePage(nextPage: number) {
        setPage(nextPage);
        document
            .querySelector(".all-products-section")
            ?.scrollIntoView({ behavior: "auto", block: "start" });
    }

    function chooseCategory(category: Category) {
        setSelectedCategory(category);
        setPage(1);
    }

    return (
        <>
            <TopBar />
            <Navbar />

            <main className="categories-page">

                {/* Page Banner */}
                {!placeFromUrl && (
                <section className="categories-banner">
                    <div className="categories-banner-content">
                        <img
                            src={categoriesBanner}
                            alt=""
                            className="categories-banner-photo"
                        />
                        <div className="offer-sr-only">
                            <p>Our fresh produce</p>
                            <h1>Fresh Choices for a Healthier You</h1>
                            <p>
                                Browse through our wide range of fresh, organic
                                and high-quality products.
                            </p>
                            <p>
                                100% Natural. Freshly Harvested. Safe and
                                Hygienic. Better Health For You. Good Food
                                Good Mood.
                            </p>
                        </div>
                    </div>
                </section>
                )}


                {/* Category Filter */}
                <section className="category-filter-section">
                    <div className="category-filter">

                        {categoryOptions.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={
                                    selectedCategory === category
                                        ? "category-filter-button active"
                                        : "category-filter-button"
                                }
                                onClick={() => chooseCategory(category)}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                </section>


                {/* Products */}
                <section className="all-products-section">

                    <div className="all-products-heading">
                        <h2>
                            {placeFromUrl
                                ? placeFromUrl.split(",")[0].trim()
                                : selectedCategory === "All"
                                    ? "All Products"
                                    : selectedCategory}
                        </h2>

                        <p>
                            {placeFromUrl
                                ? `Products from ${placeFromUrl}`
                                : "Fresh products, better living"}
                        </p>
                    </div>


                    {filteredProducts.length > 0 ? (
                        <>
                        <div className="categories-products-grid">

                            {paged.items.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}

                        </div>

                        <Pagination
                            page={paged.current}
                            totalPages={paged.totalPages}
                            onChange={changePage}
                        />
                        </>
                    ) : (
                        <div className="no-products-message">
                            <Leaf size={40} />

                            <h3>
                                No products available yet
                            </h3>

                            <p>
                                Products from this category will be
                                added soon.
                            </p>

                            <button
                                type="button"
                                onClick={() => chooseCategory("All")}
                            >
                                View all products
                            </button>
                        </div>
                    )}

                </section>


                {/* Promotional Section */}
                <section className="categories-bottom-promo">
                    <div className="categories-bottom-promo-frame">
                        <img
                            src={categoryPromo}
                            alt=""
                            className="categories-bottom-promo-photo"
                        />
                        <div className="offer-sr-only">
                            <h2>Fresh Products Better Living</h2>
                            <p>Organic. Healthy. Natural.</p>
                            <p>Everything you need for a healthier lifestyle.</p>
                        </div>
                        <Link to="/shop" className="categories-bottom-promo-hotspot">
                            Buy Now
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default CategoriesPage;