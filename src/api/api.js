import axios, * as others from 'axios';

export const getProduct = async () => {
    try {
        const response = await axios.get('https://thx-api-server.ru/products')
        return response
    } catch (err) {
        return err
    }
}