import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({current_page, per_page, total, pages}) {
  
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-0">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700"> 
                Showing <span className="font-medium">{current_page}</span> to <span className="font-medium">{per_page}</span> of{' '}
              <span className="font-medium">{total}</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                {pages.length && (
                    pages.map((page, index) => 

                    
                    index === 0 || index === ( pages.length - 1 ) 
                        ? index === 0
                            ? (
                                <>
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                  >
                                    <span class="sr-only">Previous</span>
                                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                                  </a>
                                </>
                              )
                            : (
                                <>
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                  >
                                    <span class="sr-only">Next</span>
                                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                                  </a>
                                </>
                            )
                        : (
                            <a
                                    href="#"
                                    aria-current="page"
                                    className={`${page.active ? `bg-indigo-800 text-white` : `bg-white text-indigo-800 ring-1 ring-inset ring-gray-300` } relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
                                >
                                    {page.label}
                                </a>  
                        )  
                    )
                )}
            </nav>
          </div>
        </div>
      </div>
    );
  }