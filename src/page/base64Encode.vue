
		<style>
			textarea{width:400px;height:300px;}
		</style>

	<template>
			<textarea class="encode" name="encode"></textarea>
			<textarea class="decode" name="decode"></textarea>
			<button class="encodeBtn">base64加密</button>
			<button class="decodeBtn">base64解密</button>
	</template>
	<!--<script src="jquery-1.11.0.js"></script>-->
	<!--<script>-->
		<!--$(".encodeBtn").click(function(){-->
			<!--var encode = $(".encode").val()-->
			<!--$.ajax({-->
                <!--url:"base64.php",-->
                <!--data:{encode:encode,code:0},-->
                <!--type:'post',-->
                <!--dataType:'json',-->
                <!--success:function(data){-->
                    <!--if(data.error == 1){-->
                    	<!--$(".decode").val(data.msg)-->
                    <!--}-->
                <!--},-->
                <!--error:function(data){-->
                    <!--console.log("错误："+JSON.stringify(data));-->
                <!--}-->
            <!--})-->
		<!--})-->
		<!--$(".decodeBtn").click(function(){-->
			<!--var encode = $(".encode").val()-->
			<!--$.ajax({-->
                <!--url:"base64.php",-->
                <!--data:{encode:encode,code:1},-->
                <!--type:'post',-->
                <!--dataType:'json',-->
                <!--success:function(data){-->
                    <!--if(data.error == 1){-->
                    	<!--$(".decode").val(data.msg)-->
                    <!--}-->
                <!--},-->
                <!--error:function(data){-->
                    <!--console.log("错误："+JSON.stringify(data));-->
                <!--}-->
            <!--})-->
		<!--})-->
	<!--</script>-->


