<template>
  <div class="mr-custom mb-5">
    <div class="fade-in">

    <!-- slider -->
    <Slider />
    <!-- end slider -->

    </div>
  </div>
</template>

<script>
  //import slider
  import Slider from '@/components/web/slider.vue'

  export default {

    //register components
    components: {
      Slider
    },

    //meta
    head() {
      return {
        title: 'IAASTANTI GLOWSCARE',
        meta: [{
            hid: 'og:title',
            name: 'og:title',
            content: 'IAASTANTI GLOWSCARE'
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'IAASTANTI GLOWSCARE'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: '/images/logo.png'
          },
          {
            hid: 'description',
            name: 'description',
            content: 'Toko Online IAASTANTI GLOWSCARE'
          },
        ]
      }
    },

  }
</script>

<style>

</style>
