<template>
  <div>
    <div class="w-full flex justify-center mb-8 text-center">
      <router-link
        to="/"
        class="
          border-2 border-gray-400
          p-1
          mt-3
          text-gray-700
          rounded-md
          hover:bg-gray-600
          hover:text-white
          hover:border-gray-600
          duration-200
          ease-in-out
          mx-auto
          w-full
          font-bold
        "
        >Go home</router-link
      >
    </div>
    <transition name="fade">
      <CityInfo :cityInfo="this.cityInfo" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "City",
  components: {
    CityInfo: () => import("@/components/CityInfo"),
  },
  data() {
    return {
      cityInfo: null,
      cityName: "",
      cityId: "",
    };
  },
  watch: {
    cityName() {
      this.page = 1;
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?cityName=${this.cityName}&id=${this.cityId}`
      );
    },
    cityId() {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?cityName=${this.cityName}&id=${this.cityId}`
      );
    },
  },
  created() {
    let data = JSON.parse(localStorage.getItem("city"));
    if (data) {
      this.cityInfo = data;
      this.cityName = this.cityInfo.name;
      this.cityId = this.cityInfo.id;
    }
    return;
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
