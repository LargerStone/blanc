  <template>
    <div id="md">
      <div class="row">
        <div class="col-xs-3">
          <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125" v-for="mdtitlelist in mdtitlelist" :key="mdtitlelist.title">
            <li @click="findmdtext(mdtitlelist)">
              <a href="javascript:;">
              {{mdtitlelist.title}}
            </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-9">
          <div class="mdText"></div>
        </div>
      </div>
    </div>
	</template>
	<script>
    import marked from 'marked'
    export default {
      name: 'md',
      data:function(){
       return{
         mdtitlelist:[]
       }
      },
      mounted:function(){
        this.findmdlist();
      },
      methods:{
        findmdlist:function () {
          var  that= this
          this.$api.post('/php/app/showMd.php',{},function (success){
            if(success.error == 1){
              that.mdtitlelist = success.result.md
              //console.log(that.mdtitlelist)
            }else{
              console.log(success)
            }
          })
        },
        findmdtext:function (mdtitlelist){

            $(".mdText").html(marked(mdtitlelist.text))


        }
      },
    }
	</script>
