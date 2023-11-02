/* Script para consutlar streams de coding */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

async function getStreams(data = {}) {
    const pagination = data?.pag || null; // Obtiene el valor de 'pag' de los datos o establece null si no está presente
    const numStreams = data?.num || null; // Obtiene el valor de 'num' de los datos o establece null si no está presente

    // Construye la URL de la API de Twitch para obtener información de streams, considerando paginación si está presente
    const url = pagination === null
        ? 'https://api.twitch.tv/helix/streams?game_id=1469308723&first=10'
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

async function getUsers(usersId) {
    let url = `https://api.twitch.tv/helix/users?`;
    if (usersId) {
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
            "Authorization": `Bearer ${process.env.twitchAUTH}`,
            "Client-Id": `${process.env.twitchClientID}`
        }
    });

    return users.data; // Devuelve los datos de usuarios obtenidos de la respuesta
}



export  {getStreams, getUsers};