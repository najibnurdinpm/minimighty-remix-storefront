import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from "../global";

type ILayout = {
  children: React.ReactNode;
};

export default function Pagination({current_page, per_page, total, pages}) {
  
    return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-0">
        <PaginationMobile 
          pages={pages}
        />
        <PaginationDeskstop 
          pages={pages}
          currentPage={current_page}
          perPage={per_page }
          total={total }
        />
    </div>
    );
  }

  function PaginationMobile({pages}: any) {

    return (
      <div className="flex flex-1 justify-between sm:hidden">
        {pages.length && (
          pages.map((page, index) => index === 0 || index === ( pages.length - 1 ) 
            ? index === 0
              ? (
                <ButtonPageMobile
                  page={page}
                >
                  Previous
                </ButtonPageMobile>
                )
              : (
                <ButtonPageMobile
                  page={page}
                >
                  Next
                </ButtonPageMobile>
              )
            : (
              <></>
            )  
          )
        )}
      </div>
    )
  }

  function PaginationDeskstop({pages, currentPage, perPage, total}: any) {

    return (

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700"> 
            Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{perPage}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          {pages.length && (
            pages.map((page, index) => index === 0 || index === ( pages.length - 1 ) 
              ? index === 0
                ? (
                  <ButtonPageDekstop 
                    page={page}
                  >
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                  </ButtonPageDekstop>
                  )
                : (
                  <ButtonPageDekstop 
                    page={page}
                  >
                    <span class="sr-only">Previous</span>
                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                  </ButtonPageDekstop>
                )
              : (
                <ButtonPageDekstop 
                  page={page}
                >
                  {page.label}
                </ButtonPageDekstop>
              )  
            )
          )}
        </nav>
      </div>
    </div>
    )
  }
 

  function ButtonPageDekstop({ page, children }: ILayout) {

    return (
      <Link
        className={`${page.active ? `bg-indigo-800 text-white` : `bg-white text-indigo-800 ring-1 ring-inset ring-gray-300` } relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        to={page.url ? `?${new URL(page.url).searchParams.toString()}` : `` } 
      >
        {children}
      </Link>
    )
  }

  function ButtonPageMobile({page, children }: ILayout) {

    return (
      <Link
        to={page.url ? `?${new URL(page.url).searchParams.toString()}` : `` } 
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {children}
      </Link>
    )
  }