import React from 'react'
import CardProduct from './cardProduct'
import Footer from './Footer'

const ListProduct = async () => {

    const urlBase = process.env.NODE_ENV === 'production'
        ? process.env.URL_BASE
        : "http://localhost:3000"

    const productData = await fetch(`${urlBase}/api/products`, { next: { revalidate: 5 } })

    if (!productData.ok) {
        throw new Error('Failed to fetch data')
    }
    const parseProducts = await productData.json()
    const products: ICartItem[] = parseProducts.products;
    return (
        <>
            <div className=' py-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 container gap-5'>
                {products?.map((product, idx) => {
                    return <CardProduct
                        key={product._id}
                        width={400} height={300}
                        name={product.name}
                        price={product.price}
                        alt={product.name}
                        blurDataUrl={product.images[0]}
                        src={product.images[0]} />
                })}
            </div>
            <Footer />

        </>

    )
}

export default ListProduct