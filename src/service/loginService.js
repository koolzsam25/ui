import axios from "axios";
export async function loginUser(credentials) {
    console.log("Entered in the login user method", credentials);

    const res = await axios.post('http://localhost:5000/v1/login', credentials)
        .then(data => {
            return data})
    console.log("Data: ", res.data);
    return res.data;
}

