<template>
  <div class="col-md-4 sidebar-widget">
      <div class="col-2">
          <div class="col-1">
              <div class="recent-post-widget widget">
                  <div class="title-widget">
                      <div class="title">线路推荐</div>
                  </div>
                  <div class="content-widget">
                      <div class="recent-post-list">
                          <div class="single-widget-item" v-for="item in data" :key="item.pathID">
                              <div class="single-recent-post-widget">
                                  <a :href="'/pathInfo?pid=' + item._id" class="thumb img-wrapper" v-for="img in item.cover" :key="img.name">
                                      <img :src="img.url" alt="recent post picture 1">
                                  </a>
                                  <div class="post-info">
                                      <div class="meta-info">
                                          <span>{{item.creatTime}}</span>
                                      </div>
                                      <div class="single-rp-preview"><a :href="'/pathInfo?pid=' + item._id">{{item.notice}}</a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-2">
          <div class="col-1">
              <div class="archives-widget widget">
                  <div class="title-widget">
                      <div class="title">日历</div>
                  </div>
                  <div class="content-widget">
                      <div class="archive-datepicker"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
        data: null
    }
  },
  mounted() {
    this.datePick()
    this.init()
  },
  methods: {
      datePick: function () {
        $('.archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            todayHighlight : true,
            language: 'zh-CN',
            maxViewMode: 0
        });
      },
      init: function () {
        this.axios.get(this.api.getRandomPath).then(res => {
            this.data = res.data
        })
      }
  }
}

</script>
<style scoped>

</style>