import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/userapi"

class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL+"/users");
    }
    updateUser(data){
        return axios.put(USER_API_BASE_URL+"/update",data);
    }
}

export default new UserService()