


	<template>
    <div class="container">
      <div id="edcode">
        <div class="form-group">
          <label for="encode">请输入加密内容:</label>
          <textarea class="form-control encode" id="encode" name="encode" rows="5" required placeholder="请输入加密内容"></textarea>
        </div>
        <div class="form-group">
          <label for="decode">请输入解密内容:</label>
          <textarea class="form-control decode" id="decode" name="decode" rows="5" placeholder="请输入解密内容"></textarea>
      </div>

          <button class="encodeBtn btn btn-primary" @click="encode()">URL加密</button>
          <button class="decodeBtn btn btn-primary" @click="decode()">URL解密</button>
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
          this.$api.post('/php/app/urlEncode.php',condition,function (success){
            if(success.error == 1){
              $(".decode").val(success.result)
            }else{
              $(".decode").val(success.msg)
            }
          })
        },
        decode:function () {
          var encode = $(".decode").val()
          var condition = {"encode":encode,"code":1}
          this.$api.post('/php/app/urlEncode.php',condition,function (success){
            if(success.error == 1){
              $(".encode").val(success.result)
            }else{
              $(".encode").val(success.msg)
            }
          })

        }

      },
      created:function(){

      }
    }


	</script>
