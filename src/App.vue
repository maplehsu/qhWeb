<template>
  <div id="app">
    <div class="body-wrapper">
        <mobile-nav></mobile-nav>
        <div class="wrapper-content">
            <v-header></v-header>
            <div id="wrapper-content">
                <router-view/>
                <div id="back-top">
                    <a href="#top" class="link">
                        <i class="fa fa-angle-double-up"></i>
                    </a>
                </div>
            </div>
            <v-footer></v-footer>
        </div>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header'
import mobileNav from '@/components/mobileNav'
import vFooter from '@/components/footer'
export default {
  name: 'App',
  components: {
    vHeader,
    mobileNav,
    vFooter
  }
}
</script>