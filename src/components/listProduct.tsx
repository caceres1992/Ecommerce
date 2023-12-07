import React from 'react'
import CardProduct from './cardProduct'

type Props = {}

const ListProduct = (props: Props) => {
    return (
        <div className=' py-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 container gap-5'>

            {Array(8).fill(0).map((_, idx) => {
                return <CardProduct 
                width={400} height={300} 
                description={`Shoes ${idx+1}`} 
                alt={`image ${idx+1}`} 
                blurDataUrl={`/assets/__image${idx+1}.png`}
                src={`/assets/__image${idx+1}.png`}  />
            })}
        </div>
    )
}

export default ListProduct