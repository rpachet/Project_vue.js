<template>
    <div>
        <p><b>Search: </b><input type="text" v-model="search" /></p>
        <div class="container">
          <!--  <p>Movie number : {{this.$store.state.movies.length}}</p> -->
          <div v-if="add_movie" class="add_movie">
            <p><b>New movie</b></p>
            <p><b>Title: </b> <input type="text" v-model="movie_to_add.title"  required /> <a class="button addMovie tooltip" v-on:click="getValue"> <span class="tooltiptext">Double click to add movie params</span> Complete from OMDB</a></p>
            <p><b>Year: </b><input type="text" v-model="movie_to_add.year" required  /></p>
            <p><b>Language: </b> <input type="text" v-model="movie_to_add.language" required /></p>
            <p><b>Director: </b></p>
            <div class="director">
              <p><b>Name: </b><input type="text" v-model="movie_to_add.directorName" required /></p>
              <p><b>Nationality: </b><input type="text" v-model="movie_to_add.directorNationality" required /></p>
              <p><b>Born: </b><input type="date" v-model="movie_to_add.directorBirthDate" required /></p>
            </div>
            <p><b>Synopsys: </b> <textarea v-model="movie_to_add.synopsys"></textarea></p>

            <div class="director">
              <p><b>Genre </b><input type="text" v-model="movie_to_add.genre" required /></p>
              <p><b>Note </b><input type="range" v-model="movie_to_add.note" min="0" max="5" required />{{movie_to_add.note}}</p>
            </div>

            <p><b>Poster </b><input class="input_poster" type="url" v-model="movie_to_add.poster" required /></p>

            <a class="button addMovie" v-on:click="newmovie2">Add</a>
          </div>

            <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:edit="edit" v-on:remove="remove(index)"></movie-item>
        </div>
        <div class="add"  v-on:click="add_movie=!add_movie">
          <svg width="24px" height="24px" enable-background="new 0 0 491.86 491.86" version="1.1" viewBox="0 0 491.86 491.86" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          		<path d="m465.17 211.61h-184.92v-184.92c0-8.424-11.439-26.69-34.316-26.69s-34.316 18.267-34.316 26.69v184.92h-184.92c-8.423-1e-3 -26.69 11.438-26.69 34.314s18.267 34.316 26.69 34.316h184.92v184.92c0 8.422 11.438 26.69 34.316 26.69s34.316-18.268 34.316-26.69v-184.92h184.92c8.422 0 26.69-11.438 26.69-34.316s-18.27-34.315-26.693-34.315z" fill="#fff"/>
          </svg>

        </div>
    </div>
</template>

    <script>

    import axios from 'axios';

    export default {

        data() {

            return {
                movie_to_add: {},
                movie_to_edit: null,
                search: "",
                add_movie: false,
                data: {}
          }
        },

        // Get List of movie when page load
        created: function() {
          this.$store.dispatch('getMoviesFromAPI');
        },
        watch:{
          // Updtate field
          data: function(){
            this.movie_to_add.title = this.data.Title;
            this.movie_to_add.year = this.data.Year;
            this.movie_to_add.language = this.data.Language;
            this.movie_to_add.year = this.data.Year;
            this.movie_to_add.directorName = this.data.Director;
            this.movie_to_add.genre = this.data.Genre;
            this.movie_to_add.poster = this.data.Poster;
            this.movie_to_add.synopsys = this.data.Plot;

          }
        },
        methods: {

            newmovie1: function() {
                this.movies.push({title:"New movie"})

            },

            // Add Movie
            newmovie2: function() {
                // this.movies.push(this.movie_to_add)
                this.$store.dispatch('addMovieFromApi', this.movie_to_add)

                this.movie_to_add = {}
            },

            // Delete Movie
            remove: function(index) {
                // this.$store.commit('deleteMovie', index)
                this.data = this.$store.dispatch('deleteMovieFromAPI', index)

            },

            // Get Value from OmdbApi
            getValue: function(){
              let title = this.movie_to_add.title;
              this.$store.dispatch("getMovieFromOMD",title)
              this.data = this.$store.state.data;
              console.log(this.data);
            },
        },

        computed: {

            firstletter: function() {
                return this.message[0]
            },
            movies_search: function() {
                return this.$store.state.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
            },

        },

    }
    </script>

    <style>
    #msg {
      color: red;
    }
    </style>
