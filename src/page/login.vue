<template>
  <div id="login">
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3 form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="username">用户名</label>
          <div class="col-sm-10">
            <input type="text" class="username form-control" id="username"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="password">密码</label>
          <div class="col-sm-10">
            <input type="password" class="password form-control" id="password"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-10 col-xs-offset-2">
            <a class="sub btn btn-default" @click="submit()">登录</a>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>
<script>
  export default {
    name: 'login',
    data:function(){
      return{

      }
    },
    mounted:function(){

    },
    methods:{
      submit:function () {
        var that = this
        var username = $(".username").val();
        var password = $(".password").val();
        var condition ={"username":username,"password":password,}
        this.$api.post('/php/app/login.php',condition,function (success){
          if(success.error == 1){
            var ses = window.localStorage
            ses.setItem("data",success.result)
            window.location.href ='/'
          }else{
            that.$layer.alert(success.msg);

            //console.log(success)
          }
        })

      }

    },
  }
</script>
