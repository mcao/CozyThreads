import { useState, useEffect } from "react";
import Product from "../../../../shared/types/product";
import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError("Failed to load products");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-5xl font-bold">Our Products</h2>
          </div>
          <div className="mt-8">
            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
