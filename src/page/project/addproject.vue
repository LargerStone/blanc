


	<template>
  <div id="addproject" class="container">
    <div class="row">
      <div class="col-6 offset-sm-3">
        <div class="form-group">
          <label>计划状态</label>
          <select class="form-control" v-model="status">
            <option value="0">请选择</option>
            <option :value="findprojectstatus.id" v-for="findprojectstatus in findprojectstatus" :key="findprojectstatus.id">{{findprojectstatus.status}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>计划名称</label>
          <input  class="form-control" type="text"  v-model="title">
        </div>
        <div class="form-group">
          <label>计划内容</label>
          <textarea class="form-control" v-model="text"></textarea>
        </div>
        <div class="form-group">
          <label>计划类型</label>
          <select class="form-control" v-model="projectType">
            <option value="0">请选择</option>
            <option :value="findprojectType.id" v-for="findprojectType in findprojectType" :key="findprojectType.id">{{findprojectType.type}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>计划等级</label>
          <select class="form-control" v-model="projectLevel">
            <option value="0">请选择</option>
            <option :value="findprojectLevel.id" v-for="findprojectLevel in findprojectLevel" :key="findprojectLevel.id">{{findprojectLevel.level}}</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="addProject()">提交</button>
      </div>

    </div>


  </div>
	</template>
	<script>
    export default {
      name: 'addproject',
      data:function(){
        return{
          findprojectType:{},
          findprojectLevel:{},
          findprojectstatus:{},
          title:"",
          text:"",
          projectType:"0",
          projectLevel:"0",
          status:"0",
        }
      },
      mounted:function(){
        this.findProjectType();
        this.findProjectLevel();
        this.findProjectstatus();
      },
      methods:{
        findProjectType:function () {
          var that = this;
          this.$api.post('/php/app/project/findType.php','',function (success){
            if(success.error == 1){
              that.findprojectType = success.result;
            }else{

            }
          })
        },
        findProjectLevel:function () {
          var that = this;
          this.$api.post('/php/app/project/findLevel.php','',function (success){
            if(success.error == 1){
              that.findprojectLevel = success.result;
            }else{

            }
          })
        },
        findProjectstatus:function () {
          var that = this;
          this.$api.post('/php/app/project/findStatus.php','',function (success){
            if(success.error == 1){
              that.findprojectstatus = success.result;
            }else{

            }
          })
        },
        addProject:function () {
          var that = this;
          var title = that.title;
          var text = that.text;
          var projectType = that.projectType;
          var projectLevel = that.projectLevel;
          var status = that.status;
          if( title != ''&&text != ''&&projectType != '0'&&projectLevel != '0'&&status != '0'){
            var condition = {};
            condition.title = title;
            condition.text = text;
            condition.typeID = projectType;
            condition.levelId = projectLevel;
            condition.statusId = status;
            condition.deletecode = "0";
            this.$api.post('/php/app/project/addProject.php',condition,function (success){
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
