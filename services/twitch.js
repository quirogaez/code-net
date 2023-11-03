/* Script para consutlar streams de coding */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

async function getStreams(data = {}) {
    const pagination = data?.pag || null; // Obtiene el valor de 'pag' de los datos o establece null si no está presente
    const numStreams = data?.num || null; // Obtiene el valor de 'num' de los datos o establece null si no está presente

    // Construye la URL de la API de Twitch para obtener información de streams, considerando paginación si está presente
    const url = pagination === null
        ? 'https://api.twitch.tv/helix/streams?game_id=1469308723&first=20'
        : `https://api.twitch.tv/helix/streams?game_id=1469308723&first=10&after=${pagination}`;

    // Realiza una solicitud GET a la API de Twitch para obtener información de streams
    const streams = await axios({
        method: 'GET',
        url: url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${process.env.twitchAUTH}`,
            "Client-Id": `${process.env.twitchClientID}`
        }
    });

    return streams.data; // Devuelve los datos de streams obtenidos de la respuesta
}

// Función asincrónica para obtener información de usuarios de Twitch
async function getUsers(usersId) {
    // URL base de la API de Twitch
    let url = `https://api.twitch.tv/helix/users?`;

    // Comprueba si se proporciona una lista de IDs de usuarios
    if (usersId) {
        // Construye la URL para la solicitud GET con los IDs de usuarios
        for (let i = 0; i < usersId.length; i++) {
            if (i === usersId.length - 1) {
                url += "id=" + usersId[i];
            } else {
                url += `id=${usersId[i]}&`;
            }
        }
    }

    console.log(url);

    // Realiza una solicitud GET a la API de Twitch para obtener información de usuarios
    const users = await axios({
        method: 'GET',
        url: url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${process.env.twitchAUTH}`, // Agrega el token de autenticación
            "Client-Id": `${process.env.twitchClientID}` // Agrega el ID del cliente de Twitch
        }
    });

    // Obtiene los datos de usuarios de la respuesta
    const usersData = users.data;
    /* console.log(users.data); */

    // Crea una lista de usuarios coincidentes (Se ordena segun los indices obtenidos como parametro)
    const equalsUsersList = [];
    if (usersId) {
        for (let i = 0; i < usersId.length; i++) {
            equalsUsersList.push(
                usersData.data.find((user) =>  user.id == usersId[i])
            );
        }
    }

    /* console.log("Datos de usuarios obtenidos con éxito");
    console.log(equalsUsersList); */

    // Devuelve los datos de usuarios obtenidos de la respuesta
    return equalsUsersList;
}




export  {getStreams, getUsers};