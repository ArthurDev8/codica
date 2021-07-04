<template>
  <div class="flex flex-row justify-center flex-wrap w-full">
    <div
      v-for="city in cities"
      :key="city.id"
      class="
        border-2 border-gray-300
        py-2
        px-3
        m-4
        w-72
        hover:bg-gray-100
        rounded-md
      "
    >
      <div @click="showModal(city)">
        <div
          class="text-2xl font-bold text-gray-500 text-center border-b-2 pb-2"
        >
          {{ city.name }}, {{ city.sys.country }}
        </div>
        <div class="text-center pt-2">
          <span class="text-4xl pl-1 font-bold text-gray-500"
            >{{ city.main.temp >= 0 ? "+" : "-" }}{{ city.main.temp }} °C</span
          >
        </div>
        <div class="flex justify-end pt-3 py-2">
          <button
            @click.stop="updateCityData(city)"
            class="
              border-2 border-blue-400
              p-1
              mt-3
              text-blue-400
              rounded-md
              hover:bg-blue-600
              hover:text-white
              hover:border-blue-600
              duration-200
              ease-in-out
              max-w-md
              mx-auto
            "
          >
            Update
          </button>
          <button
            @click.stop="deleteOneCity(city)"
            class="
              border-2 border-red-400
              p-1
              mt-3
              text-red-400
              rounded-md
              hover:bg-red-600
              hover:text-white
              hover:border-red-600
              duration-200
              ease-in-out
              max-w-md
              mx-auto
            "
          >
            Delete
          </button>
        </div>
        <div class="text-center">
          <button
            @click.stop="goOver(city.id)"
            class="
              border-2 border-green-400
              p-1
              my-2
              text-green-400
              rounded-md
              hover:bg-green-600
              hover:text-white
              hover:border-green-600
              duration-200
              ease-in-out
              mx-auto
              w-4/6
            "
          >
            Go over
          </button>
        </div>
      </div>

      <transition name="fade">
        <ModalInfo
          v-if="isShowModal"
          :cityInfo="modalCityProps"
          @close="closeModal"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CitiesListsCards",
  props: {
    cities: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ModalInfo: () => import("@/components/ModalInfo"),
  },
  data() {
    return {
      isShowModal: false,
      modalCityProps: null,
    };
  },
  methods: {
    ...mapActions({
      updateCity: "weather/updateCity",
      deleteCity: "weather/deleteCity",
      fetchCity: "weather/fetchCityById",
    }),
    showModal(city) {
      this.modalCityProps = city;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    deleteOneCity(city) {
      this.deleteCity(city);
    },
    async updateCityData(city) {
      await this.updateCity(city);
    },
    async goOver(id) {
      await this.fetchCity(id);
      this.$router.push("/city");
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>