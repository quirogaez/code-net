import axios from "axios"


async function projectFindById(genero) {
    console.log({...pubData})
    const data = JSON.stringify({...pubData})
    const response = await axios({
        method: 'POST',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/createPublication`,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })


    return response.data
}

async function projectFindByType(genero) {


    const response = await axios({
        method: 'GET',
        url: `http://ec2-13-58-44-254.us-east-2.compute.amazonaws.com:8080/BuscarPublicationByTypePublication/${genero}`,
        headers: {
            'content-type': 'application/json'
        }

    })


    return response.data
}





export {projectFindById, projectFindByType}