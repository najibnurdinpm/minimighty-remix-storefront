import { Product } from "~/components/section"

export default function ProductCardBeforeLogin({product}: any) {

  return (
    <>
      <div className=" flex flex-col sm:flex-row sm:space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8 ">
        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 rounded-md ">
          <img className="w-full h-full flex-none rounded-md object-cover sm:h-full sm:w-48 shadow-sm ring-1 ring-black ring-opacity-5" src={product.url} />
          <a href="#" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {''}</span>
          </a>
        </div>
        <div className="min-w-0 flex flex-1 ">
          <div className="flex flex-col justify-between flex-1">
            <div className="">
              <h3 className="text-sm mt-4 sm:mt-0 font-medium text-gray-900 sm:mb-2">{product.title}</h3>
              <div
                className="relative sm:static block pb-20 sm:pb-20"
              >
                <Product.ProductForm 
                  variantOptions={product.variant_option}
                  variant={product.variant}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-0 sm:ml-6 sm:w-40 sm:flex-none  hidden sm:flex  flex-1 flex-col justify-between">
        <div className="flex flex-col justify-between text-end w-full h-full">
          <p className=" font-medium text-gray-900">{'2335615'}</p>
        </div>
        <div className=" w-full sm:w-auto bg-green-400">
          <Product.AddToCart />
        </div>
      </div>
    </>
  )
}