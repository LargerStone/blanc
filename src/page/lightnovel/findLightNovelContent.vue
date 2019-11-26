


	<template>
  <div id="findLightNovelContent" class="container">
    <ul>
      <li v-for="lightNovelContent in lightNovelContent" :key="lightNovelContent.id">
        {{lightNovelContent.title}}
        {{lightNovelContent.outline}}
        {{lightNovelContent.addtime}}
        {{lightNovelContent.edittime}}
        {{lightNovelContent.serial}}
        {{lightNovelContent.notes}}
      </li>
    </ul>
    <div class="row">


    </div>


  </div>
	</template>
	<script>
    export default {
      name: 'findLightNovelContent',
      data:function(){
        return{
          lightNovelContent:'',

        }
      },
      mounted:function(){
        this.findLightNovelContent();

      },
      methods:{

        findLightNovelContent:function () {
          var that = this;
          this.$api.post('/php/app/lightnovel/findLightNovelContent.php','',function (success){
            if(success.error == 1){
              that.lightNovelContent = success.result;
            }else{

            }
          })
        },


        }



    }


	</script>
