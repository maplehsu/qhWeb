<template>
  <header>
      <div class="bg-transparent header-01">
          <div class="header-topbar">
              <div class="container">
                  <ul class="topbar-left list-unstyled list-inline pull-left">
                      <li>
                          <a href="javascript:void(0)" class="country dropdown-text">
                              <span>遇到 · 青海之旅，在这个阳光盛夏，拥抱旅途上的惊喜</span>
                          </a>
                      </li>
                      <!-- <li>
                          <a href="javascript:void(0)" class="monney dropdown-text">
                              <span>USD</span>
                              <i class="topbar-icon icons-dropdown fa fa-angle-down"></i>
                          </a>
                          <ul class="dropdown-topbar list-unstyled hide">
                              <li>
                                  <a href="#" class="link">VND</a>
                              </li>
                              <li>
                                  <a href="#" class="link">Euro</a>
                              </li>
                              <li>
                                  <a href="#" class="link">JPY</a>
                              </li>
                          </ul>
                      </li> -->
                  </ul>
                  <ul class="topbar-right pull-right list-unstyled list-inline login-widget">
                      <li>
                          <a href="#" class="item">咨询热线 - 0971-8140983</a>
                      </li>
                      <!-- <li>
                          <a href="#" class="item">register</a>
                      </li> -->
                  </ul>
              </div>
          </div>
          <div class="header-main">
              <div class="container">
                  <div class="header-main-wrapper">
                      <div class="hamburger-menu">
                          <div class="hamburger-menu-wrapper">
                              <div class="icons"></div>
                          </div>
                      </div>
                      <div class="navbar-header">
                          <div class="logo">
                              <a href="" class="header-logo">
                                  <img alt="" />
                              </a>
                          </div>
                      </div>
                      <nav class="navigation">
                          <ul class="nav-links nav navbar-nav">
                              <li :class="{active:show == 'index'}">
                                  <a href="/" class="main-menu">
                                      <span class="text">首页</span>
                                  </a>
                              </li>
                              <li :class="{active:show == 'about'}">
                                  <a href="/about" class="main-menu">
                                      <span class="text">公司介绍</span>
                                  </a>
                              </li>
                              <li :class="{active:show == 'path', active:show == 'pathInfo'}">
                                  <a href="/path" class="main-menu">
                                      <span class="text">线路预定</span>
                                  </a>
                              </li>
                              <li :class="{active:show == 'strategy', active:show == 'strategyInfo'}">
                                  <a href="/strategy" class="main-menu">
                                      <span class="text">旅游攻略</span>
                                  </a>
                              </li>
                              <li :class="{active:show == 'loop', active:show == 'loopInfo'}">
                                  <a href="/loop" class="main-menu">
                                      <span class="text">环线介绍</span>
                                  </a>
                              </li>
                              <li :class="[show == 'car'? ' dropdown active' : 'dropdown', show == 'carInfo'? ' dropdown active' : 'dropdown']">
                                  <a href="javascript:void(0)" class="main-menu">
                                      <span class="text">包车服务</span>
                                      <span class="icons-dropdown">
                                          <i class="fa fa-angle-down"></i>
                                      </span>
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-1">
                                      <!-- <li>
                                          <a href="" class="link-page">司机介绍</a>
                                      </li> -->
                                      <li>
                                          <a href="/car" class="link-page">车辆介绍</a>
                                      </li>
                                      <!-- <li>
                                          <a href="" class="link-page">接送服务</a>
                                      </li> -->
                                  </ul>
                              </li>
                              <li :class="{active:show == 'contact'}">
                                  <a href="/contact" class="main-menu">
                                      <span class="text">联系我们</span>
                                  </a>
                              </li>
                          </ul>
                      </nav>
                      <div class="clearfix"></div>
                  </div>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
          show: ''
      }
    },
    props: {
    },
    created() {
        console.log(this.show = this.$route.name);
        
    },
    methods: {
    }
  }
</script>