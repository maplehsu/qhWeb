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
                            <a href="/path" class="link home">线路预定</a>
                        </li>
                        <li class="active">
                            <a class="link">线路预定详情</a>
                        </li>
                    </ol>
                    <div class="clearfix"></div>
                    <h2 class="captions">线路预定详情</h2>
                </div>
            </div>
        </div>
    </section>
    <section class="page-main padding-top padding-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-8 main-left">
                    <div class="item-blog-detail">
                        <div class="blog-post blog-text">
                            <div class="blog-image">
                                <a href="javascript:void(0)" class="link">
                                    <img :src="banner" alt="car on a road" class="img-responsive">
                                </a>
                            </div>
                            <div class="blog-content margin-bottom70">
                                <div class="row">
                                    <div class="col-xs-1">
                                        <div class="date">
                                            <h1 class="day">{{day}}</h1>
                                            <div class="month">{{month}}</div>
                                            <div class="year">{{yea}}</div>
                                        </div>
                                    </div>
                                    <div class="col-xs-11 blog-text">
                                        <a href="javascript:void(0)" class="heading">{{data.title}}</a>
                                        <div class="blog-descritption" v-html="data.content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pathInfo-widget></pathInfo-widget>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import pathInfoWidget from '@/components/pathInfoWidget'
export default {
  components: {
    pathInfoWidget
  },
  data() {
    return {
        id: null,
        data: {},
        day: 0,
        month: '',
        yea: '',
        banner: ''
    }
  },
  created(){
    this.id = this.$route.query.pid
  },
  mounted() {
    this.bannerTop()
    this.init()
  },
  methods: {
    init: function () {
        this.axios.post(this.api.getInfo, {
          _id: this.id
        }).then( res => {
          this.data = $.parseJSON(JSON.stringify(res.data[0]))
          this.day = this.moment(this.data.creatTime).format('DD')
          this.yea = this.moment(this.data.creatTime).format('YYYY')
          this.month = this.moment(this.data.creatTime).format('MMMM')
          this.banner = this.data.cover[0].url
        })
    }
  }
}

</script>
<style scoped>

</style>