<template>
<div class="movie" >
  <div class="movie-media">
    <div class="thumbnail">
      <img v-bind:src="movie.poster" alt="">
    </div>
    <span class="genre">{{movie.genre}}</span>
  </div>
  <div class="movie-body">
    <div class="body-info">
      <h2 class="movie-title">{{movie.title}}</h2>
      <div class="movie-year">
        {{movie.year}}
      </div>
    </div>

    <ul  v-if="movie.note == 0" class="movie-note">

      <li v-for="n in 5">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          <path d="M0 0h18v18H0z" fill="none"></path>
        </svg>
      </li>
    </ul>

    <ul  v-if="movie.note == 1" class="movie-note">
      <li v-for="n in 1">
          <svg fill="#FFAB00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
            <path d="M0 0h18v18H0z" fill="none"></path>
          </svg>
      </li>
      <li v-for="n in 4">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          <path d="M0 0h18v18H0z" fill="none"></path>
        </svg>
      </li>
    </ul>

    <ul  v-if="movie.note == 2" class="movie-note">
      <li v-for="n in 2">
          <svg fill="#FFAB00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
            <path d="M0 0h18v18H0z" fill="none"></path>
          </svg>
      </li>
      <li v-for="n in 3">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          <path d="M0 0h18v18H0z" fill="none"></path>
        </svg>
      </li>
    </ul>

    <ul  v-if="movie.note == 3" class="movie-note">
      <li v-for="n in 3">
          <svg fill="#FFAB00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
            <path d="M0 0h18v18H0z" fill="none"></path>
          </svg>
      </li>
      <li v-for="n in 2">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          <path d="M0 0h18v18H0z" fill="none"></path>
        </svg>
      </li>
    </ul>

    <ul  v-if="movie.note == 4" class="movie-note">
      <li v-for="n in 4">
          <svg fill="#FFAB00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
            <path d="M0 0h18v18H0z" fill="none"></path>
          </svg>
      </li>
      <li v-for="n in 1">
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
          <path d="M0 0h18v18H0z" fill="none"></path>
        </svg>
      </li>
    </ul>

    <ul  v-if="movie.note == 5" class="movie-note">
      <li v-for="n in 5">
          <svg fill="#FFAB00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
            <path d="M0 0h18v18H0z" fill="none"></path>
          </svg>
      </li>
    </ul>
    <div v-if="display_details" class="display_details">
      <p><b>Language:</b> {{movie.language}}</p>
      <p><b>Synopsys:</b></br> {{movie.synopsys}}</p>

      <p><b>Director:</b></p>
      <div class="director">
        <p><b>Name:</b> {{movie.directorName}}</p>
        <p><b>Nationality:</b> {{movie.directorNationality}}</p>
        <p><b>Born:</b> {{movie.directorBirthDate}}</p>
      </div>
    </div>

    <div class="button-block">
      <router-link class="button edit" :to="{ name: 'edit', params: this.movie }">Edit</router-link>
      <a class="button remove" @click="remove">Remove</a>
      <a class="button more" href="#" @click="display_details=!display_details">
        More Info
        <span class="arrow">
          <svg fill="#9C948A" height="16" viewBox="0 0 24 24" width="16" >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>

</div>
</template>

<script>
export default {
props: [ "movie" ],

data: function(){
    return {
        display_details: false
    }
},
methods: {

    remove() {
        this.$emit('remove')
    }
},
}
</script>
