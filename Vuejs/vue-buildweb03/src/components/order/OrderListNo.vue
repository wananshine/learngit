<template>
  <div class="m-Container">
    <header>
    <div class="btl-head-fy">
        <div class="top-nav-bar">
          <router-link class="nbar-cell" to="/home/order">已分润</router-link>
          <router-link class="nbar-cell active" to="/home/order/nofenrun">待分润</router-link>
        </div>
    </div>
</header>
<div class="nav-container">
    <div class="nav-justified">
        <div class="nav-link">
            <div class="nav-link-all">
                <a v-for="(item, idx) in typeTabs" :class="{ active: item.active }" @click="onSetCurTab(idx)" class="nav-cont">{{ item.title }}</a>
            </div>
        </div>
        <div class="nav-search"><img src="img/icon-12.png"></div>
    </div>
</div>
<section class="main">
    <div class="btl-content">
        <mt-loadmore class="order-container" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <div class="order-list-wait" v-for="(item, idx) in listData">
                <div class="order-info">
                    <a class="or-cell"><i>{{ item.orderType }}：</i><em>{{ item.price }}元</em></a>
                    <a class="or-cell"><i>下单时间：</i><em>{{ item.tradingTime }}</em></a>
                    <a class="or-cell"><i>手机号码：</i><em>{{ item.mobile }}</em></a>
                    <a class="or-cell"><i>订&nbsp;单&nbsp;&nbsp;号：</i><em>{{ item.orderNum }}</em></a>
                </div>
            </div>
            <div class="no-data" v-show="!listData.length">暂无数据</div>
            <!-- <p v-if="!listData.length"><strong>还没有任何计划</strong></p> -->
            <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
    </div>
</section>
  </div>
</template>
<script>

  import { InfiniteScroll } from 'mint-ui';
  import { Toast, MessageBox } from 'mint-ui'

  const orderTypeArr = ['全部', '商城', '在线升级', '激活创客', '创客续费'];
  export default{
    data(){
      return{
        // isActive: true,
        typeTabs: [
          { title: "全部" ,active: true},
          { title: "商城" ,active: false},
          { title: "在线升级" ,active: false},
          { title: "激活创客" ,active: false},
          { title: "创客续费" ,active: false},
        ],
        listData: [
          { orderType: '商城', price: '123331', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
          { orderType: '商城', price: '1231', tradingTime: '12321', mobile: '12321', orderNum: '123123'},
        ]
      }
    },

   methods: {
     onSetCurTab(idx){
       let me = this;
       let tab = this.typeTabs[idx];
       this.typeTabs.forEach(function(tt){
         tt.active = false;
       });
       tab.active = true;
       me.orderType = tab.type;
       me.resetParams();
       me.loadMore();
     },

//      loadTop() {
//   // load more data
//   this.$refs.loadmore.onTopLoaded();
// },

loadBottom() {
  // load more data
  this.allLoaded = true;// if all data are loaded
  this.$refs.loadmore.onBottomLoaded();
},

     loadMore (){
       console.log('loadMore', Date.now());
     }
   }
  }
</script>
