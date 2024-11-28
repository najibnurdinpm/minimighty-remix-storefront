import { CardApp } from "~/components/card";
import { Pagination } from "~/components/global";
import { Product } from "~/components/section"

export default function BeforeLogin({products, filters, current_page, per_page, total, pages}: any) {

  const dataPages = {
    currentPage: current_page,
    perPage: per_page,
    total,
    pages,
  }

  return (
    <Product.LayoutBeforeLogin
      filters={filters}
      dataPages={dataPages}
    >
      <ul className=" flow-root space-y-4 sm:space-y-8">
        {
          products.length && ( products.map(product => 
            <CardApp>
              <Product.ProductCardBeforeLogin 
                product={product}
              />
            </CardApp>
          ))
        }
      </ul>
    </Product.LayoutBeforeLogin>
  )
}