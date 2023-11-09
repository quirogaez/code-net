import axios from "axios"


async function getPeople() {

    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/consultarDataUser`,
        headers: {
            'content-type': 'application/json'
        }
    })
    

    return response.data
}


async function getUserData(email) {

    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarDataUser/${email}`,
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}

async function getUserById(idUser) {

    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarUsuario/${idUser}`,
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}

async function getImgByEmail(email) {

    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarDataUser/${email}`,
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}


async function createFriend(dataFriends)  {
    /* Funcion encargada de crear una relacion de amistad */

    const dataExist = JSON.stringify(dataFriends.idUsuario);
    const responseExist = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarAmigosByIdUsuario/${dataExist}`,
        headers: {
            'content-type': 'application/json'
        }
    })
    console.log(responseExist.data)
    console.log(dataFriends.idUsuario)
    const friendExist = responseExist.data.find((amistad) => amistad.idUsuario == dataFriends.idUsuario && amistad.idAmigo == dataFriends.idAmigo)
    console.log("existe?",friendExist)
    if (friendExist) {
        throw  new Error("Ya eres amigo de esta persona")
        
    } else {const data = JSON.stringify(dataFriends);
    const response = await axios({
        method: 'POST',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/createAmigos`,
        headers: {
            'content-type': 'application/json'
        },
        data: data
    })
    return response.data}
}

export {getPeople, getUserData, createFriend, getUserById, getImgByEmail}