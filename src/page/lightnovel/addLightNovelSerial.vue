


	<template>
  <div id="addserial" class="container">
    <ul>
      <li v-for="serials in serials" :key="serials.id">
        {{serials.serial}}
      </li>
    </ul>
    <div class="row">
      <div class="col-6 offset-sm-3">

        <div class="form-group">
          <label>小说系列名称</label>
          <input  class="form-control" type="text"  v-model="serial">
        </div>

        <button class="btn btn-primary" @click="addSerial()">提交</button>
      </div>

    </div>


  </div>
	</template>
	<script>
    export default {
      name: 'addserial',
      data:function(){
        return{
          serial:"",
          serials:{},
        }
      },
      mounted:function(){
        this.findLightNovelSerial();
      },
      methods:{

        findLightNovelSerial:function () {
          var that = this;
          this.$api.post('/php/app/lightnovel/findLightNovelSerial.php','',function (success){
            if(success.error == 1){
              that.serials = success.result;
            }else{

            }
          })
        },
        addSerial:function () {
          var that = this;
          var serial = that.serial;
          if( serial != ''){
            var condition = {};
            condition.serial = serial;
            this.$api.post('/php/app/lightnovel/addLightNovelSerial.php',condition,function (success){
              if(success.error == 1){
                that.$layer.alert(success.result);
                that.findLightNovelSerial();
              }else{

              }
            })
          }else{
            that.$layer.msg("必填项不能为空");
          }


        }
        }



    }


	</script>
