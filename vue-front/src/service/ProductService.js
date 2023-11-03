import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/productapi"

class ProductService{
    getProducts(){
        return axios.get(USER_API_BASE_URL+"/product ");
    }

}

export default new ProductService() 