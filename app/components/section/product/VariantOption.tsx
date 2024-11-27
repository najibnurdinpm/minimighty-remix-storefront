let arrayValue = []

export default function VariantOption({variantOptions}: any) {

  const getChooseOptionVariant = (variantOptionId) => {

    variantOptions.map( items => {

      if (items.id === variantOptionId) {
        items.active_button = true

        if (items.active_button === true) {
          arrayValue.push( items.value )
        }

        return
      } 

      items.active_button = false
    } )

    // variantOptions.map( items => {
    //   const found = items.values.find((it) => it.active_button === true)

    //   if( !found ) return false

    //   const { value } = found

    //   arrayValue.push( value )
    // } )
    
    
    // console.log('variantOptions, variantOptionId', variantOptions, variantOptionId)
    // variantOption.map( items => items.active_button = ( items.id === variantOptionId ) ? true : false  )

  }

  return (
    variantOptions.length && (
      variantOptions.map(option => 
        <button 
         onClick={() => {
          getChooseOptionVariant(option.id)
          console.log('arrayValue', arrayValue)
    
         }}
          type="button" 
          className="border border-gray-300 text-gray-700 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          { option.value }
        </button>
      )
    )
  )
}