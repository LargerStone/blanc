


	<template>
  <div id="showproject" class="container" >
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" v-for="projectType in projectType" :key="projectType.id">
        <a @click="findProject(projectType.id)" class="nav-link" :class="{active:projectType.id == 'bpt01'}" data-toggle="tab" :href="'#'+projectType.id">{{projectType.type}}</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div v-for="projectType in projectType" :key="projectType.id" :id="projectType.id" class="container tab-pane " :class="{active:projectType.id == 'bpt01'}"><br>
        <table class="table table-hover table-bordered text-center">
          <thead>
          <tr>
            <th>标题</th>
            <!--<th>内容</th>-->
            <th>类型</th>
            <th>难度</th>
            <th>状态</th>
            <th>添加时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="projectList in projectList" :key="projectList.id">
            <td>{{projectList.title}}</td>
            <!--<td>{{projectList.text}}</td>-->
            <td>{{projectList.type}}</td>
            <td>{{projectList.level}}</td>
            <td>{{projectList.status}}</td>
            <td>{{projectList.addtime}}</td>
            <td>
              <router-link class="card-link" :to="{name:'/editstatus',params:{id:projectList.id}}">更改进度</router-link>
              <router-link class="card-link" :to="{name:'/editproject',params:{id:projectList.id}}">编辑详情</router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--<div class="row">-->
      <!--<div class="col-sm-3" v-for="projectList in projectList" :key="projectList.id" style="margin-bottom: 10px">-->
        <!--<div class="card">-->
          <!--<div class="card-body">-->
            <!--<h4 class="card-title">{{projectList.title}}</h4>-->
            <!--<p class="card-text">{{projectList.text}}</p>-->
            <!--<p class="card-text">类型：{{projectList.type}}</p>-->
            <!--<p class="card-text">难度：{{projectList.level}}</p>-->
            <!--<p class="card-text">状态：{{projectList.status}}</p>-->
            <!--<p class="card-text">添加时间：<br>{{projectList.addtime}}</p>-->
            <!--<router-link class="card-link" :to="{name:'/editstatus',params:{id:projectList.id}}">更改进度</router-link>-->
            <!--<router-link class="card-link" :to="{name:'/editproject',params:{id:projectList.id}}">编辑详情</router-link>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


  </div>
	</template>
	<script>
    export default {
      name: 'showproject',
      data:function(){
        return{
          projectList:"",
          projectType:"",
        }
      },
      mounted:function(){

        this.findProjectType();
        this.findProjectLevel();
        this.findProjectstatus();
        this.findProjectNow();

      },
      methods: {
        findProjectType: function () {
          var that = this;
          this.$api.post('/php/app/project/findType.php', '', function (success) {
            if (success.error == 1) {
              that.projectType = success.result;
            } else {

            }
          })
          //console.log(that.projectType)
        },
        findProjectLevel: function () {
          var that = this;
          this.$api.post('/php/app/project/findLevel.php', '', function (success) {
            if (success.error == 1) {
              that.findprojectLevel = success.result;
            } else {

            }
          })
        },
        findProjectstatus: function () {
          var that = this;
          this.$api.post('/php/app/project/findStatus.php', '', function (success) {
            if (success.error == 1) {
              that.findprojectstatus = success.result;
            } else {

            }
          })
        },
        findProject: function (e) {

          var condition = {};
          condition.typeid = e;
          var that = this;
          that.projectList = '';
          this.$api.post('/php/app/project/findProject.php', condition, function (success) {
            if (success.error == 1) {
              that.projectList = success.result
              // that.title = success.result.title;
              // that.text = success.result.text;
              // that.addtime = success.result.addtime;
              // that.status = success.result.status;
              // that.type = success.result.type;
              // that.level = success.result.level;
            } else {

            }
          })
        },
        findProjectNow: function (e) {

          var condition = {};
          condition.typeid = "bpt01";
          var that = this;
          that.projectList = '';
          this.$api.post('/php/app/project/findProject.php', condition, function (success) {
            if (success.error == 1) {
              that.projectList = success.result
            } else {

            }
          })
        },

      }

    }


	</script>
