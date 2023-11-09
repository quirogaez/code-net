import axios from "axios"


async function profileImg(userEmail) {
    const data = userEmail;
    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarDataUser/${data}`,
        headers: {
            'content-type': 'application/json'
        }
    })

    return response.data
}

async function getAllUserInfo(userEmail) {
    const data = userEmail;
    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarDataUser/${data}`,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}

async function getAllFriends(userId) {
    const data = userId;
    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarAmigosByIdUsuario/${data}`,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}

async function putUserData(userData) {
    const data = JSON.stringify(userData);
    console.log("Estoy en data put", data)
    const response = await axios({
        method: 'PUT',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/ModificarDataUser`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })

    return response.data
}



export {profileImg, getAllUserInfo, putUserData, getAllFriends}