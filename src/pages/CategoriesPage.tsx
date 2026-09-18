import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { products } from "../data/products";

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

    useEffect(() => {
        if (
            categoryFromUrl &&
            categoryOptions.includes(categoryFromUrl as Category)
        ) {
            setSelectedCategory(categoryFromUrl as Category);
        }
    }, [categoryFromUrl]);

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

    return (
        <>
            <TopBar />
            <Navbar />

            <main className="categories-page">

                {/* Page Banner */}
                <section className="categories-banner">
                    <div className="categories-banner-content">

                        <div className="categories-banner-text">
                            <span className="banner-label">
                                OUR CATEGORIES
                            </span>

                            <h1>
                                Fresh Choices
                                <br />
                                for a Healthier You
                            </h1>

                            <p>
                                Browse through our wide range of fresh,
                                organic and high-quality products.
                            </p>
                        </div>

                        <div className="categories-banner-image">
                            <img
                                src="/src/assets/images/categories/categories-banner.jpg?v=2"
                                alt="Fresh vegetables in a basket"
                            />
                        </div>

                    </div>
                </section>


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
                                onClick={() => setSelectedCategory(category)}
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
                        <div className="categories-products-grid">

                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}

                        </div>
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
                                onClick={() => setSelectedCategory("All")}
                            >
                                View all products
                            </button>
                        </div>
                    )}

                </section>


                {/* Promotional Section */}
                <section className="category-promo-section">

                    <div className="category-promo-content">

                        <div className="category-promo-text">

                            <h2>
                                Fresh Products
                                <br />
                                Better Living
                            </h2>

                            <p>
                                Organic. Healthy. Natural.
                                <br />
                                Everything you need for a healthier lifestyle.
                            </p>

                            <Link to="/shop" className="category-promo-button">
                                Buy Now
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                        <div className="category-promo-image">
                            <img
                                src="/src/assets/images/categories/category-promo.jpg?v=2"
                                alt="Fresh vegetables and fruits"
                            />
                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default CategoriesPage;