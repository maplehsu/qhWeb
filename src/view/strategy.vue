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
                    <div class="col-md-8 main-left blog-wrapper">
                        <div class="blog-post" v-for="(strategy, index) in strategyList" :key="index">
                            <div class="blog-image" v-for="(strategyItem, index) in strategy.cover" :key="index">
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
                                    <a target="_blank" :href="'/strategyInfo?id='+strategy.strategyId" class="btn btn-gray btn-fit btn-capitalize">查看详情</a>
                                </div>
                            </div>
                        </div>
                        <nav class="pagination-list margin-top70">
                            <paginate
                                    v-model="currentPage"
                                    :pageCount="pageCount"
                                    :clickHandler="clickCallback"
                                    :prevText="'<'"
                                    :nextText="'>'"
                                    :containerClass="'pagination'">
                            </paginate>
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
                strategyList: [],
                currentPage: 1,
                pageCount: 0
            }
        },
        mounted () {
            this.init(0, 5)
        },
        methods: {
            init (skip, limit) {
                limit = limit || 5
                this.axios.get(this.api.getSelectStrategy, {
                    params: { 
                        'skip': skip,
                        'limit': limit
                    }
                }).then(res => {   
                    this.pageCount = Math.ceil(res.data.total / limit)  
                    this.strategyList = res.data.data
                })
            },
            clickCallback(pageNum) {
                this.init(pageNum < 1 ? 0 : pageNum - 1 , 5)
                this.currentPage = pageNum
            }
        }
    }
</script>
<style scoped>
</style>