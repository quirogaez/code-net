import axios from "axios"

/* ------------ Inicio servicios Sercicios SIGNUP ------------*/
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



async function createSignIn(loginData) {
    console.log({...loginData})
    const data = JSON.stringify({...loginData})
    const response = await axios({
        method: 'POST',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/createUsuario`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}
/* ------------ Fin servicios SIGNUP ------------*/


/* ------------ Inicio Sercicios SIGNIN ------------*/
async function signInService(loginData) {
    console.log({...loginData})
    const data = JSON.stringify({...loginData})
    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarUsuarioByEmail/${loginData.email}`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}



export {signUpService, signInService, createSignIn}