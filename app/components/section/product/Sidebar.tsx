import { useState } from 'react';
import { 
  useLoaderData,
  useNavigation,
  useSubmit,
  Form,
} from '@remix-run/react';
import { useEffect } from "react";

import type {
  json,
  LoaderFunctionArgs,
} from "@remix-run/node"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { 
  MinusIcon, 
  PlusIcon 
} from '@heroicons/react/24/solid'

export const loader = async ({
    request,
  }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    console.log('url', url)
    const tags = url.searchParams.get("tags");
    
    return json({ tags });
  };

export let action = async ({ request }) => {
    const formData = await request.formData();
    
    const isChecked = formData.get('exampleCheckbox') === 'on';
    
    // Process data here (e.g., store in a database, handle logic, etc.)
    console.log('formData', formData);
  
    return null;
  };
  

export default function Sidebar({filters}) {

    const { tags } = useLoaderData<typeof loader>();

    console.log('tags', tags)

    const [isChecked, setIsChecked] = useState(false);
    const [ids, setIds] = useState([]);

    const handleCheckboxChange = (event) => {
        setIds([
            ...ids,
            event.target.value
        ])
    };

    // useEffect(() => {
    //     const searchField = document.getElementById("tags");
    //     if (searchField instanceof HTMLInputElement) {
    //       searchField.value = q || "";
    //     }
    //   }, [q]);

    useEffect(() => {
        console.log(ids, '- Has changed')
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
                                items.options.map(option => 
                                 <div className="flex items-center">
                                     <Form
                                        onChange={(event) => {
                                            handleCheckboxChange(event)
                                            console.log('event disini', ids)
                                            // const isFirstSearch = q === null;
                                            // submit(event.currentTarget, {
                                            //     replace: !isFirstSearch,
                                            // });
                                        }}
                                     >
                                        <input
                                            id="tags"
                                            type="checkbox"
                                            // defaultValue={}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            name="tags" 
                                            //  onChange={handleCheckboxChange}
                                             value={option.id}
                                        />
                                        <label
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                        >
                                            {option.name} {isChecked}
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