<template>
  <Card class="m-3 flex">
    <template #title>
      <slot name="header"> </slot>
    </template>

    <template #content>
      <div class="neg-m-5">
        <div class="card">
          <div class="flex card-container blue-container overflow-hidden">
            <div class="left-bar flex-none flex m-2 px-2 py-3 border-round">
              <slot name="left-bar"> PrimeFlex Left </slot>
            </div>
            <div
              class="flex-grow-1 flex align-items-center justify-content-center font-bold text-white m-2 py-3 border-round"
            >
              <slot name="content"> </slot>
            </div>

            <slot name="right-bar">
              <div
                class="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round"
              >
                PrimeFlex Right
              </div>
            </slot>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <slot name="footer-bar"> </slot>
    </template>
  </Card>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const dockBasicItems = ref([
      {
        label: 'Finder',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'App Store',
        icon: 'demo/images/dock/appstore.svg'
      },
      {
        label: 'Photos',
        icon: 'demo/images/dock/photos.svg'
      },
      {
        label: 'Trash',
        icon: 'demo/images/dock/trash.png'
      }
    ])

    return { dockBasicItems }
  }
})
</script>
<style lang="scss" scoped>
.neg-m-5 {
  margin-top: -20px;
}
.p-card {
  background: linear-gradient(148deg, white, transparent) !important;
  height: fit-content;
  width: 98%;
  border-radius: 30px;
  .p-card-body {
    width: 100%;
  }
}
.left-bar {
  max-width: 200px;
}
</style>
