<template>
  <div class="main-content">
      <section class="page-banner car-detail">
          <div class="container">
              <div class="page-title-wrapper">
                  <div class="page-title-content">
                      <ol class="breadcrumb">
                          <li>
                              <a href="/" class="link home">首页</a>
                          </li>
                          <li>
                              <a href="/car" class="link">车辆介绍</a>
                          </li>
                          <li class="active">
                              <a class="link">车辆介绍详情</a>
                          </li>
                      </ol>
                      <div class="clearfix"></div>
                      <h2 class="captions">车辆介绍详情</h2>
                  </div>
              </div>
          </div>
      </section>
      <div class="page-main">
          <div class="car-detail-main padding-top padding-bottom">
              <div class="container">
                  <div class="wrapper-car-detail">
                      <div class="content-result">
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="warpper-slider-detail">
                                      <div class="wrapper-cd-detail">
                                          <div class="item-cd" v-for="(img, index) in data.cover" :key="index">
                                              <a href="#">
                                                  <img :src="img.url" alt="" class="img-responsive img">
                                              </a>
                                          </div>
                                      </div>
                                      <div class="wrapper-cd-detail-thumnail">
                                          <div class="thumnail-item" v-for="(img, index) in data.cover" :key="index">
                                               <img :src="img.url" alt="" class="img-responsive img">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="car-rent-layout">
                                      <div class="content-wrapper">
                                          <a href="#" class="title">{{data.title}}</a>
                                          <div class="price">
                                              <sup>$</sup>
                                              <span class="number">{{data.price}}</span>
                                              <p class="for-price">每天</p>
                                          </div>
                                          <p class="text">{{data.notice}}</p>
                                          <div class="wrapper-car-result">
                                              <div class="wrapper-img-caption">
                                                  <ul class="car-wigdet list-inline list-unstyled">
                                                      <li class="wrapper-car-item">
                                                          <a href="#" class="car-item">
                                                              <i class="car-icon fa fa-cogs"></i>                                                              
                                                              <span v-if="data.caozuoValue == 'sd'">手动挡</span>
                                                              <span v-else>自动挡</span>
                                                          </a>
                                                      </li>
                                                      <li class="wrapper-car-item">
                                                          <a href="#" class="car-item">
                                                              <i class="car-icon fa fa-clock-o"></i>
                                                              <span>市区价格：（100公里的油钱和服务费，超出一公里5元，一小时50元）。</span>
                                                          </a>
                                                      </li>
                                                      <li class="wrapper-car-item">
                                                          <a href="#" class="car-item">
                                                              <i class="car-icon fa fa-user"></i>
                                                              <span>{{data.zuoweiValue}}人座位</span>
                                                          </a>
                                                      </li>
                                                  </ul>
                                                  <ul class="car-wigdet list-inline list-unstyled">
                                                      <li class="wrapper-car-item">
                                                          <a href="#" class="car-item">
                                                              <i class="car-icon fa fa-crosshairs"></i>
                                                              <span>空调</span>
                                                          </a>
                                                      </li>
                                                  </ul>
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
        id: null,
        data: {}
    }
  },
  created(){    
    this.id = this.$route.query.cid    
  },
  mounted() {
    this.bannerTop()
    this.init()
  },
  methods: {
    init: function () {
        this.axios.post(this.api.getCar, {
          carID: this.id
        }).then( res => {          
          this.data = $.parseJSON(JSON.stringify(res.data[0]))
          this.carList()
          console.log(this.data);
        })
    },
    carList: function () {
      this.$nextTick(function () {
        $('.wrapper-cd-detail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.wrapper-cd-detail-thumnail'
        });
        $('.wrapper-cd-detail-thumnail').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.wrapper-cd-detail',
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                }
            ]
        });
      })
    }
  }
}
</script>

<style scoped>

</style>