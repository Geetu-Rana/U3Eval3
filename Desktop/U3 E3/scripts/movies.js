// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmt = localStorage.getItem("amount");
let wlt = document.getElementById("wallet");
wlt.innerText = walletAmt;

let id;
    let moviesDiv = document.getElementById("movies");
    let bookedmovie = localStorage.getItem("moovies" )|| [];

async function searchMovie(){

    try{
        const query = document.getElementById("search").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=1eddbd2f&s=${query}`);
        
        let data = await res.json();
        let movies = data.Search;
        console.log(movies)
        return movies;

    }
    catch(err){
        console.log(err)
    }

}

function appendData(data){
    moviesDiv.innerHTML = null;
    data.forEach(function(el){
       
        let box = document.createElement("div");
        
        let name = document.createElement("p");
        name.innerText = el.Title
    
        let img = document.createElement("img");
        img.src =el.Poster;

        let btn = document.createElement("button");
        btn.innerText = "Book Movie"

        btn.addEventListener("click", function(){
           bookmovie(el);
        })
        box.append(img, name , btn);
        moviesDiv.append(box);
        
    });
 function bookmovie(data){
    bookedmovie.push(data);
    localStorage.setItem("movies", JSON.stringify(bookedmovie));
  }
}
async function main(){
    let upload = await searchMovie();

    if(upload == undefined){
        return false;
    }
    appendData(upload)
}
function debouncing(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
}, delay)
}
