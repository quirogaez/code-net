import axios from "axios"


async function projectService(pubData) {
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




export {projectService}