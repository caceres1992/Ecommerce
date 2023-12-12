import axios from 'axios'
export async function getAllProducts() {
    const productData = await  axios.get('api/products')

    return productData.data

} 