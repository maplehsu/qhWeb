<template>
  <div class="main-content">
      <section class="page-banner hotel-result">
          <div class="container">
              <div class="page-title-wrapper">
                  <div class="page-title-content">
                      <ol class="breadcrumb">
                          <li>
                              <a href="/" class="link home">首页</a>
                          </li>
                          <li class="active">
                              <a href="/loop" class="link">车辆介绍</a>
                          </li>
                      </ol>
                      <div class="clearfix"></div>
                      <h2 class="captions">车辆介绍</h2>
                  </div>
              </div>
          </div>
      </section>
      <div class="page-main">
          <div class="trip-info">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="label-route-widget">
                              <span class="departure">
                                  <span class="city">对于希望在青海自驾旅行的游客而言 </span>
                                  <span class="country">租车无疑倍受青睐</span>
                              </span>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="label-time-widget">
                              <span class="departure">
                                  <span class="date">当前时间</span>
                                  <span class="hour">{{dateTime}}</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="clearfix"></div>
          <div class="car-rent-result-main padding-top padding-bottom">
            <div class="container">
              <div class="result-body">
                <div class="row">
                  <div class="col-md-12">
                      <div class="car-rent-list">
                          <div class="row">
                              <div class="col-sm-12" v-for="item in carData" :key="item.carID">
                                  <div class="car-rent-layout">
                                      <div class="image-wrapper">
                                          <a href="tour-view.html" class="link" v-for="(img, index) in item.cover" :key="index">
                                              <img v-if="index == 0" :src="img.url" alt="" class="img-responsive">
                                          </a>
                                      </div>
                                      <div class="content-wrapper">
                                          <a href="#" class="title">{{item.title}}</a>
                                          <div class="price">
                                              <sup>$</sup>
                                              <span class="number">{{item.price}}</span>
                                              <p class="for-price">每天</p>
                                          </div>
                                          <div class="sub-title">车况：优质</div>
                                          <p class="text">{{item.notice}}</p>
                                          <router-link  class="btn btn-gray" :to="{path: 'carInfo', query:{cid: item.carID}}">查看详情</router-link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        dateTime: null,
        carData: null
      }
    },
    mounted() {
        this.bannerTop()
        this.date()
        this.init(0, 6)
    },
    methods: {
      date: function () {
        setInterval(() => {
          this.dateTime = this.moment().format('A HH:mm:ss')
        }, 1000)
      },
      init: function (skip, limit) {     
        this.axios.get(this.api.getCarList).then(res => {            
            this.carData = res.data
        })
      },
      clickCallback: function (pageNum) {
        this.init(pageNum == 1? 0 :pageNum , 9)
        this.page = pageNum
      }
    },
    beforeDestroy () {
      if(this.dateTime) {
        clearInterval(this.dateTime)
      }
    }
  };
</script>
<style scoped> 

</style>