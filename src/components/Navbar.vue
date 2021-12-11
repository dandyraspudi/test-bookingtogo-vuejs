<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg b-red">
      <a class="navbar-brand" @click="$router.push('/')">
        <img src="../assets/logo.svg" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100">
          <li class="nav-item active ml-md-5 ml-0 mr-auto">
            <form @submit.prevent="search" class="form-inline w-500">
              <input v-model="dataSearch" class="form-control mr-sm-2 br-20 w-100 p-2" type="search" placeholder="Search Title / Theatre Here" aria-label="Search">
            </form>
          </li>
          <li class="nav-item active">
            <img class="mr-md-3" src="../assets/Mask-Group.svg" alt="">
            <img src="../assets/Logo_Dolby_Atmos.svg" alt="">
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      dataSearch: ''
    }
  },
  methods: {
    search () {
      const dataSearch = {
        data: this.dataSearch
      }
      this.$store.dispatch('searchMovie', dataSearch)
    }
  }
}
</script>

<style>

</style>