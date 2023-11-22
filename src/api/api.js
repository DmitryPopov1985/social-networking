import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:     {
        "API-KEY": "8f23f6f1-7487-4cd8-b331-f77e77d7cb67"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return  instance
        .get(`users?page=${currentPage}&count=${pageSize},`)
        .then(response => {
            return response.data
        })
    },
    follow(){

    },
    unfollow(){
        
    }
}