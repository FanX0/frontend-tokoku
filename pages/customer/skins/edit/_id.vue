<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"><i class="fa fa-folder"></i> EDIT CATEGORY</span>
              </div>
              <div class="card-body">

                <form @submit.prevent="updateSkin">

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Jenis Kulit</label>
                        <input type="text" v-model="skin.jenis_kulit" placeholder="Masukkan Jenis Kulit" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Masalah Kulit</label>
                        <input type="text" v-model="skin.masalah_kulit" placeholder="Masukkan Masalah Kulit" class="form-control">
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i> SAVE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i> RESET</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {

     //middleware
     middleware: 'isCustomer',

    //layout
    layout: 'default',

    //meta
    head() {
      return {
        title: 'Edit Skin - Customer',
      }
    },

    data() {
      return {
        //state skin
        skin: {
        'jenis_kulit': '',
          'masalah_kulit': ''
        },
        //state validation
        validation: []
      }
    },

    //hook "asyncData"
    async asyncData({ store, route }) {
        await store.dispatch('customer/skin/getDetailProduct', route.params.id)
    },


    //mounted
    mounted() {
        this.skin.name = this.$store.state.customer.skin.skin.name
    },

    //method
    methods: {

      //method "updateSkin"
      async updateSkin() {

        //define formData
        let formData = new FormData();

        formData.append('jenis_kulit', this.skin.jenis_kulit)
        formData.append('masalah_kulit', this.skin.masalah_kulit)
        formData.append("_method", "PATCH")

        //sending data to action "updateSkin" vuex
        await this.$store.dispatch('customer/skin/updateSkin', {
            skinId: this.$route.params.id,
            payload: formData
        })

          //success
          .then(() => {

            //sweet alert
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Diupdate!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })

            //redirect route "admin-categories"
            this.$router.push({
              name: 'customer-skins'
            })

          })

          //error
          .catch(error => {

            //assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style>

</style>
