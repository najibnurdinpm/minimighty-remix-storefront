import { Fragment } from 'react'
import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { StarIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { Product } from "~/components/section"
import ProductSlider from "~/components/section/productdetail/ProductSlider"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import { useState, useEffect } from 'react';


const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2021',
      datetime: '2021-01-06',
    },
    // More reviews...
  ],
}

const relatedProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  }
]

export async function loader({
  params
}: LoaderFunctionArgs) {

  console.log('params data', params.handle)

  let endPoint = `http://localhost:8000/api/products/byHandle?handle=${params.handle}`

  const response = await fetch(
    endPoint,
    {
        method: "GET",
        redirect: "follow"
    }
  );

  return json(await response.json());
}

export default function product({params}: LoaderFunctionArgs) {

  const [Slider, setSlider] = useState(null);
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    import("react-slick").then((Module) => {
      setSlider(() => Module.default);
    });

    setAngka(1)

    console.log('Slider', Slider)

  }, [Slider]);

  var sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const product = {
    name: 'Basic Tee',
    price: '$35',
    rating: 3.9,
    reviewCount: 512,
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        id: 1,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
    colors: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      'Only the best materials',
      'Ethically and locally made',
      'Pre-washed and pre-shrunk',
      'Machine wash cold with similar colors',
    ],
  }
  const policies = [
    { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
  ]

  const testFunction = () => {
    alert('ok')
  }
  

  const { status, data } = useLoaderData<typeof loader>();

  console.log('data api', data)

  const {title, price, description, recommendations, variant, variant_option} = data

  return(
      <>
        <main class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
    <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 ">
      <div class="lg:col-span-5 lg:col-start-8 lg:hidden">
        <div class="flex justify-between">
          <h1 class="text-xl font-medium text-gray-900">{ title }</h1>
          <p class="text-xl font-medium text-gray-900">{price} test</p>
        </div>
      </div>
      <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 ">
        <h2 class="sr-only">Images</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8 ">
            <div className="lg:col-span-2 lg:row-span-2 w-full min-h-[400px] bg-green-400">
              <img src={variant[0].image_variant} class="w-full h-full" />
            </div>
            disini foto gambar nya
          </div>
      </div>
      <div class="lg:col-span-5 sm:sticky sm:top-28 bg-white sm:rounded-lg sm:shadow ring-0 sm:ring-1 ring-transparent  sm:px-0 sm:py-0">
        <div class="lg:col-start-8 hidden lg:block ">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">{ title }</h1>
            <p class="text-xl font-medium text-gray-900">{price} disini</p>
          </div>

          <div className="mt-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                {product.rating}
                <span className="sr-only"> out of 5 stars</span>
              </p>
              <div className="ml-1 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                      'size-5 shrink-0',
                    )}
                  />
                ))}
              </div>
              <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                ·
              </div>
              <div className="ml-4 flex">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  See all {product.reviewCount} reviews
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Description</h2>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="mt-4 space-y-4 text-sm/6 text-gray-500"
          />
        </div>

        <Product.ProductForm 
            variantOptions={variant_option}
            variant={variant}
            changeActiveVariantOption={testFunction}
          />


<div class="grid">
            <div class="mt-12">
            <div class="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
            </div>
            <fieldset class="mt-[14px]">
                <legend class="sr-only">Reduce quantity</legend>
                <span class="isolate inline-flex rounded-md shadow-sm">
                <button type="button" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10" >
                    <MinusSmallIcon class="h-3 w-3" aria-hidden="true" />
                </button>
                <button type="button" class="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300" disabled>{'1'}</button>
                <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                    <PlusSmallIcon class="h-3 w-3" aria-hidden="true" />
                </button>
                </span>
            </fieldset>
            </div>
        </div>

        <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>

        <div class="mt-8 sm:px-0 sm:py-0 px-4 py-4 rounded-lg sm:rounded-none shadow sm:shadow-none sm:ring-0 ring-1 ring-black ring-opacity-5">
          {/* <FormDetailProduct 
            :props="props"
            @add-to-cart="addToCart"
            @change-variant="changeVariant"
            @add-quantity="addQuantity"
            @reduce-quantity="reduceQuantity"
          />
          <DetailInfoProduct 
            :detailDescriptions="detailDescriptions"
          /> */}
        </div>
      </div>
    </div>

    <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
            Recent reviews
          </h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            {reviews.featured.map((review) => (
              <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'size-5 shrink-0',
                          )}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6 text-sm text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <img
                  alt={relatedProduct.imageAlt}
                  src={relatedProduct.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {angka}
              
        {Slider ? (
<Slider {...sliderSettings}>
<div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
</Slider>
) : (
<>tidak ada slider</>
)}

<ProductSlider />
        


    {/* <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <TabGroup>
        <div className="border-b border-gray-200">
          <TabList className="-mb-px flex space-x-8">
            <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
              Customer Reviews
            </Tab>
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          <TabPanel className="-mb-10">
            <h3 className="sr-only">Customer Reviews</h3>

            {reviews.featured.map((review, reviewIdx) => (
              <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                <div className="flex-none py-10">
                  <img alt="" src={review.avatarSrc} className="size-10 rounded-full bg-gray-100" />
                </div>
                <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-4 text-sm/6 text-gray-500"
                  />
                </div>
              </div>
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div> */}
    
  </main>
      </>
  )
}