import menu from "~/data/layout/footerMenu.json";
import { Link } from "../global";

export default function Footer() {
    
    return (
        <footer class=" bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <img class="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300" alt="Company name" />
              <p class="text-base text-gray-500">Making the world a better place through constructing elegant hierarchies.</p>
              <div class="flex space-x-6">
                  <a class="text-gray-400 hover:text-gray-500">test</a>
              </div>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                {
                    menu.length && (
                        menu.map((items) => 
                        (
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                {
                                    items.map((item) => 
                                        <>
                                            <div>
                                                <h3 class="text-base font-medium text-gray-900">{item.title}</h3>
                                                {item.items.length && (
                                                    item.items.map((val) => 
                                                        <ul role="list" class="mt-4 space-y-4">
                                                            <li >
                                                                <Link class="text-base text-gray-500 hover:text-gray-900">{val.name}</Link>
                                                            </li>
                                                        </ul>
                                                    )
                                                )}
                                                
                                            </div>
                                        </>
                                    )
                                }
                            </div>   
                        ))
                    )
                }
            </div>
          </div>
          <div class="mt-12 border-t border-gray-200 pt-8">
            <p class="text-base text-gray-400 xl:text-center">&copy; 2020 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}