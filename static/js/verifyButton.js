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
});


