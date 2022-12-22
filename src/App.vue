<template>
  <div class="bg fixed overflow-y-auto">
    <slot name="header-row">
    </slot>
    <router-view></router-view>
    <slot name="footer-row">
      <div class="footer">
        
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
<style lang="scss">
#app {
  height: 100vh;
}
body {
  margin: 0px;
}

.bg {
  height: 100%;
  background: linear-gradient(
    214deg,
    rgb(74.51% 65.882% 99.608%) 0%,
    rgb(74.494% 65.882% 99.608%) 6.25%,
    rgb(74.383% 65.881% 99.609%) 12.5%,
    rgb(74.082% 65.877% 99.61%) 18.75%,
    rgb(73.497% 65.87% 99.614%) 25%,
    rgb(72.53% 65.859% 99.62%) 31.25%,
    rgb(71.086% 65.841% 99.628%) 37.5%,
    rgb(69.067% 65.817% 99.64%) 43.75%,
    rgb(66.373% 65.785% 99.656%) 50%,
    rgb(65.743% 68.583% 99.677%) 56.25%,
    rgb(65.692% 72.83% 99.703%) 62.5%,
    rgb(65.628% 78.044% 99.734%) 68.75%,
    rgb(65.553% 84.336% 99.772%) 75%,
    rgb(65.463% 91.824% 99.817%) 81.25%,
    rgb(65.358% 99.87% 99.108%) 87.5%,
    rgb(65.237% 99.93% 88.97%) 93.75%,
    rgb(65.098% 100% 77.255%) 100%
  ) !important;

  width: 100%;
}
</style>
