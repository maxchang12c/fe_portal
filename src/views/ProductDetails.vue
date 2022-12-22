<template>
  <div class="product-detail flex-grow-1">
    <div class="grid w-full">
      <div class="product-detail-main-info col-9">
        <ScrollPanel style="width: 100%; height: 1000px">
          <DeferredContent>
            <Galleria
              :value="images"
              :numVisible="4"
              thumbnailsPosition="left"
              containerStyle="max-width: 640px"
            >
              <template #item="slotProps">
                <img
                  :src="slotProps.item.itemImageSrc"
                  :alt="slotProps.item.alt"
                  width="500"
                  style="display: block;"
                />
              </template>
              <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                  <img
                    :src="slotProps.item.thumbnailImageSrc"
                    :alt="slotProps.item.alt"
                    width="100"
                    style="display: block;"
                  />
                </div>
              </template>
            </Galleria>
          </DeferredContent>
          <DeferredContent>
            <Carousel :value="similiarProducts" :numVisible="3" :numScroll="3">
              <template #header>
                <h5>Basic</h5>
              </template>
              <template #item="slotProps">
                <div class="product-item">
                  <div class="product-item-content">
                    <div class="mb-3">
                      <img
                        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                        :alt="slotProps.data.name"
                        class="product-image"
                      />
                    </div>
                    <div>
                      <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                      <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                      <span
                        :class="
                          'product-badge status-' +
                            slotProps.data.inventoryStatus.toLowerCase()
                        "
                        >{{ slotProps.data.inventoryStatus }}</span
                      >
                      <div class="car-buttons mt-5">
                        <Button
                          icon="pi pi-search"
                          class="p-button p-button-rounded mr-2"
                        />
                        <Button
                          icon="pi pi-star-fill"
                          class="p-button-success p-button-rounded mr-2"
                        />
                        <Button
                          icon="pi pi-cog"
                          class="p-button-help p-button-rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Carousel>
          </DeferredContent>
            <DeferredContent>
            <Carousel :value="similiarProducts" :numVisible="3" :numScroll="3">
              <template #header>
                <h5>Basic</h5>
              </template>
              <template #item="slotProps">
                <div class="product-item">
                  <div class="product-item-content">
                    <div class="mb-3">
                      <img
                        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                        :alt="slotProps.data.name"
                        class="product-image"
                      />
                    </div>
                    <div>
                      <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                      <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                      <span
                        :class="
                          'product-badge status-' +
                            slotProps.data.inventoryStatus.toLowerCase()
                        "
                        >{{ slotProps.data.inventoryStatus }}</span
                      >
                      <div class="car-buttons mt-5">
                        <Button
                          icon="pi pi-search"
                          class="p-button p-button-rounded mr-2"
                        />
                        <Button
                          icon="pi pi-star-fill"
                          class="p-button-success p-button-rounded mr-2"
                        />
                        <Button
                          icon="pi pi-cog"
                          class="p-button-help p-button-rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Carousel>
          </DeferredContent>
          <!-- <ScrollTop
            target="parent"
            :threshold="100"
            class="custom-scrolltop"
            icon="pi pi-arrow-up"
          /> -->
        </ScrollPanel>
      </div>
      <div class="col-3 product-detail-second-info">
        <ScrollPanel style="width: 100%; height: 100%">
        <div class="">
something
        </div>

          <ScrollTop
            target="parent"
            :threshold="100"
            class="custom-scrolltop"
            icon="pi pi-arrow-up"
          />
        </ScrollPanel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: null,
      similiarProducts: null
    }
  },
  galleriaService: null,
  mounted () {
    this.images = [
      {
        itemImageSrc: require('@/assets/main_bg.png'),
        thumbnailImageSrc: require('@/assets/main_bg.png'),
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: require('@/assets/Avarice_logo.png'),
        thumbnailImageSrc: require('@/assets/Avarice_logo.png'),
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: require('@/assets/main_bg.png'),
        thumbnailImageSrc: require('@/assets/main_bg.png'),
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: require('@/assets/main_bg.png'),
        thumbnailImageSrc: require('@/assets/main_bg.png'),
        alt: 'Description for Image 4',
        title: 'Title 4'
      }
    ]
    this.similiarProducts = [
      { name: 'game', price: '2.00', inventoryStatus: 'low stock' },
      { name: 'game', price: '2.00', inventoryStatus: 'low stock' },
      { name: 'game', price: '2.00', inventoryStatus: 'low stock' },
      { name: 'game', price: '2.00', inventoryStatus: 'low stock' }
    ]
  }
}
</script>
