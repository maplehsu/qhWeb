<template>
  <div>
    <div class="nav">青海湖畔</div>
    <banner :bannerList="bannerList"></banner>
    <div class="box">
      <div class="header">
        <div class="title">旅游线路</div>
        <div class="des">青海最美的旅游线路</div>
      </div>
      <div class="body">
        <ul class="path clearfix">
          <li v-for="(item, index) in data" :key="index">
            <router-link :to="{path: 'info', query:{id: item._id}}" target="_blank">
              <div v-for="(img, img2) in item.cover" :key="img2">
                <img :src="img.url"> 　　 
              </div>
              <div class="info clearfix">
                <div class="pull-left title">{{item.title}}</div>
                <div class="pull-right price">￥{{item.price}}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="box">
      <div class="header">
        <div class="title">青海湖</div>
        <div class="des">青海湖又名“库库淖尔”，即蒙语“青色的海”之意。它位于青海省东北部的青海湖盆地内，既是中国最大的内陆湖泊，也是中国最大的咸水湖。</div>
      </div>
    </div>
    <div style="position: relative; height: 480px; overflow: hidden; ">
      <parallax :fixed="true">
        <img src="../assets/images/banner.jpg">
      </parallax>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import banner from '@/components/banner'
  import vFooter from '@/components/footer'
  import parallax from 'vue-parallaxy'
  export default {
    components: {
      banner,
      vFooter,
      parallax
    },
    data() {
      return {
        data: null,
        bannerList: null
      }
    },
    mounted() { 
      this.init()    
      this.banner()
    },
    methods: {
      init: function () {
        this.axios.get(this.api.getPath).then(res => {
          this.data = res.data
        })
      },
      banner: function () {
        this.axios.get(this.api.getBannerList).then(res => {
          this.bannerList = res.data
        })
      }
    }
  };
</script>
<style scoped> 
  .nav {
    position: fixed;
    padding: 0 50px;
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    letter-spacing: 2px;
  }
</style>