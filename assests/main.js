document.querySelector("button").addEventListener("click", yourName);

function yourName(){

    let name = document.querySelector("input").value;

    document.querySelector("p").innerText = `Hello ${name} welcome to Bootcamp`;
    
}
