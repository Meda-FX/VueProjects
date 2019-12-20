<template>
  <div>
    <h1 class="contact jumbotron">Movies</h1>
    
    <!-- Search form -->
    <div class="container">
    <!-- Search form -->
      <div class="row mt-0">
        <div><h6>Searching for: {{ movietitle }}</h6></div>
        <div class="col-md-6">        
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="movietitle" v-on:change="movietitle">
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-outline-primary" @click="searchTitle">Search Movies</button>
        </div>
      </div>
    </div>
    <br>
    <!-- Movies Bootstrap Card -->
    <div class="container card text-white bg-dark mb-3">
      <div class="row no-gutters">
        <div class="col-md-4 mt-4 mb-4">
          <img v-bind:src="movies.Poster" class="card-img" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{movies.Title}}</h5>
            <p class="card-text">
                 <span class="badge">Actors:</span>
              {{movies.Actors}}
            </p>
            <p class="card-text">
            <span class="badge">Genre:</span>
              {{movies.Genre}}
            </p>
            <p class="card-text">
            <span class="badge">Writer:</span>
              {{movies.Writer}}
            </p>
            <p class="card-text">
            <span class="badge">Year:</span>
              {{movies.Year}}
            </p>
             <p class="card-text">
            <span class="badge">Released:</span>
              {{movies.Released}}
            </p>
             <p class="card-text">
            <span class="badge">Plot:</span>
              {{movies.Plot}}
            </p>
              <p class="card-text">
            <span class="badge">Writer:</span>
              {{movies.Writer}}
            </p>
              <p class="card-text">
            <span class="badge">Total Seasons:</span>
              {{movies.totalSeasons}}
            </p>
            <p class="card-text">
              <small class="text-muted">Created by Meda</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// Import Axios for usage
import axios from "axios";

export default {
  name: "Movies",
  data() {
    return {
      movies: [],
      movietitle: 'Teza'
    };
  },

  methods: {
    searchTitle: function(e) {
      this.movietitle = e.target.value;
    }
  },

  mounted() {
    const url = 'http://www.omdbapi.com/?t='+ this.movietitle +'&apikey=8895567';
    // console.log('Connected Created HTTP.');
    // Using axios in order to get element from API
    axios
      .get(url)
      .then(movies => {
        // Getting the entire data from the API
        this.movies = movies.data;
      })
       .catch((e) => {
      console.error(e)
    });
  }
};
</script>

<style>
.contact {
  text-align: center;
}
</style>
