const verifyButton = document.getElementById('verify');




verifyButton.addEventListener ('click', async (e)=> {
    e.preventDefault();
    const url = document.querySelector(".url__project").value;
    alert ("verificacion en proceso");
    let cleanUrl = new URL(url);

    console.log(cleanUrl.hostname)
    console.log(cleanUrl.host);

    const response = await fetch(window.location.search + "/codenet/technologies", {
        method: 'POST',
        body: JSON.stringify({ url: cleanUrl.host }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    const data = await response.json();
    console.log(data);
    console.log(data.data);
    const myDataString = Object.keys(imageSources)
    for (let technology in data.data) {
        for (let technologyItem of data.data[technology]){
            console.log(technologyItem);
            let pasrseTech = technologyItem.split(" ", 1)[0].replace(".js","")
            console.log(pasrseTech)
            if(pasrseTech === "Amazon") {
                
                pasrseTech = "aws";
                console.log(pasrseTech)
            }
            if(pasrseTech === "Netlify") {
                
                pasrseTech = "netlify";
                console.log(pasrseTech)
            }
            if (myDataString.includes(pasrseTech)) {
                const selectedImage = document.getElementById(pasrseTech.toLowerCase());
                if (selectedImage) {
                    selectedImage.style.display = 'block';
                }
            }
        }   
    }
    console.log(data);
});


    const imageSources = {
        Bootstrap: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2FBoostrap.svg?alt=media&token=98cc90b4-5ae7-4e0b-a21c-79e75f1f64fa&_gl=1*fvudtu*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYxOTYuMTQuMC4w",
        js: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjavascript.svg?alt=media&token=24735da3-03d5-4589-81a5-e76f18440f6b&_gl=1*yi1vu3*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzOTcuMjUuMC4w",
        css: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fcss.svg?alt=media&token=c521b903-a631-4de8-b1f5-baf77b9bf13e&_gl=1*1qsxlsj*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyNTkuMTQuMC4wg",
        html: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fhtml.svg?alt=media&token=b9cc2e45-8ce8-411b-83a5-f7804e04d1f1&_gl=1*4tvk3g*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQyNTkzNi4zMy4xLjE2OTk0MjU5NDMuNTMuMC4w",
        React: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Freact.svg?alt=media&token=348d75f5-3165-4f67-b747-787cc2571cc0&_gl=1*not4r2*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NDcuNS4wLjA.",
        Node: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnodejs.svg?alt=media&token=db6dacae-3aed-4622-85e4-ac9093319c5d&_gl=1*35rsrt*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0ODEuMTEuMC4w",
        Vue:"https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fvuejs.svg?alt=media&token=002e05da-5625-4bdf-9592-abfaf3317558&_gl=1*16pev87*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1OTYuMjMuMC4w",
        aws: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Faws.svg?alt=media&token=5f0862fb-5fc6-47fd-9cd1-7160b71f1bad&_gl=1*rdrij2*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyMjkuNDQuMC4w",
        mongodb: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmongodb.svg?alt=media&token=23161cf2-59f5-465f-b0fc-69a8afcf624f&_gl=1*13dmtpb*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MzIuNjAuMC4w",
        oracle: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Foracle.svg?alt=media&token=ec25bf78-8df4-477b-8c91-74d1a074fec1&_gl=1*rtso9w*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MDguNDQuMC4w",
        Cloudflare: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fcloudflare.svg?alt=media&token=8f7e3da6-c16e-49c9-a40c-f96eed814129&_gl=1*1webvbj*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyNDMuMzAuMC4w",
        filetype: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Ffiletype.svg?alt=media&token=8353c388-e0d7-49c6-947f-ecd763a00413&_gl=1*1l61cud*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyODYuNjAuMC4w",
        Firebase: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Ffirebase.svg?alt=media&token=a302f3d7-3d87-4659-849d-d0db638057b5&_gl=1*9zotk6*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzMDIuNDQuMC4w",
        GitHub: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fgithub.svg?alt=media&token=1ed47073-27dc-4137-b6f3-23043a60dcc0&_gl=1*ljt8or*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzMjIuMjQuMC4w",
        Inertia: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Finertia.svg?alt=media&token=b7a13cc6-2aa7-42b0-9616-c29b5cfe1410&_gl=1*1ew6ppv*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzNjIuNjAuMC4w",
        Java: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjava.svg?alt=media&token=b590ce7b-4383-4822-9dfc-342809209e1e&_gl=1*1mx4toh*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzNzguNDQuMC4w",
        jQuery: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjquery.svg?alt=media&token=b9daac5f-f88b-4453-9257-f3dfbac77828&_gl=1*1giqv9b*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MDkuMTMuMC4w",
        Google: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmaps.svg?alt=media&token=fecb06ba-8e41-40c9-ab8a-3adbd64a803a&_gl=1*rx73er*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MjEuMS4wLjA.",
        MySQL: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmysql.svg?alt=media&token=b1d2603d-818b-4b9d-83fb-e6f05cbc9a8c&_gl=1*fjgraf*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0NDcuNDUuMC4w",
        Nginx: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnginx.svg?alt=media&token=e29d0eb1-5cae-4450-8c0f-92bdbb6136d9&_gl=1*14u1h8r*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0NzIuMjAuMC4w",
        Nuxt: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnuxt.js.svg?alt=media&token=15cb3c05-335c-4c60-8b98-2ddad95216f5&_gl=1*n09cra*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0OTIuNjAuMC4w",
        PHP: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fphp.svg?alt=media&token=b6167375-bd2a-4007-8bfa-6732a52e670b&_gl=1*67m5so*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MjQuMjguMC4w",
        rails: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Frails.svg?alt=media&token=d7128a56-9b75-485c-abd3-b27cbe9ba002&_gl=1*1mgnk34*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MzUuMTcuMC4w",
        Ruby: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fruby.svg?alt=media&token=c65f9247-7f32-4823-b41e-5ec8822182cf&_gl=1*15whmcl*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NTkuNjAuMC4w",
        Underscore: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Funderscore.js.svg?alt=media&token=d8edd8d2-fad1-48f1-aeb9-5a8f0177275f&_gl=1*1jec16z*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NzYuNDMuMC4w",
        WordPress:"https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2FWordpress.svg?alt=media&token=0a2df88a-09c3-4af1-9c9e-f75d966271e5&_gl=1*1j52s7t*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyMTMuNjAuMC4w",
        netlify: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnetlify.svg?alt=media&token=7a8cbb4c-bc9e-4545-945a-3d2315756ad3&_gl=1*3wjc0t*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQwNDI3NC4zMS4xLjE2OTk0MDQyODYuNDguMC4w"
    };
