<template>
  <div class="hello">
    <button @click="get">请求</button>
    <input type="text" placeholder="等待内容" style="width:90%" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg:''
    }
  },
  methods:{
    get(){
        var that=this;
        that.$qingqiu({
          url:'../static/a.txt',
          method:'get'
        })
          .then(function (res) {
            that.msg=res.data;
          })
          .catch(function (err) {
            console.log(err)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
