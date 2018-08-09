<template>
    <div class="main-content">
        <section class="page-banner tour-result">
            <div class="container">
                <div class="page-title-wrapper">
                    <div class="page-title-content">
                        <ol class="breadcrumb">
                            <li>
                                <a href="/" class="link home">首页</a>
                            </li>
                            <li class="active">
                                <a href="/path" class="link">线路预订</a>
                            </li>
                        </ol>
                        <div class="clearfix"></div>
                        <h2 class="captions">线路预订</h2>
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
                                    <span class="city">丰富的线路选择,品质之选,超值享受! </span>
                                    <span class="country">更多特惠旅游线路</span>
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
            <div class="tour-result-main padding-top padding-bottom">
                <div class="container">
                    <div class="list-continents">
                        <div class="list-continent-wrapper">
                            <a href="#" class="continent">
                                <i class="icons fa fa-map-marker"></i>
                                <span class="text">青海湖</span>
                            </a>
                        </div>
                        <div class="list-continent-wrapper">
                            <a href="#" class="continent">
                                <i class="icons fa fa-map-marker"></i>
                                <span class="text">塔尔寺</span>
                            </a>
                        </div>
                        <div class="list-continent-wrapper">
                            <a href="#" class="continent">
                                <i class="icons fa fa-map-marker"></i>
                                <span class="text">茶卡盐湖</span>
                            </a>
                        </div>
                        <div class="list-continent-wrapper">
                            <a href="#" class="continent">
                                <i class="icons fa fa-map-marker"></i>
                                <span class="text">门源油菜花海</span>
                            </a>
                        </div>
                        <div class="list-continent-wrapper">
                            <a href="#" class="continent">
                                <i class="icons fa fa-map-marker"></i>
                                <span class="text">东关清真大寺</span>
                            </a>
                        </div>
                    </div>
                    <div class="result-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="tours-list">
                                    <div class="row">
                                        <div class="col-sm-4" v-for="item in pathData" :key="item.pathID">
                                          <div class="tours-layout">
                                              <div class="image-wrapper">
                                                  <a href="" class="link" v-for="img in item.cover" :key="img.name">
                                                      <img :src="img.url" alt="" class="img-responsive">
                                                  </a>
                                                  <div class="title-wrapper">
                                                      <a href="" class="title">{{item.title}}</a>
                                                  </div>
                                              </div>
                                              <div class="content-wrapper">
                                                  <div class="content">
                                                      <div class="title">
                                                          <div class="price">
                                                              <sup>￥</sup>
                                                              <span class="number">{{item.price}}</span>
                                                          </div>
                                                          <p class="for-price">{{item.creatTime, 'YYYY-MM-DD'| moment}}</p>
                                                      </div>
                                                      <p class="text">{{item.notice}}</p>
                                                      <div class="group-btn-tours">
                                                          <router-link :to="{path: 'pathInfo', query:{id: item.pathID}}" >
                                                            <button class="btn btn-gray">线路详情</button>
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
        pathData: null,
        dateTime: null,
        total: 0,
        page: 1
      }
    },
    mounted() {
        this.init(0, 9)
        this.date()
    },
    methods: {
      init: function (skip, limit) {     
        this.axios.get(this.api.getSelectPath, {
            params: { 
              'skip': skip,
              'limit': limit 
            }
        }).then(res => {
            this.total = res.data.total         
            this.pathData = res.data.data
        })
      },
      date: function () {
        setInterval(() => {
          this.dateTime = this.moment().format('HH:mm:ss')
        }, 1000)
      },
      clickCallback: function (pageNum) {
        this.init(pageNum, 9)
        this.page =  pageNum
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