import { Form } from "@remix-run/react";
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from '@remix-run/react';
import { useState, useEffect } from 'react';

export default function InputSearch() {

const [keyUp, setKeyUp] = useState('')
const [activeSearch, setActiveSearch] = useState(false)
const [searchParams, setSearchParams] = useSearchParams()

  const handleTagsChange = (string) => {
    setKeyUp(string)
    setActiveSearch(true)
  };

  const setSearching = () => {

    if (!activeSearch) return

    setSearchParams((prev) => {
        keyUp.length ? prev.set('search', keyUp) : prev.delete('search')
        return prev;
    })
  }

  useEffect(() => {
    setSearching()
  },[keyUp]) 

  return (
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
                role="search"
                className="w-full"
                onChange={(event) => {
                    handleTagsChange(event.target.value)
                }}
            >
                <input 
                  aria-label="Search products"
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
  )
}