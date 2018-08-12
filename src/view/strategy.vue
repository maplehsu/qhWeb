<template>
    <div class="main-content">
        <section class="page-banner blog">
            <div class="container">
                <div class="page-title-wrapper">
                    <div class="page-title-content">
                        <ol class="breadcrumb">
                            <li>
                                <a href="index.html" class="link home">首页</a>
                            </li>
                            <li class="active">
                                <a href="#" class="link">旅游攻略</a>
                            </li>
                        </ol>
                        <div class="clearfix"></div>
                        <h2 class="captions">旅游攻略</h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-main padding-top padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 main-left blog-wrapper" v-for="(strategy, index) in strategyList">
                        <div class="blog-post">
                            <div class="blog-image" v-for="(strategyItem, index) in strategy.cover">
                                <a href="javascript:void(0)" class="link">
                                    <img :src="strategyItem.url" alt="a car on a road" class="img-responsive">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="col-xs-2">
                                    <div class="row">
                                        <div class="date">
                                            <h1 class="day">{{strategy.createTime, 'DD' | moment}}</h1>
                                            <div class="month">{{strategy.createTime, 'MMMM' | moment}}</div>
                                            <div class="year">{{strategy.createTime, 'YYYY' | moment}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-10 content-wrapper">
                                    <a href="javascript:void(0)" class="heading">{{strategy.title}}</a>
                                    <p>{{strategy.notice}}</p>
                                    <a :href="'/strategyInfo?id='+strategy.strategyId" class="btn btn-gray btn-fit btn-capitalize">Read More</a>
                                </div>
                            </div>
                        </div>
                        <nav class="pagination-list margin-top70">
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous" class="btn-pagination previous">
                                        <span aria-hidden="true" class="fa fa-angle-left"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn-pagination active">01</a>
                                </li>
                                <li>
                                    <a href="#" class="btn-pagination">02</a>
                                </li>
                                <li>
                                    <a href="#" class="btn-pagination">03</a>
                                </li>
                                <li>
                                    <a href="#" class="btn-pagination">...</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next" class="btn-pagination next">
                                        <span aria-hidden="true" class="fa fa-angle-right"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
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
                strategyList: []
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init () {
                this.axios.get(this.api.getStrategy).then(res => {   
                    console.log(res)
                    this.strategyList = res.data
                })
            }
        }
    }
</script>
<style scoped>
</style>