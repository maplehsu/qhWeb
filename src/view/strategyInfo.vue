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
                            <div class="blog-image">
                                <a href="javascript:void(0)" class="link">
                                    <img src="../assets/images/blog/blog-image-1.jpg" alt="car on a road" class="img-responsive">
                                </a>
                            </div>
                            <div class="blog-content margin-bottom70">
                                <div class="row">
                                    <div class="col-xs-1">
                                        <div class="date">
                                            <h1 class="day">07</h1>
                                            <div class="month">Jan</div>
                                            <div class="year">2016</div>
                                        </div>
                                    </div>
                                    <div class="col-xs-11 blog-text">
                                        <a href="javascript:void(0)" class="heading"> Many people limit themselves what they think they can do.</a>
                                        <h5 class="meta-info">Posted By :
                                            <span>John Smith</span>
                                            <span class="sep">/</span>
                                            <span class="view-count fa-custom">56</span>
                                            <span class="comment-count fa-custom">259</span>
                                        </h5>
                                        <div class="blog-descritption">
                                            <p class="text">Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra
                                                augue. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus id elit non mi porta gravida.</p>
                                            <p class="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                                                Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta at eget metus. Vestibulum id ligula porta felis euismod
                                                semper.</p>
                                            <div class="blockquote">
                                                <div class="blockquote-title">Video courses to build new skills from start to finish.</div>
                                                <div class="blockquote-des">Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre.</div>
                                            </div>
                                            <p class="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                                                Nulla vitae elit libero, a pharetra augue consectetur purus sit amet ferment</p>
                                            <p class="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet fermentum. Pellentesque ornare sem lacinia quam venenatis
                                                vestibulum. Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet ferme</p>
                                            <div class="group-list">
                                                <ul class="blog-detail-list list-unstyled">
                                                    <li> Phasellus tincidunt, quam ac hendrerit molestie.</li>
                                                    <li> Etiam nulla lectus, dictum ut lobortis a, blandit sed nisi..</li>
                                                    <li> Integer in purus et lectus accumsan tempor ac nec nulla.</li>
                                                    <li> Vivamus varius erat justo, in vestibulum ipsum rutrum tristique..</li>
                                                </ul>
                                            </div>
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
    }
  }
}

</script>
<style scoped>

</style>