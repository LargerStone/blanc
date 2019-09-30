<template>
  <div id="upload">
    <div class="row">
      <form id="submitform">
        <input type="file" name="file" @change="getUpload($event)"/>
        <a class="btn btn-default">提交</a>
      </form>

    </div>

  </div>

</template>
<script>
  export default {
    name: 'upload',
    data:function(){
      return{

      }
    },
    mounted:function(){


    },
    methods:{
      getUpload:function($event) {
        //console.log($event.target.files[0])
        // this.$api.post('/php/app/uploadDemo.php',$event.target.files[0],function (success){
        //   console.log(success)
        //   // if(success.error == 1){
        //   //   console.log(success)
        //   // }else{
        //   //   console.log(success)
        //   // }
        // })

          var formData = new FormData(document.getElementById("submitform"));

          $.ajax({
            url: "http://localhost/php/app/file/upload.php",
            data: formData,
            type: 'post',
            contentType: false,
            processData: false,
            dataType: 'json',

            success: function (res) {
              console.log(res)
            },
            error: function (res) {
              console.log(res)
            }
          })


      }



    },
  }
</script>
