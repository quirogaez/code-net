import axios from "axios"


async function signUpService(userData) {
    console.log({...userData})
    const data = JSON.stringify({...userData})
    const response = await axios({
        method: 'POST',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/createDataUser`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}

async function signInService(loginData) {
    console.log({...loginData})
    const data = JSON.stringify({...loginData})
    const response = await axios({
        method: 'POST',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/createDataUser`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}



export {signUpService, signInService}