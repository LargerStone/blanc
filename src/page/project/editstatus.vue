


	<template>
  <div id="editstatus" class="container">
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
          <label>计划名称:</label>
          <div>{{title}}</div>
        </div>
        <div class="form-group">
          <label>计划内容</label>
          <div>{{text}}</div>
        </div>
        <div class="form-group">
          <label>计划类型</label>
          <div>{{projectType}}</div>
        </div>
        <div class="form-group">
          <label>计划等级</label>
          <div>{{projectLevel}}</div>
        </div>
        <button class="btn btn-primary" @click="editStatus()">修改</button>
      </div>

    </div>


  </div>
	</template>
	<script>
    export default {
      name: 'editstatus',
      data:function(){
        return{
          findprojectstatus:{},
          title:"",
          text:"",
          projectType:"",
          projectLevel:"",
          projectLevelId:"",
          status:"0",
        }
      },
      mounted:function(){
        this.findProjectstatus();
        this.findProject();
      },
      methods:{
        findProjectstatus:function () {
          var that = this;
          this.$api.post('/php/app/project/findStatus.php','',function (success){
            if(success.error == 1){
              that.findprojectstatus = success.result;
            }else{

            }
          })
        },
        findProject:function () {
          var condition = {};
          condition.id = this.$route.params.id;
          var that = this;
          this.$api.post('/php/app/project/findProject.php',condition,function (success){
            if(success.error == 1){
               that.title = success.result[0].title;
               that.text = success.result[0].text;
               that.projectType = success.result[0].type;
               that.projectLevel = success.result[0].level;
               that.projectLevelId = success.result[0].levelid;
               that.status = success.result[0].statusid;

               console.log(success.result[0])

            }else{

            }
          })
        },

        editStatus:function () {
          var that = this;

          var status = that.status;
          var projectLevel = that.projectLevelId;
          if(projectLevel != '0'&&status != '0'){
            var condition = {};
            condition.id = this.$route.params.id;
            condition.levelId = projectLevel;
            condition.statusId = status;
            this.$api.post('/php/app/project/editStatus.php',condition,function (success){
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
