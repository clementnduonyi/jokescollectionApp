const jokeText = document.getElementById("joke")
const jokeBtn = document.getElementById("jokebtn")
const mscJokeText = document.getElementById("msc-joke")
const mscJokeBtn = document.getElementById("msc-jokebtn")
const cathegory = document.getElementsByClassName("cathegory")

jokeBtn.addEventListener("click", generateJokes)
mscJokeBtn.addEventListener("click", generateMscJoke)

generateJokes()
generateMscJoke()

async function generateJokes(){
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    )
    const data = await res.json();
    console.log(data);
    console.log(data.joke);
    console.log(data.delivery);
    let joke = ""
    if (data.joke == undefined){
        joke = `${data.setup} <br /> ${data.delivery}`
    }else{
        joke = data.joke;
    }
    jokeText.innerHTML = joke;

}

async function generateMscJoke(){
    const mscJokes = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Pun")
    const info = await mscJokes.json();
    console.log(info);
    console.log(info.joke);
    console.log(info.delivery);

    let joke = ""
    if (info.joke == undefined){
        joke = `${info.setup} <br /> ${info.delivery}`
    }
    else{
        joke = info.joke;
    }

mscJokeText.innerHTML = joke;
}