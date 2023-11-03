/* Script para consutlar streams de coding */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

async function getStreams(data={}) {
    const pagination = data?.pag || null;
    const numStreams = data?.num || null;

    const url = pagination === null
            ? 'https://api.twitch.tv/helix/streams?game_id=1469308723&first=10' 
            : `https://api.twitch.tv/helix/streams?game_id=1469308723&first=10&after=${pagination}`;


    const streams = await axios({
    method: 'GET',
    url: url,/* 'https://api.twitch.tv/helix/streams?first=40' */
    headers: {
        "Content-Type": "application/x-www-form-urlencoded", 
        "Authorization": `Bearer ${process.env.twitchAUTH}`,
        "Client-Id": `${process.env.twitchClientID}`
    }
    })

    return streams.data
}

export default getStreams;