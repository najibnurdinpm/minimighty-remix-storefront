import { Product } from "~/components/section"

export default function ProductForm({variantOptions, variant, changeActiveVariantOption}: any) {

  return (
    variantOptions.length && (
      variantOptions.map((variantOpt, index) => 
        <div 
          className="relative flex gap-3 flex-wrap justify-start w-full mt-4"
        >
          <Product.VariantOption 
            variantOptionValues={variantOpt.values}
            changeActiveVariantOption={changeActiveVariantOption}
            indexVariantOption={index}
          />
        </div>
      )
    )
  )
}