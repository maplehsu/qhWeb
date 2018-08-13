<template>
  <div class="main-content">
      <section class="page-banner tour-view">
          <div class="container">
              <div class="page-title-wrapper">
                  <div class="page-title-content">
                      <ol class="breadcrumb">
                          <li>
                              <a href="/" class="link home">首页</a>
                          </li>
                          <li>
                              <a href="/loop" class="link">环线介绍</a>
                          </li>
                          <li class="active">
                              <a class="link">环线介绍详情</a>
                          </li>
                      </ol>
                      <div class="clearfix"></div>
                      <h2 class="captions">{{data.title}}</h2>
                      <div class="price">
                          <span class="text">只需</span>
                          <span class="number">{{data.price}}</span>
                          <sup class="unit">￥</sup>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section>
          <div class="tour-view-main padding-top padding-bottom">
              <div class="container">
                  <div class="journey-block">
                      <h3 class="title-style-3">史无前例的旅程</h3>
                      <div class="wrapper-journey">
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-interface"></i>
                              <p class="text">优质环线</p>
                          </div>
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-cup"></i>
                              <p class="text">提供特饮</p>
                          </div>
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-food-2"></i>
                              <p class="text">特色美食</p>
                          </div>
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-money-1"></i>
                              <p class="text">名胜古迹</p>
                          </div>
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-man"></i>
                              <p class="text">专业导游</p>
                          </div>
                          <div class="item feature-item">
                              <i class="icon-journey flaticon-boat"></i>
                              <p class="text">安全可靠</p>
                          </div>
                      </div>
                      <div class="overview-block clearfix">
                          <h3 class="title-style-3">环线概览</h3>
                          <div class="timeline-container">
                              <div class="timeline">
                                  <div class="timeline-block" v-for="(item, index) in data.loopList" :key="index">
                                      <div class="timeline-title">
                                          <span>第{{index + 1}}天</span>
                                      </div>
                                      <div class="timeline-content medium-margin-top">
                                          <div class="row">
                                              <div class="timeline-point">
                                                  <i class="fa fa-circle-o"></i>
                                              </div>
                                              <div class="timeline-custom-col content-col">
                                                  <div class="timeline-location-block">
                                                      <p class="location-name">{{item.title}}
                                                          <i class="fa fa-map-marker icon-marker"></i>
                                                      </p>
                                                      <p class="description">{{item.content}}</p>
                                                  </div>
                                              </div>
                                              <div class="timeline-custom-col image-col">
                                                  <div class="timeline-image-block">
                                                      <img :src="item.url" alt="">
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div v-if="!data.adData">
                    <div class="wrapper-btn margin-top70">
                        <a href="#" class="btn btn-maincolor btn-book-tour">立即预定</a>
                    </div>
                    <div class="timeline-book-block book-tour">
                        <div class="find-widget find-hotel-widget widget new-style">
                            <h4 class="title-widgets">立即预定</h4>
                            <form class="content-widget">
                                <div class="text-input small-margin-top">
                                    <div class="input-daterange">
                                        <div class="text-box-wrapper half">
                                            <label class="tb-label">出发时间</label>
                                            <div class="input-group">
                                                <input type="text" placeholder="年-月-日" class="tb-input datepicker">
                                                <i class="tb-icon fa fa-calendar input-group-addon"></i>
                                            </div>
                                        </div>
                                        <div class="text-box-wrapper half">
                                            <label class="tb-label">到达时间</label>
                                            <div class="input-group">
                                                <input type="text" placeholder="年-月-日" class="tb-input datepicker">
                                                <i class="tb-icon fa fa-calendar input-group-addon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="count adult-count text-box-wrapper">
                                        <label class="tb-label">成人</label>
                                        <div class="select-wrapper">
                                            <!--i.fa.fa-chevron-down-->
                                            <select class="form-control custom-select selectbox">
                                                <option selected="selected">1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="count child-count text-box-wrapper">
                                        <label class="tb-label">儿童</label>
                                        <div class="select-wrapper">
                                            <!--i.fa.fa-chevron-down-->
                                            <select class="form-control custom-select selectbox">
                                                <option selected="selected">0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="first-name text-box-wrapper">
                                        <label class="tb-label">您的名字</label>
                                        <div class="input-group">
                                            <input type="text" placeholder="必填" class="tb-input">
                                        </div>
                                    </div>
                                    <div class="email text-box-wrapper">
                                        <label class="tb-label">您的邮箱</label>
                                        <div class="input-group">
                                            <input type="email" placeholder="选填" class="tb-input">
                                        </div>
                                    </div>
                                    <div class="phone text-box-wrapper">
                                        <label class="tb-label">您的手机号</label>
                                        <div class="input-group">
                                            <input type="text" placeholder="必填" class="tb-input">
                                        </div>
                                    </div>
                                    <div class="note text-box-wrapper">
                                        <label class="tb-label">备注:</label>
                                        <div class="input-group">
                                            <textarea placeholder="请把您的需要，告诉我们。" rows="3" name="content" class="tb-input"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" data-hover="点击提交" class="btn btn-slide">
                                        <span class="text">立即预定</span>
                                        <span class="icons fa fa-long-arrow-right"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="container">
                  <div class="expert-block padding-top" v-if="ad">
                      <div class="row">
                          <div class="col-md-6 col-sm-12 col-xs-12">
                              <h3 class="title-style-2">与我们的线路专家交谈</h3>
                              <p>我们在这里聊聊你的下一个重要想法。</p>
                              <ul class="nav list-time">
                                  <li>
                                      <span class="time">
                                          <i class="fa fa-long-arrow-right"></i>周一至周五上午7点至下午9点支持电话咨询。</span>
                                  </li>
                                  <li>
                                      <span class="time">
                                          <i class="fa fa-long-arrow-right"></i>
                                          周末24小时提供咨询服务。 平均而言，我们在工作时间内提供6小时内的报价，在非工作时间提供第二天的报价。</span>
                                  </li>
                              </ul>
                              <p>私人导游让您可以控制旅行的所有细节 - 出发时间，住宿，额外的夜晚，额外的活动，额外的体验 - 满足您的任何旅游需求。</p>
                          </div>
                          <div class="col-md-6 col-sm-12 col-xs-12">
                              <div class="about-us-wrapper">
                                  <div class="avatar">
                                      <div class="image-wrapper">
                                          <img src="../assets/images/Customerservice.png" alt="" class="img img-responsive">
                                      </div>
                                      <div class="content-wrapper">
                                          <p class="name">{{ad.name}}</p>
                                          <p class="position">资深旅游专家</p>
                                      </div>
                                  </div>
                                  <div class="row group-list contact-list">
                                      <div class="col-sm-4 col-xs-4 col-contact">
                                          <div class="media contact-list-media">
                                              <div class="media-left">
                                                  <a href="#" class="icons">
                                                      <i class="fa fa-desktop"></i>
                                                  </a>
                                              </div>
                                              <div class="media-right">
                                                  <a href="#" class="title">微信号</a>
                                                  <p class="text">{{ad.wechat}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-sm-4 col-xs-4 col-contact">
                                          <div class="media contact-list-media">
                                              <div class="media-left">
                                                  <a href="#" class="icons">
                                                      <i class="fa fa-phone"></i>
                                                  </a>
                                              </div>
                                              <div class="media-right">
                                                  <a href="#" class="title">手机号</a>
                                                  <p class="text">{{ad.phone}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-sm-4 col-xs-4 col-contact">
                                          <div class="media contact-list-media">
                                              <div class="media-left">
                                                  <a href="#" class="icons">
                                                      <i class="fa fa-envelope-o"></i>
                                                  </a>
                                              </div>
                                              <div class="media-right">
                                                  <a href="#" class="title">邮箱</a>
                                                  <p class="text">{{ad.email}}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="special-offer new-style margin-top70">
                      <h3 class="title-style-2">更多环线</h3>
                      <div class="special-offer-list">
                          <div class="special-offer-layout" v-for="loopInfo in loopData" :key="loopInfo.loopID">
                              <div class="image-wrapper">
                                  <a  class="link" :href="'/loopInfo?lid='+ loopInfo.loopID" v-for="img in loopInfo.cover" :key="img.name">
                                      <img :src="img.url" alt="" class="img-responsive">
                                  </a>
                                  <div class="title-wrapper">
                                      <a class="title" :href="'/loopInfo?lid='+ loopInfo.loopID">
                                        {{loopInfo.title}}
                                      </a>
                                      <i class="icons flaticon-circle"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
import '../../static/js/pages/tour-view.js'
import pathInfoWidget from '@/components/pathInfoWidget'
export default {
  components: {
    pathInfoWidget
  },
  data() {
    return {
        id: null,
        data: {},
        ad: null,
        loopData: []
    }
  },
  created(){    
    this.id = this.$route.query.lid
  },
  mounted() {
    this.bannerTop()
    this.init()
    this.loop()
  },
  methods: {
    init: function () {
        this.axios.post(this.api.getLoop, {
          loopID: this.id
        }).then( res => {
          console.log(res);
          
          if(res.data[0].adData) {
            this.ad = res.data[0].adData
          }
          this.data = $.parseJSON(JSON.stringify(res.data[0]))
        })
    },
    loop: function () {
      this.axios.get(this.api.getRandomLoop).then(res => {
        this.loopData = res.data
        this.loopList()     
      })
    },
    loopList: function () {
        this.$nextTick(function () {
          $('.special-offer-list').slick({
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 4,
              speed: 2000,
              dots: false,
              responsive: [
                  {
                      breakpoint: 1025,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          autoplay: true,
                          autoplaySpeed: 5000,
                          dots: true,
                          arrows: false
                      }
                  },
                  {
                      breakpoint: 767,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          autoplay: true,
                          autoplaySpeed: 5000,
                          dots: true,
                          arrows: false
                      }
                  },
                  {
                      breakpoint: 481,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: true,
                          autoplaySpeed: 5000,
                          dots: true,
                          arrows: false
                      }
                  }
              ]
          })
        })
      }
  }
}

</script>
<style scoped>

</style>