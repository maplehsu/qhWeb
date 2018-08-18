<template>
  <div class="main-content">
        <section class="page-banner contact-page">
            <div class="container">
                <div class="page-title-wrapper">
                    <div class="page-title-content">
                        <ol class="breadcrumb">
                            <li>
                                <a href="/" class="link home">首页</a>
                            </li>
                            <li class="active">
                                <a href="#" class="link">联系我们</a>
                            </li>
                        </ol>
                        <div class="clearfix"></div>
                        <h2 class="captions">联系我们</h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact style-1 page-contact-form padding-top padding-bottom">
            <div class="container">
                <div class="wrapper-contact-form">
                    <div data-wow-delay="0.5s" class="contact-wrapper wow fadeInLeft">
                        <div class="contact-box">
                            <h5 class="title">联系我们</h5>
                            <p class="text">需要商务合作，或者有预定服务需求告诉我们</p>
                            <form class="contact-form">
                                <input type="text" v-model="name" placeholder="您的姓名" class="form-control form-input">
                                <!--label.control-label.form-label.warning-label(for="") Warning for the above !-->
                                <input type="phone" v-model="phone" placeholder="您的手机号" class="form-control form-input">
                                <!--label.control-label.form-label.warning-label(for="") Warning for the above !-->
                                <textarea v-model="message" placeholder="您的留言" class="form-control form-input"></textarea>
                                <div class="contact-submit">
                                    <button type="button" data-hover="点击提交" class="btn btn-slide" @click="add">
                                        <span class="text">告诉我们</span>
                                        <span class="icons fa fa-long-arrow-right"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div data-wow-delay="0.5s" class="wrapper-form-images wow fadeInRight">
                        <img src="../assets/images/background/bg-banner-contact-form.jpg" alt="" class="img-responsive">
                    </div>
                </div>
            </div>
        </section>
        <section class="page-contact-map">
            <div class="map-block">
                <div class="wrapper-info">
                    <div class="map-info">
                        <h3 class="title-style-2">如何找到我们</h3>
                        <p class="address">
                            <i class="fa fa-map-marker"></i>青海省西宁市南川东路24号。</p>
                        <p class="phone">
                            <i class="fa fa-phone"></i>0971-8140983</p>
                        <div class="footer-block">
                        </div>
                    </div>
                </div>
                <div id="googleMap"></div>
            </div>
        </section>
    </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        name: '',
        phone: '',
        message: ''
      }
    },
    mounted() {
      this.bannerTop()
    },
    methods: {
      add: function () {
        this.axios.post(this.api.addContact, {
          name: this.name,
          phone: this.phone,
          message: this.message
        }).then(res => {
          if(res.status == 200) {
            alert('添加成功')
          }
        })
      }
    }
  };
</script>
<style scoped>
  
</style>