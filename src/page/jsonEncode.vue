


	<template>
    <div id="jsoncode">
        <div class="row">
          <div class="col-xs-4">
            <input class="title" placeholder="请输入标题"/>
            <textarea class="form-control text" name="encode" rows="5" required placeholder="请输入内容"></textarea>
          </div>
          <div class="col-xs-4">
            <textarea class="form-control decode" name="decode" rows="5" placeholder="这里显示的是结果"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="encodeBtn btn btn-default" @click="jsoncode()">转json</button>
            <button class="encodeBtn btn btn-default" @click="jsondecode()">还原</button>
          </div>
        </div>

    </div>

	</template>
	<script>
    export default {
      name: 'jsoncode',
      mounted:function(){

      },
      methods:{
        jsoncode:function () {
          var title = $(".title").val()
          var text = $(".text").val()
          var condition = {};
          condition.title = title
          condition.text = text
          console.log(condition)
          $(".decode").val(JSON.stringify(condition))
          //$(".decode").val(JSON.parse(condition))



        },
        jsondecode:function () {
          //var condition = $(".text").val()
          //var x = JSON.parse(condition)
          //console.log(x.md[1].text)
        }
      },
      created:function(){

      }
    }


	</script>
