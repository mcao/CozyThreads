import products from "@/mocks/product-data";
import ProductCard from "@/components/ProductCard";

function Home() {
  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-5xl font-bold">Our Products</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
