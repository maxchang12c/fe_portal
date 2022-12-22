<template>
  <div>
    <BasicLayout>
      <!-- <DeferredContent> -->
      <template #header>
        <div class="px-2 flex align-items-center justify-content-between">
          <div class="font-italic text-cyan-800">Avarice</div>
          <div class="flex align-items-center">
            <Button
              v-for="(item, key) of topNavItems"
              :key="key"
              class="p-button-secondary p-button-text mr-2"
              :label="item.label"
              @click="item.click"
            />
          </div>
        </div>
      </template>
      <template #content>
        <ProductDetails />
      </template>
      <!-- </DeferredContent> -->
    </BasicLayout>
  </div>
</template>

<script>
import { ref } from 'vue'
import BasicLayout from '@/templates/BasicLayout.vue'
import ProductDetails from '@/views/ProductDetails.vue'
export default {
  components: { BasicLayout,ProductDetails },
  setup () {
    const topNavItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: 'home',
        click: () => {
          // visibleRight.value = !visibleRight.value
        }
      },
      {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: 'another_route',
        click: () => {}
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: 'another_route',
        click: () => {}
      },
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: 'another_route',
        click: () => {}
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: 'another_route',
        click: () => {}
      }
    ]
    const panelItems = ref([
      {
        key: '0',
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            key: '0_0',
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                key: '0_0_0',
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                key: '0_0_1',
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            key: '0_1',
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            key: '0_2',
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        key: '1',
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            key: '1_0',
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            key: '1_1',
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            key: '1_2',
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            key: '1_3',
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        key: '2',
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            key: '2_0',
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            key: '2_1',
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            key: '2_2',
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                key: '2_2_0',
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    key: '2_2_0_0',
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                key: '2_2_1',
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        key: '3',
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            key: '3_0',
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                key: '3_0_0',
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                key: '3_0_0',
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            key: '3_1',
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                key: '3_1_0',
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      }
    ])
    const items = Array.from({ length: 1000 }, (_, i) => ({
      label: `Item #${i}`,
      value: i
    }))
    const selectedItem = ref('')
    const filteredItems = ref()
    const searchItems = event => {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      let query = event.query
      console.log('query', event.query)
      let _filteredItems = []

      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
          _filteredItems.push(item)
        }
      }

      filteredItems.value = _filteredItems
    }
    const products = Array.from({ length: 10 }).map(() => {
      return {
        name: 'bag',
        price: '20.00',
        description: 'this is a good bag',
        stock: '20',
        created: new Date(),
        status: 1,
        primeImage: require('@/assets/main_bg.png'),
        images: [require('@/assets/logo.png')],
        reviews: [
          {
            body: 'this is a good product',
            author: {
              name: 'mr bean'
            },
            rating: 5,
            created: new Date()
          }
        ]
      }
    })
    return {
      products,
      searchItems,
      selectedItem,
      filteredItems,
      items,
      panelItems,
      topNavItems
    }
  }
}
</script>
<style lang="scss" scoped>
.img-property {
  max-width: 100%;
}
.panel-menu {
  max-width: 150px;
}
::v-deep.autocomplete {
  input {
    flex-grow: 1;
  }
}
.product {
  &_card {
    border-radius: 12px;
    box-shadow: none;
  }
  &_card:hover {
    border: 2px solid green;
  }
  &_name {
    word-break: break-all;
    max-width: 100%;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  &_container {
    height: 100vh;
    overflow-y: auto;
  }
}
</style>
