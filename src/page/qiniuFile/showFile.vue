<template>
  <div id="showFile">
    <ul>
      <li v-for="fileList in fileList" :key="fileList.fname">
        <a href="javascript:;" @click="findFileMsg(fileList)">{{fileList.fname}}</a>
      </li>
    </ul>


  </div>

</template>
<script>
  export default {
    name: 'showFile',
    data:function(){
      return{
        fileList:[]

      }
    },
    mounted:function(){
      this.findFileList();
    },
    methods:{
      findFileList:function() {
        var that = this;
        this.$api.post('/php/app/file/showFile.php',"",function (success){
          if(success.error == 1){
            that.fileList = success.result;
            console.log(that.fileList)
          }else{
            console.log(success)
          }
        })
      },
      findFileMsg:function(fileList){
        console.log(fileList.fkey)
        var condition = {};
        condition.key = fileList.fkey;
        this.$api.post('/php/app/file/findFileMsg.php',condition,function (success){
          if(success.error == 1){

            console.log(success)
          }else{
            console.log(success)
          }
        })
      }



    },
  }
</script>
