export default function VariantOption({variantOptions, variant}: any) {

  return (
    variantOptions.length && (
      variantOptions.map((option) => 
        <button 
          type="button" 
          className="border border-gray-300 text-gray-700 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          { option.value }
        </button>
      )
    )
  )
}