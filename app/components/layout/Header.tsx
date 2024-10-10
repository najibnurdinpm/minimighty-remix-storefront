import {
    NavLink,
  } from "@remix-run/react";

import { Link } from "../global";
import { PopoverGroup } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import menu from "~/data/layout/megaMenu.json";

export default function Header() {
  
    return (
        <header className="relative  sticky top-0 z-20">
        <nav aria-label="Top">
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <NavLink
                    className="text-sm font-medium text-white hover:text-gray-100"
                    to={'/'}
                  >
                    Create an account
                  </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden h-full lg:flex ">
                  <PopoverGroup className="ml-8">
                      <div className="flex h-full justify-center space-x-8 mr-8">
                      {!menu.length
                          ? null
                          : menu.map((item: any, ke: number) => {
                              return (
                                  <Link
                                  key={"sub-"}
                                  to={'/'}
                                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                  >
                                      { item.title }
                                  </Link>
                              );
                      })}
                        </div>
                  </PopoverGroup>
                  </div>
                  <div className="flex flex-1 items-center lg:hidden">
                    <button type="button" className="-ml-2 rounded-md bg-white p-2 text-gray-400" >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                  </a>
  
                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
  
                      <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                      {/* <CartDrawer /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  