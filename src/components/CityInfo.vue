<template>
  <div>
    <div class="text-2xl font-bold text-gray-500 text-center border-b-2 pb-2">
      {{ cityInfo.name }}, {{ cityInfo.sys.country }}
    </div>
    <div class="text-center pt-2">
      <span class="text-4xl pl-1 font-bold text-gray-500"
        >{{ plusOrMinus(cityInfo.main.temp) }}{{ cityInfo.main.temp }} °C</span
      >
    </div>

    <div
      class="text-center pt-2 flex justify-between align-center content-center"
    >
      <img
        :src="`https://openweathermap.org/img/wn/${cityInfo.weather[0].icon}.png`"
      />
      <div class="text-1xl pl-1 pt-3 font-bold text-gray-500">
        {{ cityInfo.weather[0].description }}
      </div>
    </div>
    <div class="text-center text-gray-500 pt-3 font-bold">
      <div class="flex justify-between">
        <span>Feels like: </span>
        <span
          >{{ plusOrMinus(cityInfo.main.feels_like)
          }}{{ cityInfo.main.feels_like }}</span
        >
      </div>
      <div class="flex justify-between">
        <span>Clouds: </span><span> {{ cityInfo.clouds.all }}%</span>
      </div>
      <div class="flex justify-between">
        <span>Humidity: </span> <span>{{ cityInfo.main.humidity }}%</span>
      </div>
      <div class="flex justify-between">
        <span>Pressure: </span><span>{{ cityInfo.main.pressure }}</span>
      </div>
      <div class="flex justify-between">
        <span>Temp max: </span
        ><span
          >{{ plusOrMinus(cityInfo.main.temp_max)
          }}{{ cityInfo.main.temp_max }}</span
        >
      </div>
      <div class="flex justify-between">
        <span>Temp min: </span
        ><span
          >{{ plusOrMinus(cityInfo.main.temp_min)
          }}{{ cityInfo.main.temp_min }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityInfo",
  props:{
    cityInfo:{
      type: Object,
    }
  },
  methods:{
    plusOrMinus(val) {
      return val >= 0 ? "+" : "-";
    },
  }
};
</script>

<style>
</style>