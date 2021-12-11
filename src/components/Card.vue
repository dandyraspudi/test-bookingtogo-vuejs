<template>
  <div class="card-component row g-2">
    <div v-for="(dataMovieItem, i) in dataMovie.data.Search" :key="i">
      <div v-if="dataMovieItem.Poster !== 'N/A'" class="" style="width: 16rem;">
        <a @click="detailMovie(dataMovieItem.imdbID)">
          <img class="card-img-top br-20" :src="dataMovieItem.Poster" alt="Card image cap" style="height: 20rem">
          <div class="card-body">
            <p class="card-text text-white">{{dataMovieItem.Title}}</p>
          </div>
        </a>
      </div>
      <div v-else-if="dataMovieItem.Poster === 'N/A'" class="" style="width: 16rem;">
        <a @click="detailMovie(dataMovieItem.imdbID)">
          <img class="card-img-top br-20" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Card image cap" style="height: 20rem">
          <div class="card-body">
            <p class="card-text text-white">{{dataMovieItem.Title}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    detailMovie (id) {
      this.$store.dispatch('fetchDetailMovie', id)
      this.$router.push({name: 'Detail'})
    }
  },
  computed: {
    dataMovie () {
      return this.$store.state.dataMovie
    }
  }

}
</script>

<style>

</style>