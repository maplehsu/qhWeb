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
                              <a href="/loop" class="link">环线介绍</a>
                          </li>
                      </ol>
                      <div class="clearfix"></div>
                      <h2 class="captions">环线介绍</h2>
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
                                  <span class="city">丰富的环线选择,品质之选,超值享受! </span>
                                  <span class="country">更多好玩超值环线</span>
                              </span>
                              <i class="fa fa-long-arrow-right"></i>
                              <span class="arrival">
                                  <span class="city">尽在青海湖畔</span>
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
          <div class="hotel-result-main padding-top padding-bottom">
              <div class="container">
                  <div class="result-body">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="hotel-list">
                                  <div class="row">
                                      <div class="col-sm-6" v-for="item in loopData" :key="item.loopID">
                                          <div class="hotels-layout">
                                              <div class="image-wrapper">
                                                  <router-link  class="link" :to="{path: 'loopInfo', query:{lid: item.loopID}}"  v-for="img in item.cover" :key="img.name">
                                                      <img :src="img.url" class="img-responsive">
                                                  </router-link>
                                                  <div class="title-wrapper">
                                                      <router-link  class="title" :to="{path: 'loopInfo', query:{lid: item.loopID}}">{{item.title}}</router-link>
                                                      <div class="star-rating">
                                                          <span class="width-100"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="content-wrapper">
                                                  <div class="content">
                                                      <div class="title">
                                                          <div class="price">
                                                              <sup>￥</sup>
                                                              <span class="number">{{item.price}}</span>
                                                          </div>
                                                          <p class="for-price">优质环线等你来订</p>
                                                      </div>
                                                      <p class="text">{{item.notice}}</p>
                                                      <div class="group-btn-tours">
                                                          <router-link  class="left-btn" :to="{path: 'loopInfo', query:{lid: item.loopID}}">
                                                            查看详情
                                                          </router-link>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <nav class="pagination-list margin-top70">
                                <paginate
                                v-model="page"
                                :pageCount="total"
                                :clickHandler="clickCallback"
                                :prevText="'<'"
                                :nextText="'>'"
                                :containerClass="'pagination'">
                                </paginate>
                              </nav>
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
        loopData: null,
        total: 0,
        page: 1
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
        this.axios.get(this.api.getSelectLoop, {
            params: { 
              'skip': skip,
              'limit': limit 
            }
        }).then(res => {
            this.total = res.data.total         
            this.loopData = res.data.data
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