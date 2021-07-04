<template>
  <div class="modal-backdrop">
    <header
      class="
        modal-header
        bg-white
        p-4
        rounded-md
        flex flex-col
        justify-center
        max-w-lg
        m-4
      "
    >
      <CityInfo :cityInfo="cityInfo"/>

      <button
        type="button"
        class="
          bg-red-500
          p-2
          mt-3
          text-white
          rounded-md
          hover:bg-red-600
          duration-200
          ease-in-out
          max-w-md
          mx-auto
        "
        @click.stop="closeModal"
      >
        Close
      </button>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
    
  },
  components:{
    CityInfo: ()=> import('@/components/CityInfo')
  },
  props: {
    cityInfo: {
      type: Object,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
