<template>
  <div class="hello">
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        抗拒绝服务系统
      </mu-appbar>
       <mu-list toggle-nested>
        <mu-list-item button="" :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>概况</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>系统状态</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>DDOS阻断状态</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>设备信息</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>授权信息</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button="" :ripple="false" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>流量概况</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button="" :ripple="false" nested :open="open === 'info'" @toggle-nested="open = arguments[0] ? 'info' : ''">
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>日志</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button="" :ripple="false" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>流量情况</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button="" :ripple="false" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>网络配置</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: 'send'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 280px;
    height: 100vh;
    position: fixed;
    z-index: 201;
  }
.demo-list-wrap {
  width: 100%;
  height: 100%;
  max-width: 280px;
}
</style>
