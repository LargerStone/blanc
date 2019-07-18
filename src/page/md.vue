


	<template>
    <div id="md">

<ul v-for="mdtitlelist in mdtitlelist" :key="mdtitlelist">
  <li @click="findmdtext(mdtitlelist)">{{mdtitlelist}}</li>

</ul>
<div class="mdText"></div>

    </div>

	</template>
	<script>
    import marked from 'marked'
    export default {
      name: 'md',
      data:function(){
       return{
         mdtitlelist:''
       }
      },
      mounted:function(){
        this.findmdlist();
      },
      methods:{
        findmdlist:function () {
          var  that= this
          this.$api.post('/php/showMd.php',{},function (success){
            if(success.error == 1){
               that.mdtitlelist = success.result
               console.log("1111",that.mdtitlelist)
              // console.log(success.result)
              // var htmls =''
              // for(var i=0;i<success.result.length;i++){
              //   //console.log(success.result[i])
              //   var html = "<a href='http://192.168.0.107/php/md/"+success.result[i]+"'>"+success.result[i]+"</a>"
              //   var htmls = htmls+html
              // }
              // $(".md").html(htmls)
            }else{
              console.log(success)
            }
          })
        },
        findmdtext:function (mdtitlelist){

          var condition = {"url":mdtitlelist}
          console.log(condition)
          this.$api.post('/php/getMdText.php',condition,function (success){
            console.log(success.result)
            $(".mdText").html(marked(success.result))
          })

        }
      },
    }


	</script>
