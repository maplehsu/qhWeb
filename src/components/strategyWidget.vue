<template>
  <div class="col-md-4 sidebar-widget">
      <div class="col-2">
          <div class="col-1">
              <div class="recent-post-widget widget">
                  <div class="title-widget">
                      <div class="title">攻略推荐</div>
                  </div>
                  <div class="content-widget">
                      <div class="recent-post-list">
                          <div class="single-widget-item">
                              <div class="single-recent-post-widget">
                                  <a href="javascript:void(0)" class="thumb img-wrapper">
                                      <img src="../assets/images/blog/recent-blog-post/post-1.jpg" alt="recent post picture 1">
                                  </a>
                                  <div class="post-info">
                                      <div class="meta-info">
                                          <span>Aug 18, 2016</span>
                                      </div>
                                      <div class="single-rp-preview">Donec ullamcorper nulla non metus nisi auctor fringilla they can
                                          do.</div>
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
  name: 'widget',
  
  components: {},

  data() {
    return {
    }
  }
}

</script>
<style scoped>

</style>