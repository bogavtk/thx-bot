import axios, * as others from 'axios';

axios.defaults.baseURL = 'https://thx-api-server.ru'

export const getProduct = async () => {
    try {
        const response = await axios.get('/products')
        return response
    } catch (err) {
        return err
    }
}

export const getSrcImageProduct = (id) => {
    const src = `https://thx-api-server.ru/product_image/${id}`
    return src
}