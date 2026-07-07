import { useEffect, useState, useRef } from "react";


function LoadMore({theme}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disablebtn, setDisablebtn] = useState(false);

    const initialFetchDone = useRef(false);

    async function fetchProducts() {
        try {
            setLoading(true);

            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count * 20}`
            );

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...result.products,
                ]);
            }

            console.log(result.products)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (count === 0 && initialFetchDone.current) {
            return;
        }

        initialFetchDone.current = true;
        fetchProducts();
    }, [count]);

    useEffect (() => {
        if (products && products.length === 100) 
            setDisablebtn(true)
    }, [products])

    return (
  <section
    id="bakery"
    className="py-16 px-6"
  >
    <h2
      className="
        text-4xl
        font-bold
        text-center
        mb-4
      "
      style={{
        color: theme.primary,
      }}
    >
      Strawberry Bakery Favorites
    </h2>

    <p
      className="
        text-center
        mb-10
        text-lg
      "
      style={{
        color: theme.secondary,
      }}
    >
      Discover sweet treats, cakes, muffins, and berry-inspired delights.
    </p>

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {products.map((item) => (
        <div
          key={item.id}
          className="
            rounded-3xl
            overflow-hidden
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
          style={{
            backgroundColor: theme.accent,
            border: `3px solid ${theme.secondary}`,
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="
              w-full
              h-48
              object-contain
            "
          />

          <div className="p-4">
            <h3
              className="
                font-bold
                text-lg
                mb-2
              "
              style={{
                color: theme.primary,
              }}
            >
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">
              {item.category}
            </p>

            <div
              className="
                flex
                justify-between
                items-center
              "
            >
              <span
                className="font-bold"
                style={{
                  color: theme.secondary,
                }}
              >
                ${item.price}
              </span>

              <button
                className="
                  px-4
                  py-2
                  rounded-full
                  text-white
                  text-sm
                  font-medium
                  transition-all
                  hover:scale-105
                "
                style={{
                  backgroundColor: theme.primary,
                }}
              >
                Sweet Pick
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div
      className="
        flex
        justify-center
        mt-10
      "
    >
      <button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={disablebtn}
        className="
          px-8
          py-3
          rounded-full
          text-white
          font-bold
          shadow-lg
          transition-all
          hover:scale-105
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
        style={{
          backgroundColor: theme.primary,
        }}
      >
        Load More Sweet Treats 🍓
      </button>
    </div>

    <p
      className="
        text-center
        mt-6
      "
      style={{
        color: theme.secondary,
      }}
    >
      Showing {products.length} out of 100 products
    </p>

    {loading && (
      <p
        className="
          text-center
          mt-4
          font-semibold
        "
        style={{
          color: theme.primary,
        }}
      >
        Loading sweet treats...
      </p>
    )}
  </section>
);
}

export default LoadMore;