<template>
  <div class="home">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-9 m-auto container">
        <div class="row ml-3 mt-3">
          <Card class="mt-4"/>
        </div>
      </div>
    </div>
    <Footer class="position-relative"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Footer,
    Card
  }
}
</script>
