import { Form } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

export default function Sidebar({filters}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [idTags, setIdTags] = useState([]);
  const [idTypes, setIdTypes] = useState([]);
  const [activeTag, setActiveTag] = useState(false)
  const [activeType, setActiveType] = useState(false)

  const handleTagsChange = (event) => {

    (event.target.checked) ? setIdTags([
      ...idTags,
      event.target.value
    ]) : setIdTags(oldValues => {
      return oldValues.filter((_, i) => _ !== event.target.value)
    })

    setActiveTag(true)
  };

  const handleTypesChange = (event) => {

    (event.target.checked) ? setIdTypes([
      ...idTypes,
      event.target.value
    ]) : setIdTypes(oldValues => {
      return oldValues.filter((_, i) => _ !== event.target.value)
    })

    setActiveType(true)
  }

  const setTags = () => {

    if (!activeTag) return

    setSearchParams((prev) => {
      (idTags.length) ? prev.set('tags', idTags.toString()) : prev.delete('tags');
      return prev;
    })
  }

  const setTypes = () => {
    
    if (!activeType) return

    setSearchParams((prev) => {
      (idTypes.length) ? prev.set('types', idTypes.toString()) : prev.delete('types');
      return prev;
    });
  }

  useEffect(() => {
    setTags()
    setTypes()
  },[idTags, idTypes]) 

  return (
    <div 
      class="hidden lg:block" 
      method="post"
    >
      {filters.length && ( filters.map((items) => 
        <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
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
                        id={`${items.handle}-${index}`}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="tags" 
                            onChange={ items.handle == 'tags' ? handleTagsChange : handleTypesChange }
                            value={option.id}
                      />
                      <label
                        for={`${items.handle}-${index}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        {option.name} {items.handle}
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