<template>
  <div class="main-content">
    <section class="page-banner blog-detail">
        <div class="container">
            <div class="page-title-wrapper">
                <div class="page-title-content">
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html" class="link home">首页</a>
                        </li>
                        <li>
                            <a href="blog.html" class="link home">旅游攻略</a>
                        </li>
                        <li class="active">
                            <a href="#" class="link">旅游攻略详情</a>
                        </li>
                    </ol>
                    <div class="clearfix"></div>
                    <h2 class="captions">旅游攻略详情</h2>
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
                            <div class="blog-image" v-for="(strategyItem, index) in strategy.cover">
                                <a href="javascript:void(0)" class="link">
                                    <img :src="strategyItem.url" alt="car on a road" class="img-responsive">
                                </a>
                            </div>
                            <div class="blog-content margin-bottom70">
                                <div class="row">
                                    <div class="col-xs-1">
                                        <div class="date">
                                            <h1 class="day">{{strategy.createTime, 'DD' | moment}}</h1>
                                            <div class="month">{{strategy.createTime, 'MMMM' | moment}}</div>
                                            <div class="year">{{strategy.createTime, 'YYYY' | moment}}</div>
                                        </div>
                                    </div>
                                    <div class="col-xs-11 blog-text">
                                        <a href="javascript:void(0)" class="heading">{{strategy.title}}</a>
                                        <div class="blog-descritption">
                                            <p class="text">{{strategy.notice}}</p>
                                            <p class="text" v-html="strategy.content"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <strategy-widget></strategy-widget>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import '../../static/js/pages/blog.js'
import strategyWidget from '@/components/strategyWidget'
export default {
  components: {
    strategyWidget
  },
  data() {
    return {
        strategyId: '',
        strategy: {}
    }
  },
  mounted () {
      this.strategyId = this.$router.currentRoute.query.id
      this.init()
  },
  methods: {
      init () {
          this.axios.post(this.api.getStrategyById, {
              strategyId: this.strategyId
          }).then(res => {
              console.log(res)
              this.strategy = res.data[0]
          })
      }
  }
}

</script>
<style scoped>

</style>