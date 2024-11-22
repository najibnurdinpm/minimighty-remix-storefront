import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Product } from "~/components/section"


export async function loader({
  request
}: LoaderFunctionArgs) {

  let url = new URL(request.url);
  let search = url.searchParams.get("search");
  let endPoint = `http://localhost:8000/api/products/all`

  if (search) endPoint = endPoint.concat(url.search);

  const response = await fetch(
    endPoint,
    {
        method: "GET",
        redirect: "follow"
    }
  );
    
  return json(await response.json());   
}

export async function handleSearch(query?: string | null) {

  console.log('query')
  
  return { data: {
    response: 123546
  } }
}

export default function products() {

    const { status, data } = useLoaderData<typeof loader>();
    const { products, filters, short, per_page, total, has_page, pages, next_page_url, previous_page_url, getPageName, current_page } = data

    return (
        <Product.BeforeLogin
            products={products}
            filters={filters}
            current_page={current_page}
            per_page={per_page}
            total={total}
            pages={pages}
        />
    );
}