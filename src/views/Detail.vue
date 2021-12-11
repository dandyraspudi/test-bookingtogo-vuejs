<template>
  <div class="detail">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-9 m-auto container">
        <div class="h-100">
          <h5 class="text-white text-left mt-4 pb-2">{{fetchDetailMovie.Title}}</h5>
          <div class="row">
            <div v-if="fetchDetailMovie.data.Poster != 'N/A'" class="col-md-3">
              <img class="card-img-top br-20" :src="fetchDetailMovie.data.Poster" alt="" style="width: 16rem;">
            </div>
            <div v-else class="col-md-3">
              <img class="card-img-top br-20" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Card image cap" style="height: 20rem">
            </div>
            <div class="col-md-9">
              <div class="container">
                <ul class="list-group list-unstyled">
                  <li class="text-white text-left">
                    Release Date: {{fetchDetailMovie.data.Released}}
                  </li>
                  <li class="text-white text-left">
                    Language: {{fetchDetailMovie.data.Language}}
                  </li>
                  <li class="text-white text-left">
                    Genre: {{fetchDetailMovie.data.Genre}}
                  </li>
                  <li class="text-white text-left">
                    Cast & Crew: {{fetchDetailMovie.data.Actors}}
                  </li>
                  <li class="text-white text-left">
                    Director: {{fetchDetailMovie.data.Director}}
                  </li>
                  <li class="text-white text-left">
                    Length: {{fetchDetailMovie.data.Runtime}}
                  </li>
                </ul>
              </div>
              <div class="mt-3 container">
                <h5 class="text-white font-weight-bold text-left">SINOPSIS</h5>
                <p class="content-sinopsis text-white text-left">
                  {{fetchDetailMovie.data.Plot}}
                </p>
                <div class="button-group row g-5 mt-4 container">
                  <button class="ticket b-red text-white py-2 px-4 font-weight-bold br-15 border-none">
                    Buy Ticket
                  </button>
                  <button class="trailer b-red text-white py-2 px-4 font-weight-bold br-15 border-none">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 class="text-white text-left mt-5">Now Playing</h5>
          <Card class="mt-4 mb-5 card-recomendation container"/>
        </div>
      </div>
    </div>
    <Footer class="position-relative"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Detail',
  components: {
    Navbar,
    Sidebar,
    Footer,
    Card
  },
  computed: {
    fetchDetailMovie () {
      console.log(this.$store.state.detailMovie);
      return this.$store.state.detailMovie
    }
  }
}
</script>

<style scoped>
  .card-recomendation p {
    display: none;
  }
</style>