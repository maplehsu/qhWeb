<template>
  <div>
    <div  v-for="(item, index) in data" :key="index">
      <div class="banner-info">
        <i class="shade"></i>
        <div class="group">
          <div class="title">{{item.title}}</div>
          <div class="des">{{item.notice}}</div>
        </div>
      </div>
      <div class="content" v-html="item.content">
      </div>
      <div class="rq">
        <img src="../assets/images/qr.jpg" alt="">
        <p>扫描二维码关注公众号，在线支付预定线路</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import vFooter from '@/components/footer'
  export default {
    components: {
      vFooter
    },
    data() {
      return {
        data: null,
        id: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init: function () {
        this.id = this.$route.query.id
        this.axios.post(this.api.getInfo, {
          _id: this.id
        }).then( res => {
          this.data = res.data
        }) 
      }
    }
  };
</script>
<style scoped>
  
</style>