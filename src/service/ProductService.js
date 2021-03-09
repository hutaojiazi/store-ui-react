import axios from 'axios'

class ProductService {

    getAll() {
        return axios.get('/api/products');
    }
}

export default new ProductService()