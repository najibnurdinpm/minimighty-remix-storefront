import { CardApp } from "~/components/card";
import { Pagination } from "~/components/global";
import { Product } from "~/components/section"

import { handleSearch } from "~/routes/products"

import {
  useLoaderData,
  useNavigation,
  useSubmit,
  Form,
} from "@remix-run/react";

import type {
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";

import { useEffect } from "react";


import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/react'

  import { MinusIcon, PlusIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

  export const loader = async ({
    request,
  }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    // const response = await handleSearch(q);

    console.log('response')
    return json({  q });
  };

export default function BeforeLogin({isLogin, products, filters, current_page, per_page, total, pages}) {

    const { q } = useLoaderData<typeof loader>();

    useEffect(() => {
        const searchField = document.getElementById("q");
        if (searchField instanceof HTMLInputElement) {
          searchField.value = q || "";
        }
      }, [q]);

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
                        <Shorting q={q} />
                        <div 
                            class="mt-4 sm:mt-10"
                        >
                            <CardBeforeLogin products={products} />
                            <Pagination
                                current_page={current_page}
                                per_page={per_page}
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

function Shorting({q}) {
    
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    return (
        <section aria-labelledby="filter-heading" class="sm:py-6 py-2 sm:border-t sm:border-b border-gray-300">
      <h2 id="filter-heading" class="sr-only">Product filters</h2>

      <div class="flex flex-col sm:flex-row gap-x-12 gap-y-4 sm:gap-y-0 items-center justify-between ">
        <div class="flex w-full sm:max-w-sm">
          <label for="search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div class="mt-2 flex rounded-md shadow-sm bg-green-400 relative">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Form 
                    id="search-form" 
                    role="search"
                    className="w-full"
                    onChange={(event) => {
                        const isFirstSearch = q === null;
                        submit(event.currentTarget, {
                            replace: !isFirstSearch,
                        });
                    }}
                >
                    <input 
                        id="q"
                        aria-label="Search products"
                        defaultValue={q || ""} 
                        class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Search product"
                        type="search"
                        name="search" 
                    />
                </Form>
              </div>
              <button type="button" class="absolute z-50 inset-y-0 right-0 -ml-px inline-flex items-center gap-x-1.5 rounded-full px-2 py-2 text-sm font-semibold text-gray-100 rounded-full">
                <XMarkIcon class="-ml-0.5 h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

function Filter({filters}) {
    
    return (
        <form class="hidden lg:block">
            {filters.length && (
            filters.map((items) => <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                 <h3 className="-mx-2 -my-3 flow-root">
                         <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                         <span className="font-medium text-gray-900">{items.name}</span>
                         <span className="ml-6 flex items-center">
                             <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                             <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                         </span>
                         </DisclosureButton>
                     </h3>
                     <DisclosurePanel className="pt-6">
                         <div className="space-y-6">
                             {items.options && (
                                items.options.map(option => 
                                 <div className="flex items-center">
                                     <input
                                         type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                     />
                                     <label
                                         className="ml-3 min-w-0 flex-1 text-gray-500"
                                     >
                                         {option.name}
                                     </label>
                                 </div> 
                                ) 
                             )}
                            
                         </div>
                     </DisclosurePanel>
            </Disclosure>) 
        )}
        </form>
        
    )
}

function CardBeforeLogin({products}) {

    return (
        <ul className=" flow-root space-y-4 sm:space-y-8">
            {
                products.length && (
                    products.map((product) => 

                        <CardApp>
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
                                        <ProductForm 
                                            variant_options={product.variant_option}
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
                            </div>
                        </CardApp>
                    )
                )
            }
        
        </ul>
    )
}

function ProductForm({variant_options, variant}) {

    return (
        <>
            {
                variant_options.length && (

                    variant_options.map((variantOpt) => 
                    <>
                        <div 
                            className="relative flex gap-3 flex-wrap justify-start w-full mt-4"
                        >
                            <VariantOption 
                                variant_options={variantOpt.values}
                            />
                        </div>
                        <div className="absolute bottom-0 sm:bottom-4 sm:right-4 w-full sm:w-auto">
                            <AddToCart />
                        </div>
                    </>

                    )
                    
                )
            }
        </>
    )
}

function AddToCart() {

    return (
        <a 
            className="py-2 relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 text-sm font-medium text-white hover:bg-indigo-500"
        >   
                Add to cart
        </a>
    )
}

function VariantOption({variant_options}) {

    return (
        variant_options.length && (
            variant_options.map((option) => 
                <button 
                    type="button" 
                    className="border border-gray-300 text-gray-700 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                    { option.value }
                </button>
            )
        )
    )
}