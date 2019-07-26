
<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand"  href="#">导航</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class=""><a href="/">主页</a></li>
            <li class=""><router-link to="article">笔记</router-link></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                常用工具
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="" to="urlEncode">url加密</router-link></li>
                <li><router-link class="" to="jsonEncode">json</router-link></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li  v-if="userToken == '0'" ><router-link to="login">登录</router-link></li>
            <li v-if="userToken == '1'" ><a href="javascript:;">登录成功</a></li>
            <li v-if="userToken == '1'" ><a href="javascript:;" @click="loginOut">注销</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <a class="btn btn-default" v-if="!$route.meta.keepAlive" @click="$router.back(-1)">返回上一页</a>
    <div class="container">
    <router-view></router-view>
    </div>
    <footer></footer>
  </div>

</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        userToken:""

      }
    },
    mounted: function(){
      this.findUserCode()
    },
    methods:{
      findUserCode:function () {
        var that = this
        if(window.localStorage.token){
          that.userToken = "1"
        }else{
          that.userToken = "0"
        }
        // that.$layer.open({
        //   type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
        //   title: '信11息',
        //   content: '222',
        //   area: 'auto',
        //   time: 0,
        //   shade: true,//是否显示遮罩
        //   shadeClose: false,//点击遮罩是否关闭
        //   yes: function () {
        //     alert('yes');
        //     that.$layer.closeAll();
        //   },
        //   cancel: function () {
        //     alert('no');
        //     that.$layer.closeAll();
        //   },
        // })
      },
      //注销函数
      loginOut:function () {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('usertype')
        window.location.reload()
      }


    },
    components: {



    }
  }

</script>
<style lang="less">
  @import "style/main.less";
</style>

