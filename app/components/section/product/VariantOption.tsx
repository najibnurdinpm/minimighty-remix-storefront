export default function VariantOption({variantOptionValues, changeActiveVariantOption, indexVariantOption}: any) {

  return (
    variantOptionValues.length && (
      variantOptionValues.map((option) => 
        <button 
         onClick={() => changeActiveVariantOption(option.id, indexVariantOption)}
          type="button" 
          className={`border border-gray-300 ${option.active_button == true ? `bg-indigo-600 text-gray-100` : `bg-gray-50 text-gray-700` }  rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          { option.value }
        </button>
      )
    )
  )
}