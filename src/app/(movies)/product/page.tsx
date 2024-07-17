import Image from "next/image";
import { AllProductsType } from "./product.type";

export default async function Product() {
  const getData = async () => {
    const dataFecth = await fetch("http://localhost:3000/api/product", {
      next: { revalidate: 30 },
    });
    const data = await dataFecth.json();
    return data.data as AllProductsType[];
  };

  const products: AllProductsType[] = await getData();

  return (
    <section className="flex min-h-screen gap-3 justify-between p-28 flex-wrap">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <Image
              className="rounded-t-lg"
              src={product.image}
              alt="img"
              width={500}
              height={500}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
