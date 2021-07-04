import axios from '@/axios'
export default {
  namespaced: true,
  state: {
    cities: [],
    city: {}
  },
  actions: {
    async fetchCity({ commit }, cityName) {
      try {
        const { data } = await axios.get(`/weather?q=${cityName}&units=metric&appid=${process.env.VUE_APP_API_KEY}`)
        commit('setCity', data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCityById({ commit }, cityId) {
      try {
        commit('setCityById', cityId)
      } catch (error) {
        console.log(error);
      }
    },
    updateToStoreFromLS({ commit }, data) {
      try {
        commit('updateListCitiesLS', data)
      } catch (error) {
        console.log(error);
      }
    },

    deleteCity({ dispatch }, city) {
      try {
        const citiesData = JSON.parse(localStorage.getItem("cities-list"));
        let idx = citiesData.findIndex((i) => {
          return i.id === city.id;
        });
        citiesData.splice(idx, 1);
        localStorage.setItem("cities-list", JSON.stringify(citiesData));
        const citiesUpdateData = JSON.parse(localStorage.getItem("cities-list"));
        dispatch('updateToStoreFromLS', citiesUpdateData);

      } catch (error) {
        console.log(error);
      }
    },
    async updateCity({ dispatch }, city) {
      try {
        const { data } = await axios.get(`/weather?id=${city.id}&units=metric&appid=${process.env.VUE_APP_API_KEY}`)
        const citiesData = JSON.parse(localStorage.getItem("cities-list"));
        let idx = citiesData.findIndex((i) => {
          return i.id === data.id;
        });
        citiesData.splice(idx, 1, data);
        localStorage.setItem("cities-list", JSON.stringify(citiesData));
        const citiesUpdateData = JSON.parse(localStorage.getItem("cities-list"));
        dispatch('updateToStoreFromLS', citiesUpdateData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setCity(state, city) {
      state.cities.push(city);
    },
    setCityById(state, cityId) {
      localStorage.removeItem('city')
      let data = state.cities.filter((city) => {
        return city.id === cityId
      })
      localStorage.setItem("city", JSON.stringify(data[0]));
      state.city = data[0]
    },
    updateListCitiesLS(state, data) {
      state.cities = data
    }
  },
  getters: {
    getCities: ({ cities }) => { return cities },
    getCity: ({ city }) => { return city }
  },
}