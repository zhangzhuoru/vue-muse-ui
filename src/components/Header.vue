<template>
  <div class="header">
      <mu-avatar style="margin-right: 20px;background-color: #fff;color: #000;">
          <mu-icon value="account_circle"></mu-icon>
      </mu-avatar>
      <mu-menu cover>
          <div color="primary">admin</div>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-title>详情</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>退出</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    align-items: center;
    padding-right: 30px;
    width: 100%;
    height: 64px;
    line-height: 64px;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
    background-color: #2196f3;
    color: #fff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  }

</style>
