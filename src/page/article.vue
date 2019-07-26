  <template>
    <div id="md">
      <textarea class="ArticleText" v-if="isshow == 2" :value="articeText"></textarea>
      <a class="btn btn-default" @click="revision()" v-if="isshow == 1">点击</a>
      <a class="btn btn-default" @click="noRevision()" v-if="isshow == 2">返回</a>
      <a class="btn btn-default" @click="preview()" v-if="isshow == 2">预览</a>
      <div class="row">
        <div class="col-xs-3">
          <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125" v-for="articleList in articleList" :key="articleList.title">
            <li @click="findArticleText(articleList)">
              <a href="javascript:;">
              {{articleList.title}}
            </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-9">
          <div class="mdText" v-html="articeTextShow"></div>
        </div>
      </div>
    </div>
	</template>
	<script>
    import marked from 'marked'
    export default {
      name: 'articleList',
      data:function(){
       return{
         articleList:[],
         articeTextShow:'',
         articeText:'',
         isshow:0,
       }
      },
      mounted:function(){
        this.findArticleList();
      },
      methods:{
        findArticleList:function () {
          var  that= this
          this.$api.post('/php/app/showArticleList.php',{},function (success){
            if(success.error == 1){
              that.articleList = success.result
              //console.log(success.result)
            }else{
              console.log(success)
            }
          })
        },
        findArticleText:function (articleList){
          var  that= this
          this.$api.post('/php/app/showArticleText.php',articleList.title,function (success){
            if(success.error == 1){
              //$(".mdText").html(marked(success.result.text))
              that.articeTextShow = marked(success.result.text)
              that.articeText = success.result.text
              that.isshow = 1;
              //console.log(success.result)
            }else{
              console.log(success)
            }
          })
        },
        revision:function(){
          var  that= this;
          that.isshow = 2;
        },
        noRevision:function () {
          var  that= this;
          that.isshow = 1;
        },
        preview:function(){
           var  that= this
          that.articeText = $(".ArticleText").val()
          that.articeTextShow = marked(that.articeText)
          //console.log(that.articeTextShow)
        }

      },
    }
	</script>
