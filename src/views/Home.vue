<template>
  <div class="home flex flex-col justify-center">
    <SearchCity :cities="cities" />
    <template>
      <div v-if="cities.length > 0">
        <CitiesListsCards :cities="cities" />
      </div>
      <div class="text-2xl text-gray-500 text-center pb-2 pt-5" v-else>
        Add a weather card
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    SearchCity: () => import("@/components/SearchCityInput"),
    CitiesListsCards: () => import("@/components/CitiesListsCards"),
  },
  async mounted() {
    const citiesData = localStorage.getItem("cities-list");
    if (citiesData) {
      await this.updateDataToStore(JSON.parse(citiesData));
    }
  },
  methods: {
    ...mapActions({ updateDataToStore: "weather/updateToStoreFromLS" }),
  },
  computed: {
    ...mapGetters({ cities: "weather/getCities" }),
  },
};
</script>
<style lang="scss" scoped>
</style>
