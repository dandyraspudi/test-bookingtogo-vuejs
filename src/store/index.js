import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import axiosDetail from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataMovie: [],
    detailMovie: []
  },
  mutations: {
    SET_MOVIE (state, payload) {
      state.dataMovie = payload
    },
    SET_DETAIL_MOVIE (state, payload) {
      state.detailMovie = payload
    }
  },
  actions: {
    searchMovie: async function ({commit}, dataSearch) {
      try {
        const data = await axios({
          url: dataSearch.data
        })
        console.log(data);
        commit('SET_MOVIE', data)
      } catch (error) {
        console.log(error);
      }
    },
    fetchDetailMovie: async function ({commit}, id) {
      try {
        const data = await axiosDetail({
          url: 'https://www.omdbapi.com/?apikey=271ab1b1&i=' + id
        })
        console.log(data);
        commit('SET_DETAIL_MOVIE', data)
      } catch (error) {
        console.log(error, " <<<index");
      }
    }
  }
})
