


	<template>
  <div id="addLightNovelContent" class="container">
    <div class="row">
      <div class="col-6 offset-sm-3">

        <div class="form-group">
          <label>小说系列名称</label>
          <select class="form-control" v-model="serial">
            <option value="0">请选择</option>
            <option :value="serials.id" v-for="serials in serials" :key="serials.id">{{serials.serial}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>标题</label>
          <input  class="form-control" type="text"  v-model="title">
        </div>
        <div class="form-group">
          <label>排序</label>
          <input  class="form-control" type="text"  v-model="ordernumber">
        </div>
        <div class="form-group">
          <label>梗概</label>
          <textarea class="form-control" v-model="outline"></textarea>
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea class="form-control" v-model="notes"></textarea>
        </div>
        <button class="btn btn-primary" @click="addSerial()">提交</button>
      </div>

    </div>


  </div>
	</template>
	<script>
    export default {
      name: 'addLightNovelContent',
      data:function(){
        return{
          serials:{},
          serial:'',
          title:'',
          outline:'',
          notes:'',
          ordernumber:'',

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
          var title = that.title;
          var outline = that.outline;
          var notes = that.notes;
          var ordernumber = that.ordernumber;
          if( serial != '' && title != '' && outline != '' && notes != '' && ordernumber != ''){
            var condition = {};
            condition.serialid = serial;
            condition.title = title;
            condition.outline = outline;
            condition.notes = notes;
            condition.ordernumber = ordernumber;
            this.$api.post('/php/app/lightnovel/addLightNovelContent.php',condition,function (success){
              if(success.error == 1){
                that.$layer.alert(success.result);
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
