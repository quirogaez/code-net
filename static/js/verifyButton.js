const verifyButton = document.getElementById('verify');




verifyButton.addEventListener ('click', (e)=> {
    e.preventDefault();
    const url = document.querySelector(".url__project").value;
    alert ("verificacion en proceso");
    let cleanUrl = new URL (url);
    console.log(cleanUrl.protocol)
    console.log(cleanUrl.hostname)
    console.log(cleanUrl.host) 
    console.log(cleanUrl.origin)
    

});


