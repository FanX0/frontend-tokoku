<template>
  <div class="container-fluid mt-custom">
    <div class="fade-in">
      <div class="row">
<p>aaaa</p>


      </div>

        <!-- pagination -->
        <div class="row justify-content-center mt-4 mb-4">
          <div class="text-center">
              <b-pagination align="center" :value="products.current_page" :total-rows="products.total"
                  :per-page="products.per_page" @change="changePage" aria-controls="my-table"></b-pagination>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

    //meta
    head() {
      return {
        title: 'IAASTANTI GLOWSCARE',
        meta: [{
            hid: 'og:title',
            name: 'og:title',
            content: 'Semua Produk - IAASTANTI GLOWSCARE'
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'Semua Produk -IAASTANTI GLOWSCARE'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: '/images/logo.png'
          },
          {
            hid: 'description',
            name: 'description',
            content: 'Semua Produk dari IAASTANTI GLOWSCARE'
          },
        ]
      }
    },

    //hook "asyncData"
    async asyncData({ store }) {
        await store.dispatch('web/product/getProductsData')
    },

    //computed
    computed: {

        //products
        products() {
            return this.$store.state.web.product.products
        },
    },
     //method
     methods: {

    //method "changePage"
    changePage(page) {

      //commit to mutation "SET_PAGE"
      this.$store.commit('web/product/SET_PAGE', page)

      //dispatch on action "getProductsData"
      this.$store.dispatch('web/product/getProductsData')
    },
  }
}
</script>

<style>

</style>
