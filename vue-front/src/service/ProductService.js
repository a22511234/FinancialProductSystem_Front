import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/productapi"

class ProductService{
    getProducts(){
        return axios.get(USER_API_BASE_URL+"/product");
    }
    getoneProducts(id){
        const url = USER_API_BASE_URL+"/product/productID="+id;
        return axios.get(url);
    }
    deleteProducts(id){
        const url = USER_API_BASE_URL+"/product/productID="+id;
        return axios.delete(url);
    }
    addProcuct(data){
        return axios.post(USER_API_BASE_URL+"/save",data);
    }
    updateProducts(data){
        return axios.put(USER_API_BASE_URL+"/update",data);
    }

}

export default new ProductService() 