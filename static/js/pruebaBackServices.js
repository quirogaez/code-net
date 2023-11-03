/* Script para consutlar streams de coding */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

(async () => {const streams = await axios({
    method: 'GET',
    url:  'https://api.twitch.tv/helix/users?id=176050880&id=81849010',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded", 
        "Authorization": `Bearer ${process.env.twitchAUTH}`,
        "Client-Id": `${process.env.twitchClientID}`
    }
    })
    console.log(streams.data);
    
})()

(async () => {const streams = await axios({
    method: 'GET',
    url:  'https://api.twitch.tv/helix/users?id=176050880&id=81849010',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded", 
        "Authorization": `Bearer ${process.env.twitchAUTH}`,
        "Client-Id": `${process.env.twitchClientID}`
    }
    })
    console.log(streams.data);
    
})()