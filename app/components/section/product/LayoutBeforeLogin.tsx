import { CardApp } from "~/components/card";
import { Pagination } from "~/components/global";
import { Product } from "~/components/section"

type ILayoutBeforeLogin = {
  children: React.ReactNode;
};

export default function LayoutBeforeLogin({filters, dataPages, children}: ILayoutBeforeLogin) {

  const {currentPage, perPage, total, pages} = dataPages

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="px-4 py-8 sm:px-0 sm:pt-10 sm:pb-5 lg:px-0 lg:pt-28 lg:pb-16">
        <section aria-labelledby="title" class="text-center">
          <h2 
            className="font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900"
          >
            Product
          </h2>
        </section>
        <section aria-labelledby="products-heading" class="pt-24">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <Product.Sidebar 
              filters={filters}
            />
            <div class="lg:col-span-3">
              <section aria-labelledby="filter-heading" class="sm:py-6 py-2 sm:border-t sm:border-b border-gray-300">
                <h2 id="filter-heading" class="sr-only">Product filters</h2>
                <Product.InputSearch />
              </section>
              <div 
                class="mt-4 sm:mt-10"
              >
                {children}
                <Pagination
                  current_page={currentPage}
                  per_page={perPage}
                  total={total}
                  pages={pages}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}