<template>
  <swiper :options="swiperOption" ref="mySwiper" class="banner">
    <swiper-slide v-for="(slide, index) in bannerList" :key="index" :style="{background: 'url('+ slide.url +') no-repeat center'}">
      <div class="content">
        <div class="name">{{slide.title}}</div>
        <div class="des">{{slide.des}}</div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    props: {
      bannerList: null
    }
  }
</script>
<style scoped> 
  .banner {
    height: 600px
  }
  .content {
    text-align: center;
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    color: #fff;
  }
  .content .name {
    width: 500px;
    margin: 0 auto;
    font-size: 60px;
    margin-bottom: 20px;
  }
  .content .des {
    width: 500px;
    margin: 0 auto;
    font-size: 14px;
    text-align: left;
    line-height: 21px;
  }
</style>