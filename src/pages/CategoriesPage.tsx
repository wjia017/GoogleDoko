import { useMemo, useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";

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
    const [selectedCategory, setSelectedCategory] =
        useState<Category>("All");

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") {
            return products;
        }

        return products.filter(
            (product) => product.category === selectedCategory,
        );
    }, [selectedCategory]);

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
                                src="/images/categories-banner.png"
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
                            {selectedCategory === "All"
                                ? "All Products"
                                : selectedCategory}
                        </h2>

                        <p>
                            Fresh products, better living
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

                            <button type="button">
                                Buy Now
                                <ArrowRight size={17} />
                            </button>

                        </div>

                        <div className="category-promo-image">
                            <img
                                src="/images/category-promo.png"
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