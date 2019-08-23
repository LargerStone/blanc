<style>
  /*.articleEditW{position:fixed;bottom: 0;left:50%;width: 1000px;height:537px;margin-left: -500px;background: #fff}*/
  /*.articleEditW textarea{width: 100%;height:300px;}*/
  /*body{padding-bottom: 500px;}*/
  .articleEditW textarea{width: 100%; min-height: 300px;line-height: 24px;}
  .textarea{
    width: 100%;
    font-size: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3px;
    outline: 0;
    border: 1px solid #a0b3d6;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    white-space: pre-wrap;

  }
  .col-5{display: none}



</style>
<template>
  <div id="articleEdit">
    <div class="row">
      <div class="col-2">
        <nav class="navbar bg-light">
          <ul class="navbar-nav" >
            <li class="nav-item" v-for="articleList in articleList" :key="articleList.id" @click="findArticleText(articleList)">
              <a class="nav-link" href="javascript:;">{{articleList.title}}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-5">
        <div>
          <h2>编辑</h2>
          <a class="btn btn-default" @click="findArticleTextAdd()">保存</a>
          <a class="btn btn-default" @click="findArticleText()">重置</a>
          <label>标题</label>
          <input type="text" :value="articleTitle" class="articleTitle" required/>
        </div>
        <div class="articleEditW" >
            <label>内容</label>

            <textarea class="ArticleText" @keyup="preview()" :value="articleText" required></textarea>
        </div>
      </div>

      <div class="col-5">
        <div style="height: 105px">
        </div>
        <div>
          <div class="mdText" v-html="articleTextShow"></div>
        </div>
      </div>
    </div>





  </div>
</template>
<script>
  import marked from 'marked'
  export default {
    name: 'articleEdit',
    data:function(){
     return{
       articleList:[],//储存文章标题列表页
       articleTextShow:'',//储存当前展示用文章内容（MD用）
       articleText:'',//储存当前展示的文章的内容（修改文本框）
       articleTitle:'',//储存当前展示的文章的标题
       articleType:'',//储存当前展示的文章的类型
       articleID:'',//储存当前展示的文章的ID
     }
    },
    mounted:function(){

      this.findArticleList();
    },
    methods:{
      //获取文章标题列表页
      findArticleList:function () {
        var  that= this
        this.$api.post('/php/app/showArticleList.php',{},function (success){
          if(success.error == 1){
            that.articleList = success.result;
          }else{
            console.log(success)
          }
        })
      },
      //获取选中标题的文章内容
      findArticleText:function (articleList){
        var  that= this
        if(articleList){
          that.articleID = articleList.id;
        }
        this.$api.post('/php/app/showArticleText.php',that.articleID,function (success){
          if(success.error == 1){
            that.articleTextShow = marked(success.result.text);
            that.articleText = success.result.text;
            that.articleID = success.result.id;
            that.articleTitle=success.result.title;

$(".col-5").show()


          }else{
            console.log(success)
          }
        })
      },
      //编辑过程中的及时预览功能
      preview:function(){
        var  that= this;
        that.articleText = $(".ArticleText").val();
        that.articleTextShow = marked(that.articleText);
      },
      //保存按钮功能
      findArticleTextAdd:function () {
        var  that= this;
        var  articleTitle = $(".articleTitle").val();
        var  condition = {'title':articleTitle,'text':that.articleText,'articletype':'0','id':that.articleID}
        if(that.articleText != ""){
          this.$api.post('/php/app/editArticle.php',condition,function (success){
            if(success.error == 1){
              that.$layer.open({
                type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
                title: '提示',
                content: success.result,
                shade: true,//是否显示遮罩
                shadeClose: false,//点击遮罩是否关闭
              })
            }else{
              console.log(success)
              that.$layer.open({
                type: 0,
                title: '提示',
                content: success.msg,
                shade: true,//是否显示遮罩
                shadeClose: false,//点击遮罩是否关闭
              })
            }
          })
        }

      }

    },
    updated:function () {
      var rowNum=$(".ArticleText").val().split("\n").length;
      $(".ArticleText").css("height",rowNum*26  + "px")
    }
  }
</script>
