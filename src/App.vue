
<template>
  <div id="app">
    <!-- 小屏幕上水平导航栏会切换为垂直的 -->
    <!--width576px-->
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <!-- Links -->
      <li class="nav-item">
        <router-link class="nav-link" to="/">主页</router-link>
      </li>
      <div class="navbar-nav flex-row ml-md-auto d-block d-sm-none">
        <li v-if="userToken == '0'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/login'}">登录</router-link>
        </li>

        <li v-if="userToken == '1'" class="nav-item">
          <a class="nav-link disabled" href="javascript:;">登录成功</a>
        </li>

        <li v-if="userToken == '1'" class="nav-item">
          <a class="nav-link" href="javascript:;" @click="loginOut">注销</a>
        </li>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav collapse navbar-collapse" id="collapsibleNavbar">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'/article'}">笔记</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'/urlEncode'}">url加密</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'/jsonEncode'}">json</router-link>
        </li>
        <li v-if="userToken == '1'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/addArticle'}">添加笔记</router-link>
        </li>
        <li v-if="userToken == '1'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/articleEdit'}">修改笔记</router-link>
        </li>
        <li v-if="userToken == '1'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/addproject'}">添加计划</router-link>
        </li>
        <li v-if="userToken == '1'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/showproject'}">展示计划</router-link>
        </li>
      </ul>
      <div class="navbar-nav flex-row ml-md-auto d-none d-sm-block d-md-flex">
        <li v-if="userToken == '0'" class="nav-item">
          <router-link class="nav-link" :to="{name:'/login'}">登录</router-link>
        </li>

        <li v-if="userToken == '1'" class="nav-item">
          <a class="nav-link disabled" href="javascript:;">登录成功</a>
        </li>

        <li v-if="userToken == '1'" class="nav-item">
          <a class="nav-link" href="javascript:;" @click="loginOut">注销</a>
        </li>
      </div>
    </nav>

    <a class="btn btn-default" v-if="!$route.meta.keepAlive" @click="$router.back(-1)">返回上一页</a>
    <div class="container-fluid">
    <router-view>
    </router-view>
    </div>


    <footer></footer>


  </div>

</template>

<script>
  import './style/md.css'
  export default {
    name: 'app',
    data(){
      return{
        userToken:"",
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
      },

    },
    components: {
    }
  }

</script>
<style lang="less">
  @import "style/main.less";
</style>

