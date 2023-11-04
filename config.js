import dotenv from 'dotenv';
import axios from 'axios';
// Configura las variables de entorno
dotenv.config();



/* Script para gestionar token con twitch (localHost) */
async function twitchAuth() {
    const data = `client_id=${process.env.twitchClientID}&client_secret=${process.env.twitchClientSecret}&grant_type=client_credentials`
    const token = await axios({
    method: 'POST',
    url: 'https://id.twitch.tv/oauth2/token',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    data: data
    }).catch(function(error) {
    console.log(error);
    });
    
    return token.data.access_token;
}

export default twitchAuth

