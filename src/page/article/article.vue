  <template>
    <div id="md">
      <div class="row">
        <div class="col-xs-3">
          <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125" v-for="articleList in articleList" :key="articleList.id">
            <li @click="findArticleText(articleList)">
              <a href="javascript:;">
              {{articleList.title}}
            </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-9">
          <div class="mdText" v-html="articleTextShow"></div>
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
         articleList:[],//储存文章标题列表页
         articleTextShow:'',//储存当前展示用文章内容（MD用）
         articleText:'',//储存当前展示的文章的内容（修改文本框）
         articleTitle:'',//储存当前展示的文章的标题
         articleType:'',//储存当前展示的文章的类型
         articleID:''//储存当前展示的文章的ID,
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
          that.articleID = articleList.id
          var condition = {};
          condition.id = that.articleID
          this.$api.post('/php/app/showArticleText.php',condition,function (success){
            if(success.error == 1){
              //$(".mdText").html(marked(success.result.text))
              that.articleTextShow = marked(success.result.text)
              that.articleText = success.result.text
            }else{
              console.log(success)
            }
          })
        },


      },
    }
	</script>
