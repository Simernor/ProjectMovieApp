const baseUrl = "http://www.omdbapi.com/?t=";
// const movieUrl = baseUrl + "?i=tt3896198";
const accessKey = "&apikey=309b618f";

const baseUrlBin = "https://api.jsonbin.io/v3/b/";
const ourBinUrl = baseUrlBin + "639859d334ae3620ec2d2247";
const masterKeyBin = "$2b$10$pSkjDrtU/cI/DJbny7Q6g.rN8oG6CtTRoLoKl98azMMMY5J6kZCzq";

const fruits = ['Lord+of+the+Rings', 'Harry+Potter', 'Star+Wars'];
let listLenght =  fruits.length;
console.log(listLenght);

let randomNumber = Math.floor(Math.random() * listLenght);
console.log(randomNumber);

let randomMovie = fruits[randomNumber];
console.log(randomMovie);

// console.log(baseUrl + randomMovie + accessKey);

let movieUrl = baseUrl + randomMovie + accessKey;

// console.log(movieUrl)

function getMovie() {
  fetch("https://catfact.ninja/fact")
      .then(function (response) {
          return response.json();
      })
      .then((response) => {
          let data = response;
          console.log(data);
      })
      .catch(function (err) {
          console.log('Error: ' + err);
      })
    }

    getMovie();

// function getMovie(){
//   fetch(movieUrl)
//   .then(function(response){
//       return response.json();
//   })
//   .then((response) => {
//       let data = response;
//       console.log(data);
  
//   document.getElementById("demo").innerHTML = data;
//   })
  
//   .catch(function (err) {
//       console.log('Error' + err);
//       document.getElementById("demo").innerHTML = "Oops!";
//   })
  
//   };

//   getMovie();

// console.log(randomNumber)

// console.log(clothing.indexOf(1))

/* const App = {
  listOfMovies: [], //spara filmer vi laddar in från API
  listOfFavorites: [], //spara favoriter
  elements: {
  },
  fetchMovies() {
  },
  createFavorite() {
  },
  removeFavorite() {
  },
  render() {
  }
}
App.render()
 */