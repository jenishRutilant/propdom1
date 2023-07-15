import axios from "axios";

const makeAPIRequest = async (method, url, data, headers, params) =>
    new Promise(async (resolve, reject) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYW5hZ2VyIjp7ImlkIjoiNjRhZjc5MGEzMzQyNDQzNTNiMjE5MGQ5In0sImlhdCI6MTY4OTIyMjE4N30.pUgwMZ_LntTKsREse7JhXiPvik4JE1QH_9JNWqd7oe8"
        const options = {
            ...{
                method,
                url,
                data,
                params,
            },
            ...(token && { headers: { 'authToken_manager': token } }),
        };
        if (headers) {
            options.headers = { ...options.headers, ...headers };
        }
        axios(options)
            .then(async (response) => {
                // console.log("🚀 ~ file: apiCall.js:13 ~ .then ~ response:", response)
                if (response?.status === 200 || response?.status === 201) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(async (error) => {
                console.log(error);
                reject(error)
            })
        return null
    })

export default makeAPIRequest;