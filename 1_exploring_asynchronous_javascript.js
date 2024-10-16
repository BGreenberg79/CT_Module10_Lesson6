// Task 1 Obtain API Key and configuration
// Public API Key is d439bcb5d546b0de1cbff183b2365de5

// Task 2 Fetching Characters Using Fetch API and Task 3 Update User Interface Dynamically

let input= document.getElementById("input-box");
let button = document.getElementById("submit-button");
let displayContainer = document.getElementById("display-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

let ts = "1728768095246";
let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
let privateKey = "b4f967f271fbc92b00eed71fe6180d2c5fad88fd";
let hashVal ="77a953b9de082568b4b060eb0cfe1598";

function fetchCharacter(callback){
    button.addEventListener("click", (getResult = async() => {
        if (input.value.trim().length < 1){
            alert("Input cannot be empty");
        }
        let displayContainer = document.getElementById("display-container");
        displayContainer.innerHTML = "";
        const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}&name=${input.value}`;
        
        try {const response = await fetch(apiMarvelURL);
        const characterData = await response.json();
        callback(null, characterData);
        }
        catch (error) {
            callback(error, null);
        };
}))}

const feedToHTML = (error, characterData) => {
    const dataInfoId = document.getElementById('display-container');
    console.log(characterData)
    if (error) {
        dataInfoId.innerHTML = `<p>Error Fetching Character Data: ${error.message}</p>`;
    } 
    else {
        dataInfoId.innerHTML = `<p>Name:${characterData.data.results[0].name}</p>
        <img src=${characterData.data.results[0].thumbnail.path}.jpg>`;
        
    };
};

const updatePage = () => {
    fetchCharacter(feedToHTML);
};

document.addEventListener("DOMContentLoaded", (event) => {updatePage()});
