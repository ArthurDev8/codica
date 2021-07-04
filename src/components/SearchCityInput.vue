<template>
  <div class="flex justify-center flex-wrap">
    <input
      class="
        text-gray-600
        border-b-2 border-green-300
        focus:border-green-500
        p-2
        focus:outline-none
        mr-2
      "
      placeholder="Search city"
      v-model="city"
      @keydown.enter="addCity"
    />
    <button
      class="
        bg-green-500
        p-2
        mt-3
        text-white
        rounded-md
        hover:bg-green-600
        duration-200
        ease-in-out
      "
      @click.enter="addCity"
    >
      Add City
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchInput",
  props: {
    cities: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    ...mapActions({ fetchCity: "weather/fetchCity" }),
    async addCity() {
      if (this.city) {
        await this.fetchCity(this.city);
        localStorage.setItem("cities-list", JSON.stringify(this.cities));
        this.city = "";
      }
      return;
    },
  },
};
</script>

<style>
</style>