import { useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";
import { Product } from "~/components/section"

export async function loader() {
    
  const response = await fetch(
    "http://localhost:8000/api/products/all",
    {
        method: "GET",
        redirect: "follow"
    }
  );
    
  return json(await response.json());   
}

export default function products() {

    const { status, data } = useLoaderData<typeof loader>();
    const { products } = data

    return (
        <Product.BeforeLogin
            products={products}
        />
    );
}