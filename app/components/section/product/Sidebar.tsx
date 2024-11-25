import { useState } from 'react';
import { 
  Form,
} from '@remix-run/react';
import { useEffect } from "react";

import { useSearchParams } from '@remix-run/react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { 
  MinusIcon, 
  PlusIcon 
} from '@heroicons/react/24/solid'
  

export default function Sidebar({filters}) {
    let [searchParams, setSearchParams] = useSearchParams();
    const [ids, setIds] = useState([]);

    const handleCheckboxChange = (event) => {

      (event.target.checked) ? setIds([
        ...ids,
        event.target.value
      ]) : setIds(oldValues => {
        return oldValues.filter((_, i) => _ !== event.target.value)
      })

    };

    const newArray = () => {
        if (!ids.length) return

        setSearchParams((prev) => {
          prev.set('tags', ids.toString());
          return prev;
        });
    }

    useEffect(() => {
        newArray()
    },[ids]) 


    return (
        <div 
            class="hidden lg:block" 
            method="post"
        >
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
                                items.options.map((option, index) => 
                                 <div className="flex items-center">
                                     <Form>
                                        <input
                                            type="checkbox"
                                            id={`checked-${index}`}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            name="tags" 
                                             onChange={handleCheckboxChange}
                                             value={option.id}
                                        />
                                        <label
                                            for={`checked-${index}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                        >
                                            {option.name}
                                        </label>
                                     </Form>
                                 </div> 
                                ) 
                             )}
                         </div>
                     </DisclosurePanel>
            </Disclosure>) 
        )}
        </div>
    )
}