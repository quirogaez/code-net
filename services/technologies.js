import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function getTechnologies (web){
    let technologies, importantTech;
    const post_array = [];

    post_array.push({
    target: web
    });

    const response = await axios({
    method: 'POST',
    url: `https://api.dataforseo.com/v3/domain_analytics/technologies/domain_technologies/live`,
    auth: {
        username: 'diegoquiroga2603@gmail.com',
        password: '608d785953b21c93'
    },
    data: post_array,
    headers: {
        'content-type': 'application/json'
    }
    })
    

    var result = response['data']['tasks'];
    // Result data
    console.log(result[0].result[0].technologies);
    
    technologies = result[0].result[0].technologies;

    importantTech = {
        servers_cdn: technologies.servers?.cdn,
        serversweb_servers: technologies.servers?.web_servers,
        serversweb_paas: technologies.servers?.paas,
        web_servers: technologies.web_servers,
        paas: technologies.paas,
        databases : technologies.databases,
        maps: technologies.location?.maps,
        ui_frameworks: technologies.web_development?.ui_frameworks,
        javascript_libraries: technologies.web_development?.javascript_libraries,
        javascript_frameworks: technologies.web_development?.javascript_frameworks,
        web_frameworks: technologies.web_development?.web_frameworks,
        programming_languages: technologies.web_development?.programming_languages,
        cms: technologies.content?.cms
    }

    return importantTech;

}


export default getTechnologies