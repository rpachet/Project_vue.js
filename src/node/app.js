const express = require('express')
const bodyParser = require('body-parser');


const app = express()


// app.use(bodyParser.json()) //parse JSON body
// app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body

movies = [
];

app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body


app.use((req, res, next)=> {

    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    console.log(hours + ':' + min + ':' + sec);
    console.log('url : ' + req.originalUrl);
    console.log('body : ' , req.body);
    console.log('-------------------------------');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// Retourne un tableau de tout les films
app.use('/api/movies/all',function(req,res){
  res.send(movies);
});

// Retourne l'objet correspondant au film avec l'identifiant id
app.get('/api/movies/:id',function(req,res){
  let id = parseInt(req.params.id)

  movie = movies.find(m => m.id === id);
  res.setHeader("Content-Type", "application/json");
  res.send(movie);
});

// Met à jour le film avec l'identifiant id
app.post('/api/movies/:id', function (req, res) {
  let id = parseInt(req.params.id);
  let updateData = req.body;
  console.log(updateData);
  movie = movies.find(m => m.id === id);

  movie.title = updateData.title;
  movie.year = updateData.year;
  movie.synopsys = updateData.synopsys;
  movie.note = updateData.note;

  movie.title= updateData.title;
  movie.year = updateData.year;
  movie.language = updateData.language;
  movie.directorName = updateData.directorName;
  movie.directorNationality = updateData.directorNationality;
  movie.directorBirthDate = updateData.directorBirthDate;
  movie.synopsys = updateData.synopsys;
  movie.genre = updateData.genre;
  movie.poster = updateData.poster;
  movie.note = updateData.note;
});

// Créer un nouveau film
app.post('/api/movies', function (req, res, next) {
  let movie = req.body;
  let id = movies.length;
  movie['id'] = id;
  movies.push(movie);
  res.json(movie);
});


//Supprimer un film
app.get('/api/delete/:id',function(req,res){
  let id = parseInt(req.params.id);
  movie = movies.find(m => m.id === id);
  movies.splice(movies.indexOf(movie),1);
  res.send(movies);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
