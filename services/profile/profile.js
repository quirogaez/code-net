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




export {profileImg}