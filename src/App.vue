<template>
  <div id="app">
    <div class="container">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">导航</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class=""><a href="/">主页</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                常用工具
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="" to="urlEncode">url加密</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }

</script>

<style lang="css">
  @import "./style/style.css";
</style>
