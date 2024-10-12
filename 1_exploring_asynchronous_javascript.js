// Task 1 Obtain API Key and configuration
// Public API Key is d439bcb5d546b0de1cbff183b2365de5

// Task 2 Fetching Characters Using Fetch API

let input= document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

let ts = date;
let publicKey ="d439bcb5d546b0de1cbff183b2365de5"
let privateKey = "b4f967f271fbc92b00eed71fe6180d2c5fad88fd"
let hashVal ="3fe5c988438c73b5ca517fe98be46e24"

function fetchCharacter(callback){
    button.addEventListener("click", (getResult = async() => {
        if (input.value.trim().length < 1){
            alert("Input cannot be empty");
        }
        showContainer.innerHTML = "";
        const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}&name=${input.value}`;
        
        try {const response = await fetch(apiMarvelURL);
        const characterData = await response.json();
        callback(null, characterData);
        }
        catch (error) {
            callback(error, null);
        };
        console.log(characterData);
}))}

const feedToHTML = (error, characterData) => {
    const dataInfoId = document.getElementById('display-container');

    if (error) {
        dataInfoId.innerHTML = `<p>Error Fetching Character Data: ${error.message}</p>`;
    } 
    else {
        dataInfoId.innerHTML = `<p>Character Data: ${characterData.message}</p>`;
    };
};

const updatePage = () => {
    fetchCharacter(feedToHTML);
};

updatePage();
