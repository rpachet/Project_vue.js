<template>
    <div>
      <div class="container">

        <div  class="add_movie">
          <p><b>Edit movie</b></p>
          <p><b>Title: </b> <input type="text" v-model="movie_to_edit.title" /></p>
          <p><b>Year: </b><input type="text" v-model="movie_to_edit.year" /></p>
          <p><b>Language: </b> <input type="text" v-model="movie_to_edit.language" /></p>
          <p><b>Director: </b></p>
          <div class="director">
            <p><b>Name: </b><input type="text" v-model="movie_to_edit.directorName" /></p>
            <p><b>Nationality: </b><input type="text" v-model="movie_to_edit.directorNationality" /></p>
            <p><b>Born: </b><input type="date" v-model="movie_to_edit.directorBirthDate" /></p>
          </div>
          <p><b>Synopsys: </b> <textarea v-model="movie_to_edit.synopsys"></textarea></p>

          <div class="director">
            <p><b>Genre </b><input type="text" v-model="movie_to_edit.genre" required /></p>
            <p><b>Note </b><input type="range" v-model="movie_to_edit.note" min="0" max="5" required />{{movie_to_edit.note}}</p>
          </div>          <input class="input_poster" type="url" name="" v-model="movie_to_edit.poster">
          <a class="button addMovie" v-on:click="save">Edit</a>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        props: [ "movie" ],
        data: function(){
            return {
                movie_to_edit: this.$route.params
            }
        },
        methods: {
            edit: function(movie) {
                this.movie_to_edit = movie;
            },
            save: function() {
                console.log(this.movie_to_edit);
                this.$store.dispatch('editMovieFromApi', this.movie_to_edit)

                this.movie_to_edit = null;
                location.href = '/'
            }
        }
    }
</script>
