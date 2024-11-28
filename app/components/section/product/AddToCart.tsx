export default function VariantOption({variantOptions, variant, quantity}: any) {

    return (
      <button 
        type="button"
        className="py-2 relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 text-sm font-medium text-white hover:bg-indigo-500"
      >   
        Add to cart
      </button>
    )
}