<template>
    <div class="main-content">
        <v-banner></v-banner>
        <section class="about-us layout-1 padding-top padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="group-title">
                            <div class="sub-title">
                                <p class="text">青海之行</p>
                                <i class="icons flaticon-people"></i>
                            </div>
                            <h2 class="main-title">为什么选择我们</h2>
                        </div>
                        <div class="about-us-wrapper">
                            <p class="text">在我们这里可以获取最好玩的旅游资讯，分享旅行。资深的极客，定制好玩又好看的旅游线路。如果你钟情于自驾游，我们提供优质的自驾线路，如果你需要包车业务，我们有风趣专业的司机随时为您待命。</p>
                            <div class="group-list">
                                <ul class="list-unstyled about-us-list">
                                    <li>
                                        <p class="text">全天候包车业务</p>
                                    </li>
                                    <li>
                                        <p class="text">提供优质的民宿信息</p>
                                    </li>
                                    <li>
                                        <p class="text">接车服务</p>
                                    </li>
                                    <li>
                                        <p class="text">最新款的车型</p>
                                    </li>
                                </ul>
                                <ul class="list-unstyled about-us-list">
                                    <li>
                                        <p class="text">分享特色美食</p>
                                    </li>
                                    <li>
                                        <p class="text">定期优惠活动</p>
                                    </li>
                                    <li>
                                        <p class="text">幽默专业的导游</p>
                                    </li>
                                    <li>
                                        <p class="text">精挑细选的酒店</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="group-button">
                                <a href="" class="btn btn-maincolor">查看详情</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div data-wow-delay="0.5s" class="about-us-image wow zoomIn">
                            <img src="../assets/images/homepage/about-us-1.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="tours padding-top padding-bottom">
            <div class="container">
                <div class="tours-wrapper">
                    <div class="group-title">
                        <div class="sub-title">
                            <p class="text">推荐最优质的线路</p>
                            <i class="icons flaticon-people"></i>
                        </div>
                        <h2 class="main-title">线路预定</h2>
                    </div>
                    <div class="tours-content margin-top70">
                        <div class="tours-list">
                            <div class="tours-layout" v-for="item in pathData" :key="item.pathID">
                                <div class="image-wrapper">
                                    <a href="" class="link" v-for="img in item.cover" :key="img.name">
                                        <img :src="img.url" alt="" class="img-responsive">
                                    </a>
                                    <div class="title-wrapper">
                                        <a href="" class="title">{{item.title}}</a>
                                    </div>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <div class="title">
                                            <div class="price">
                                                <sup>￥</sup>
                                                <span class="number">{{item.price}}</span>
                                            </div>
                                            <p class="for-price">{{item.creatTime, 'YYYY-MM-DD'| moment}}</p>
                                        </div>
                                        <p class="text">{{item.notice}}</p>
                                        <div class="group-btn-tours">
                                            <a href="" class="btn btn-gray">线路详情</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" class="btn btn-transparent margin-top70">更多线路</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="videos layout-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="video-wrapper padding-top padding-bottom">
                            <h5 class="sub-title">这是一个
                                <strong>美丽的</strong>地方</h5>
                            <h2 class="title">青海湖</h2>
                            <div class="text">青海湖又名“库库淖尔”，即蒙语“青色的海”之意。它位于青海省东北部的青海湖盆地内，既是中国最大的内陆湖泊，也是中国最大的咸水湖。</div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="video-thumbnail">
                            <div class="video-bg">
                                <img src="../assets/images/homepage/video-bg.jpg" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hotels padding-top padding-bottom">
            <div class="container">
                <div class="hotels-wrapper">
                    <div class="group-title">
                        <div class="sub-title">
                            <p class="text">青海最好玩的攻略</p>
                            <i class="icons flaticon-people"></i>
                        </div>
                        <h2 class="main-title">旅游攻略</h2>
                    </div>
                    <div class="hotels-content margin-top70">
                        <div class="row hotels-list">
                            <div class="col-sm-6">
                                <div class="hotels-layout">
                                    <div class="image-wrapper">
                                        <a href="" class="link">
                                            <img src="../assets/images/hotels/hotel-1.jpg" alt="" class="img-responsive">
                                        </a>
                                        <div class="title-wrapper">
                                            <a href="" class="title">sarina hotel</a>
                                            <div title="Rated 5.00 out of 5" class="star-rating">
                                                <span class="width-80">
                                                    <strong class="rating">5.00</strong> out of 5</span>
                                            </div>
                                        </div>
                                        <div class="label-sale">
                                            <p class="text">sale</p>
                                            <p class="number">35%</p>
                                        </div>
                                    </div>
                                    <div class="content-wrapper">
                                        <div class="content">
                                            <div class="title">
                                                <div class="price">
                                                    <sup>$</sup>
                                                    <span class="number">30</span>
                                                </div>
                                                <p class="for-price">for person per night</p>
                                            </div>
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus lorem ipsum dolor consectete.</p>
                                            <div class="group-btn-tours">
                                                <a href="" class="left-btn">book now</a>
                                            </div>
                                        </div>
                                        <ul class="list-info list-unstyled">
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-eye"></i>
                                                    <span class="number">234</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-heart"></i>
                                                    <span class="number">156</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-comment"></i>
                                                    <span class="number">19</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" class="link">
                                                    <i class="icons fa fa-share-alt"></i>
                                                </a>
                                                <ul class="share-social-list">
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons fa fa-map-marker"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="hotels-layout">
                                    <div class="image-wrapper">
                                        <a href="" class="link">
                                            <img src="../assets/images/hotels/hotel-2.jpg" alt="" class="img-responsive">
                                        </a>
                                        <div class="title-wrapper">
                                            <a href="" class="title">sarina hotel</a>
                                            <div title="Rated 5.00 out of 5" class="star-rating">
                                                <span class="width-100">
                                                    <strong class="rating">5.00</strong> out of 5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-wrapper">
                                        <div class="content">
                                            <div class="title">
                                                <div class="price">
                                                    <sup>$</sup>
                                                    <span class="number">30</span>
                                                </div>
                                                <p class="for-price">for person per night</p>
                                            </div>
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus lorem ipsum dolor consectete.</p>
                                            <div class="group-btn-tours">
                                                <a href="" class="left-btn">book now</a>
                                            </div>
                                        </div>
                                        <ul class="list-info list-unstyled">
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-eye"></i>
                                                    <span class="number">234</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-heart"></i>
                                                    <span class="number">156</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-comment"></i>
                                                    <span class="number">19</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" class="link">
                                                    <i class="icons fa fa-share-alt"></i>
                                                </a>
                                                <ul class="share-social-list">
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons fa fa-map-marker"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="hotels-layout">
                                    <div class="image-wrapper">
                                        <a href="" class="link">
                                            <img src="../assets/images/hotels/hotel-3.jpg" alt="" class="img-responsive">
                                        </a>
                                        <div class="title-wrapper">
                                            <a href="" class="title">sarina hotel</a>
                                            <div title="Rated 5.00 out of 5" class="star-rating">
                                                <span class="width-90">
                                                    <strong class="rating">5.00</strong> out of 5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-wrapper">
                                        <div class="content">
                                            <div class="title">
                                                <div class="price">
                                                    <sup>$</sup>
                                                    <span class="number">30</span>
                                                </div>
                                                <p class="for-price">for person per night</p>
                                            </div>
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus lorem ipsum dolor consectete.</p>
                                            <div class="group-btn-tours">
                                                <a href="" class="left-btn">book now</a>
                                            </div>
                                        </div>
                                        <ul class="list-info list-unstyled">
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-eye"></i>
                                                    <span class="number">234</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-heart"></i>
                                                    <span class="number">156</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-comment"></i>
                                                    <span class="number">19</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" class="link">
                                                    <i class="icons fa fa-share-alt"></i>
                                                </a>
                                                <ul class="share-social-list">
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons fa fa-map-marker"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="hotels-layout">
                                    <div class="image-wrapper">
                                        <a href="" class="link">
                                            <img src="../assets/images/hotels/hotel-4.jpg" alt="" class="img-responsive">
                                        </a>
                                        <div class="title-wrapper">
                                            <a href="" class="title">sarina hotel</a>
                                            <div title="Rated 5.00 out of 5" class="star-rating">
                                                <span class="width-100">
                                                    <strong class="rating">5.00</strong> out of 5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-wrapper">
                                        <div class="content">
                                            <div class="title">
                                                <div class="price">
                                                    <sup>$</sup>
                                                    <span class="number">30</span>
                                                </div>
                                                <p class="for-price">for person per night</p>
                                            </div>
                                            <p class="text">Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus lorem ipsum dolor consectete.</p>
                                            <div class="group-btn-tours">
                                                <a href="" class="left-btn">book now</a>
                                            </div>
                                        </div>
                                        <ul class="list-info list-unstyled">
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-eye"></i>
                                                    <span class="number">234</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-heart"></i>
                                                    <span class="number">156</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons hidden-icon fa fa-comment"></i>
                                                    <span class="number">19</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" class="link">
                                                    <i class="icons fa fa-share-alt"></i>
                                                </a>
                                                <ul class="share-social-list">
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="link-social">
                                                            <i class="icons fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="link">
                                                    <i class="icons fa fa-map-marker"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" class="btn btn-transparent margin-top70">more hotel</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="travelers">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="traveler-wrapper padding-top padding-bottom">
                            <div class="group-title white">
                                <div class="sub-title">
                                    <p class="text">放松和享受</p>
                                    <i class="icons flaticon-people"></i>
                                </div>
                                <h2 class="main-title">旅行者们说</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="traveler-list">
                            <div class="traveler">
                                <div class="cover-image">
                                    <img src="../assets/images/homepage/cover-image-1.jpg" alt="">
                                </div>
                                <div class="wrapper-content">
                                    <div class="avatar">
                                        <img src="../assets/images/homepage/avatar-1.jpg" alt="" class="img-responsive">
                                    </div>
                                    <p class="name">Alicia Chang</p>
                                    <p class="address">茶卡盐湖</p>
                                    <p class="description">" 前几天去青海打卡了。最喜欢的是最近很热门的 天空之镜——茶卡盐湖 天气好的时候真的太美了。这个地方有机会一定要去一次"</p>
                                </div>
                            </div>
                            <div class="traveler">
                                <div class="cover-image">
                                    <img src="../assets/images/homepage/cover-image-2.jpg" alt="">
                                </div>
                                <div class="wrapper-content">
                                    <div class="avatar">
                                        <img src="../assets/images/homepage/avatar-2.jpg" alt="" class="img-responsive">
                                    </div>
                                    <p class="name">马颖婷</p>
                                    <p class="address">青海湖</p>
                                    <p class="description">" 抖音那么火的青海，果然没让我失望，蓝蓝的天空，蓝蓝的青海湖佛教圣地塔尔寺让我震撼，还有最最喜欢的茶卡盐湖景区特别漂亮，就像走进仙境一样拍了好多好多照片，边走边看不够"</p>
                                </div>
                            </div>
                            <div class="traveler">
                                <div class="cover-image">
                                    <img src="../assets/images/homepage/cover-image-3.jpg" alt="">
                                </div>
                                <div class="wrapper-content">
                                    <div class="avatar">
                                        <img src="../assets/images/homepage/avatar-3.jpg" alt="" class="img-responsive">
                                    </div>
                                    <p class="name">佳岭儿佳岭儿嘉陵江</p>
                                    <p class="address">塔尔寺</p>
                                    <p class="description">" 瞻仰塔尔寺，嬉戏青海湖畔，赤足茶卡尔，感叹水翠湖的美景，一路地貌风光无限变化万千（唯一缺点就是没水洗澡洗头发），牛羊肉，土豆吃了好多，真的好想吃蔬菜。 "</p>
                                </div>
                            </div>
                            <div class="traveler">
                                <div class="cover-image">
                                    <img src="../assets/images/homepage/cover-image-4.jpg" alt="">
                                </div>
                                <div class="wrapper-content">
                                    <div class="avatar">
                                        <img src="../assets/images/homepage/avatar-4.jpg" alt="" class="img-responsive">
                                    </div>
                                    <p class="name">郭丞哲</p>
                                    <p class="address">柴达木盆</p>
                                    <p class="description">" 从柴达木盆地目前发现的人类活动的 文物资料表明，这一地区的人类最早活动时限可追溯到上万年以前，那些壮观粗重的铁质管状物究竟是谁遗失在这一片荒蛮地带的呢？ ​"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="news padding-top padding-bottom">
            <div class="container">
                <div class="news-wrapper">
                    <div class="group-title">
                        <div class="sub-title">
                            <p class="text">探索青海故事</p>
                            <i class="icons flaticon-people"></i>
                        </div>
                        <h2 class="main-title">新闻资讯</h2>
                    </div>
                    <div class="news-content margin-top70">
                        <div class="news-list">
                            <div class="new-layout">
                                <div class="image-wrapper">
                                    <a href="#" class="link">
                                        <img src="../assets/images/homepage/new-1.jpg" alt="" class="img-responsive">
                                    </a>
                                    <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...</div>
                                </div>
                                <div class="content-wrapper">
                                    <a href="#" class="title">DON’T GIVE IN TO FEAR OR HOW TO TRAVEL TO A PLACE YOU KNOW.</a>
                                    <ul class="info list-inline list-unstyled">
                                        <li>
                                            <a href="#" class="link">September 17, 2015 </a>
                                        </li>
                                        <li>
                                            <a href="#" class="link">admin</a>
                                        </li>
                                    </ul>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Ut enim ad minim veniam, quis trud
                                        tionco laboris nisi ut aliquip.</p>
                                    <a href="" class="btn btn-maincolor">read know</a>
                                    <div class="tags">
                                        <div class="title-tag">tags:</div>
                                        <ul class="list-inline list-unstyled list-tags">
                                            <li>
                                                <a href="" class="tag">explore</a>
                                            </li>
                                            <li>
                                                <a href="" class="tag">adventure</a>
                                            </li>
                                            <li>
                                                <a href="" class="tag">traveler</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="new-layout">
                                <div class="image-wrapper">
                                    <a href="#" class="link">
                                        <img src="../assets/images/homepage/new-2.jpg" alt="" class="img-responsive">
                                    </a>
                                    <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...</div>
                                </div>
                                <div class="content-wrapper">
                                    <a href="#" class="title">365 Days: 20 things I Learned from Traveling Around the World</a>
                                    <ul class="info list-inline list-unstyled">
                                        <li>
                                            <a href="#" class="link">november 29, 2015 </a>
                                        </li>
                                        <li>
                                            <a href="#" class="link">admin</a>
                                        </li>
                                    </ul>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                                    <a href="" class="btn btn-maincolor">read know</a>
                                    <div class="tags">
                                        <div class="title-tag">tags:</div>
                                        <ul class="list-inline list-unstyled list-tags">
                                            <li>
                                                <a href="" class="tag">explore</a>
                                            </li>
                                            <li>
                                                <a href="" class="tag">adventure</a>
                                            </li>
                                            <li>
                                                <a href="" class="tag">traveler</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="new-layout">
                                <div class="image-wrapper">
                                    <a href="#" class="link">
                                        <img src="../assets/images/homepage/new-3.jpg" alt="" class="img-responsive">
                                    </a>
                                    <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...</div>
                                </div>
                                <div class="content-wrapper">
                                    <a href="#" class="title">My 30 Best Travel Tips After 4 Years Traveling The World</a>
                                    <ul class="info list-inline list-unstyled">
                                        <li>
                                            <a href="#" class="link">april 1, 2016</a>
                                        </li>
                                        <li>
                                            <a href="#" class="link">admin</a>
                                        </li>
                                    </ul>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Ut enim ad minim veniam, quis trud
                                        tionco laboris nisi ut aliquip.</p>
                                    <a href="#" class="btn btn-maincolor">read know</a>
                                    <div class="tags">
                                        <div class="title-tag">tags:</div>
                                        <ul class="list-inline list-unstyled list-tags">
                                            <li>
                                                <a href="#" class="tag">explore</a>
                                            </li>
                                            <li>
                                                <a href="#" class="tag">adventure</a>
                                            </li>
                                            <li>
                                                <a href="#" class="tag">traveler</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="banner-sale-1">
            <div class="banner-left">
                <div class="title-box">
                    <h1 class="title-overlay title-1 padding-top">限时优惠</h1>
                    <h2 class="title-overlay title-2">发现</h2>
                    <h3 class="title-overlay title-3 padding-bottom">更多 </h3>
                </div>
            </div>
            <div class="banner-right">
                <div class="text-salebox">
                    <div class="text-left">
                        <div class="sale-box">
                            <div class="sale-box-top">
                                <h2 class="number">50</h2>
                                <span class="sup-1">%</span>
                                <span class="sup-2">首单</span>
                            </div>
                            <h2 class="text-sale">优惠</h2>
                        </div>
                    </div>
                    <div class="text-right">
                        <h5 class="title">用户首次线路预定即享优惠</h5>
                        <p class="text">超值热门线路优惠中，即日起至2018年10月30日，请多详情咨询客服.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="a-fact padding-top padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="group-title">
                            <div class="sub-title">
                                <p class="text">青海旅游消费指南</p>
                                <i class="icons flaticon-people"></i>
                            </div>
                            <h2 class="main-title">覆盖全球5个国家和国内18个省4个直辖市</h2>
                        </div>
                        <div class="a-fact-wrapper">
                            <p class="text">我们热爱生活，是资深的极客；更是疯狂的旅行者。我们的梦想是通过互联网技术帮助更多的人去享受旅行的乐趣，去追寻内心的那片净土。</p>
                            <div class="a-fact-list">
                                <ul class="list-unstyled">
                                    <li>
                                        <p class="text">100,000 位旅行者.</p>
                                    </li>
                                    <li>
                                        <p class="text">1,000 家优质民宿.</p>
                                    </li>
                                    <li>
                                        <p class="text">10条 优质环线推荐.</p>
                                    </li>
                                    <li>
                                        <p class="text">每年600次以上的旅行团.</p>
                                    </li>
                                    <li>
                                        <p class="text">青海最佳旅游服务.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="a-fact-image-wrapper">
                            <div class="a-fact-image">
                                <a href="#" class="icons icons-1">
                                    <i class="fa fa-plane"></i>
                                </a>
                                <img src="../assets/images/homepage/area-1.png" alt="" class="img-responsive">
                            </div>
                            <div class="a-fact-image">
                                <a href="#" class="icons icons-2">
                                    <i class="fa fa-map-marker"></i>
                                </a>
                                <img src="../assets/images/homepage/area-2.png" alt="" class="img-responsive">
                            </div>
                            <div class="a-fact-image">
                                <a href="#" class="icons icons-3">
                                    <i class="fa fa-users"></i>
                                </a>
                                <img src="../assets/images/homepage/area-3.png" alt="" class="img-responsive">
                            </div>
                            <div class="a-fact-image">
                                <a href="#" class="icons icons-4">
                                    <i class="fa fa-suitcase"></i>
                                </a>
                                <img src="../assets/images/homepage/area-4.png" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact style-1">
            <div class="container">
                <div class="row">
                    <div class="wrapper-contact-style">
                        <div data-wow-delay="0.5s" class="contact-wrapper-images wow fadeInLeft">
                            <img src="../assets/images/homepage/contact-people.png" alt="" class="img-responsive">
                        </div>
                        <div class="col-lg-6 col-sm-7 col-lg-offset-4 col-sm-offset-5">
                            <div data-wow-delay="0.4s" class="contact-wrapper padding-top padding-bottom wow fadeInRight">
                                <div class="contact-box">
                                    <h5 class="title">联系我们</h5>
                                    <p class="text">只需拿好您的背包，把您的旅游计划交给我们！</p>
                                    <form class="contact-form">
                                        <input type="text" placeholder="您的名字" class="form-control form-input">
                                        <input type="phone" placeholder="您的手机号" class="form-control form-input">
                                        <textarea placeholder="您想跟我们说" class="form-control form-input"></textarea>
                                        <div class="contact-submit">
                                            <button type="submit" data-hover="确认" class="btn btn-slide">
                                                <span class="text">发给我们</span>
                                                <span class="icons fa fa-long-arrow-right"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
  import '../../static/js/pages/home-page.js'
  import vBanner from '@/components/banner'
  export default {
    components: {
      vBanner
    },
    data() {
      return {
        pathData: null
      }
    },
    mounted() {
        this.init()
    },
    methods: {
      init: function () {     
        this.axios.get(this.api.getSelectPath, {
            params: { 'limit': 3 }
        }).then(res => {
            this.pathData = res.data.data
            this.toursList()
        })
      },
      toursList: function () {
        this.$nextTick(function () {
            $('.tours-list').slick({
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        speed: 600
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        speed: 600
                    }
                }]
            })    
        })
      }
    }
  };
</script>
<style scoped> 

</style>