import axios from "axios";
export async function loginUser(credentials) {
    // return axios.get('http://localhost:8080/login', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())

    return { "token": "test123", "role": "STUDENT" };
}