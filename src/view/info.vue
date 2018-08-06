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
  .banner-info {
    overflow: hidden;
    position: relative;
    padding: 80px 0 80px 0;
    background: url('../assets/images/banner.jpg') no-repeat center;
  }

  .banner-info .shade {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .banner-info img {
    width: 100%;
  }

  .group .title {
    font-size: 40px;
  }

  .group .des {
    text-align: left;
    line-height: 24px;
    margin-top: 20px;
  }

  .banner-info .group {
      color: #fff;
      border: 2px solid #fff;
      width: 580px;
      margin: 0 auto;
      padding: 80px 30px 65px;
      position: relative;
      z-index: 9;
      text-align: center;
  }

  .content {
    width: 960px;
    margin: 20px auto;
    text-align: center;
  }

  .rq {
    text-align: center;
  }

  .rq img {
    width: 220px;
  }
</style>