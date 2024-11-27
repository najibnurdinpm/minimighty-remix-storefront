import { Product } from "~/components/section"

export default function ProductForm({variantOptions, variant}: any) {

  variantOptions.map((variantOpt) => console.log('variantOpt', variantOpt.values) )

  
  
    return (
      <>
        {
          variantOptions.length && (
            variantOptions.map((variantOpt) => 
              <>
                <div 
                   className="relative flex gap-3 flex-wrap justify-start w-full mt-4"
                >
                  <Product.VariantOption 
                    variantOptions={variantOpt.values}
                  />
                </div>
              </>
            )
          )
        }
      </>
    )
}