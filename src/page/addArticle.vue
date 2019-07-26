  <template>
    <div id="addArticle">
      <div class="row">
        <div class="col-xs-3">111
          <!--<ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125" v-for="mdtitlelist in mdtitlelist" :key="mdtitlelist.title">-->
            <!--<li @click="findmdtext(mdtitlelist)">-->
              <!--<a href="javascript:;">-->
              <!--{{mdtitlelist.title}}-->
            <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
        <div class="col-xs-9">
          <select class="articletype">
            <option value="0">笔记</option>
          </select>
          <input type="text" class="title"/>
          <textarea class="text"></textarea>
          <a @click="addaddArticle()">提交</a>
        </div>
      </div>
    </div>
	</template>
	<script>
    import marked from 'marked'
    export default {
      name: 'addArticle',
      data:function(){
       return{
         //mdtitlelist:[]
       }
      },
      mounted:function(){
        //this.findmdlist();
      },
      methods:{
        addaddArticle:function () {
          var  that= this;
          var condition = {};

          condition.title = $(".title").val();
          condition.articletype = $(".articletype").val();
          condition.text = $(".text").val();

          this.$api.post('/php/app/addArticle.php',condition,function (success){
            if(success.error == 1){
              console.log(success)
            }else{
              console.log(success)
            }
          })

        }
        // findmdlist:function () {
        //   var  that= this
        //   this.$api.post('/php/app/showMd.php',{},function (success){
        //     if(success.error == 1){
        //       that.mdtitlelist = success.result.md
        //       //console.log(that.mdtitlelist)
        //     }else{
        //       console.log(success)
        //     }
        //   })
        // },
        // findmdtext:function (mdtitlelist){
        //
        //     $(".mdText").html(marked(mdtitlelist.text))
        //
        //
        // }
      },
    }
	</script>
