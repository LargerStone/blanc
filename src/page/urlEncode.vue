


	<template>
    <div id="edcode">
        <div class="row">
          <div class="col-xs-4">
            <textarea class="form-control encode" name="encode" rows="5" required placeholder="请输入加密或者解密文本"></textarea>
          </div>
          <div class="col-xs-4">
            <textarea class="form-control decode" name="decode" rows="5" placeholder="这里显示的是结果"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="encodeBtn btn btn-default" @click="encode()">URL加密</button>
            <button class="decodeBtn btn btn-default" @click="decode()">URL解密</button>
          </div>
        </div>

    </div>

	</template>
	<script>
    export default {
      name: 'edcode',
      mounted:function(){

      },
      methods:{
        encode:function () {
          var encode = $(".encode").val()
          var condition = {"encode":encode,"code":0}
          this.$api.post('/php/urlencode.php',condition,function (success){
            if(success.error == 1){
              $(".decode").val(success.result)
            }else{
              $(".decode").val(success.msg)
            }
          })
        },
        decode:function () {
          var encode = $(".encode").val()
          var condition = {"encode":encode,"code":1}
          this.$api.post('/php/urlencode.php',condition,function (success){
            if(success.error == 1){
              $(".decode").val(success.result)
            }else{
              $(".decode").val(success.msg)
            }
          })

        }

      },
      created:function(){

      }
    }


	</script>
