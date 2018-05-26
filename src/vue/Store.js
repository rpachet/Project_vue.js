import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: [],
        data: {}
    },
    actions:{
      getMoviesFromAPI(){
        let uri = 'http://localhost:3000/api/movies/all';
        axios.get(uri).then((response) => {
            console.log(response.data);
            let movies = response.data
            this.commit('updateMovies',movies)
        });
      },

      addMovieFromApi(state,movie){
        axios.post('http://localhost:3000/api/movies', {
            id: '',
            title:movie.title,
            year:movie.year,
            language:movie.language,
            directorName:movie.directorName,
            directorNationality:movie.directorNationality,
            directorBirthDate:movie.directorBirthDate,
            synopsys:movie.synopsys,
            genre:movie.genre,
            poster:movie.poster,
            note:movie.note

          })
          .then((response)=>{
            console.log(response.data);
            this.commit('addMovie',response.data)

          });

      },

      editMovieFromApi(state,movie){
        let id = movie.id
        let url = "http://localhost:3000/api/movies/" + id
        axios.post(url, {
          title:movie.title,
          year:movie.year,
          language:movie.language,
          directorName:movie.directorName,
          directorNationality:movie.directorNationality,
          directorBirthDate:movie.directorBirthDate,
          synopsys:movie.synopsys,
          genre:movie.genre,
          poster:movie.poster,
          note:movie.note
          })
          .then((response)=>{
            console.log(response.data);
            this.commit('editMovie',response.data)

          });
      },

      deleteMovieFromAPI(state, id){
        let url = "http://localhost:3000/api/delete/" +id
        axios.get(url).then((response) => {
          console.log(response.data);
          let movies = response.data
          this.commit('deleteMovie',id)
        });
      },
      getMovieFromOMD(state,title,year){
        let uri = "http://www.omdbapi.com/?apikey=2c5e66cf&t=" + title ;


        axios.get(uri).then((response) => {
          //console.log(response.data);
          this.commit('movieFromOMDB',response.data)
        });
      }
    },
    mutations: {


        updateMovies(state,movies){
          console.log(movies);
          state.movies = movies;
        },
        addMovie(state, movie) {
            state.movies.push(movie);
        },
        editMovie(state, movie) {
            state.movies = movie;
        },
        deleteMovie(state, id) {
            state.movies.splice(id,1);
        },
        movieFromOMDB(state,movie){
          state.data =movie;
        }
    }
})
