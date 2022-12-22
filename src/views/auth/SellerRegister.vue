<template>
  <div class="register px-8">
    <Dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '80vw' }"
      :style="{ width: '30vw' }"
      position="top"
    >
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i
          class="pi pi-check-circle"
          :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5>Registration Successful!</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          Your account is registered under name <b>{{ state.name }}</b> ; it'll
          be valid next 30 days without activation. Please check
          <b>{{ state.email }}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <Button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>
    <Card class="card">
      <template #content>
        <div class="grid mr-1">
          <div class="col-9">
            <ScrollPanel ref="panel" style="height: 550px">
              <Divider id="Seller Info" align="center">
                <span class="p-tag">Seller info</span>
              </Divider>

              <h5>Please choose a seller type</h5>
              <Fieldset
                class="mb-3"
                legend="Individual"
                :toggleable="!v$.crn.$model"
                :collapsed="true"
              >
                <form
                  @submit.prevent="handleSubmit(!v$.$invalid)"
                  class="p-fluid px-2"
                >
                  <div class="field">
                    <div class="p-float-label">
                      <InputText
                        id="name"
                        v-model="v$.name.$model"
                        :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                      />
                      <label
                        for="name"
                        :class="{ 'p-error': v$.name.$invalid && submitted }"
                        >Name*</label
                      >
                    </div>
                    <small
                      v-if="
                        (v$.name.$invalid && submitted) ||
                          v$.name.$pending.$response
                      "
                      class="p-error"
                      >{{
                        v$.name.required.$message.replace('Value', 'Name')
                      }}</small
                    >
                  </div>
                  <div class="field">
                    <div class="p-float-label">
                      <InputText
                        id="id"
                        v-model="v$.id.$model"
                        :class="{ 'p-invalid': v$.id.$invalid && submitted }"
                      />
                      <label
                        for="id"
                        :class="{ 'p-error': v$.id.$invalid && submitted }"
                        >id*</label
                      >
                    </div>
                    <small
                      v-if="
                        (v$.id.$invalid && submitted) ||
                          v$.id.$pending.$response
                      "
                      class="p-error"
                      >{{
                        v$.id.required.$message.replace('Value', 'ID')
                      }}</small
                    >
                  </div>
                </form>
              </Fieldset>

              <Fieldset
                legend="Registered Business"
                :toggleable="true"
                :collapsed="true"
              >
                <form
                  @submit.prevent="handleSubmit(!v$.$invalid)"
                  class="p-fluid px-2"
                >
                  <div class="field">
                    <div class="p-float-label">
                      <InputText
                        id="companyName"
                        v-model="v$.companyName.$model"
                        :class="{
                          'p-invalid': v$.companyName.$invalid && submitted
                        }"
                      />
                      <label
                        for="companyName"
                        :class="{
                          'p-error': v$.companyName.$invalid && submitted
                        }"
                        >Company Name*</label
                      >
                    </div>
                    <small
                      v-if="
                        (v$.companyName.$invalid && submitted) ||
                          v$.companyName.$pending.$response
                      "
                      class="p-error"
                      >{{
                        v$.companyName.required.$message.replace(
                          'Value',
                          'Name'
                        )
                      }}</small
                    >
                  </div>
                  <div class="field">
                    <div class="p-float-label">
                      <InputText
                        id="crn"
                        v-model="v$.crn.$model"
                        :class="{ 'p-invalcrn': v$.crn.$invalcrn && submitted }"
                      />
                      <label
                        for="crn"
                        :class="{ 'p-error': v$.crn.$invalcrn && submitted }"
                        >crn*</label
                      >
                    </div>
                    <small
                      v-if="
                        (v$.crn.$invalid && submitted) ||
                          v$.crn.$pending.$response
                      "
                      class="p-error"
                      >{{
                        v$.crn.required.$message.replace('Value', 'ID')
                      }}</small
                    >
                  </div>
                </form>
              </Fieldset>

              <Divider id="Shop Info" align="center">
                <span class="p-tag">Shop info</span>
              </Divider>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor
                magna eget est lorem. Amet consectetur adipiscing elit ut. Nam
                libero justo laoreet sit amet. Pharetra massa massa ultricies mi
                quis hendrerit dolor magna. Est ultricies integer quis auctor
                elit sed vulputate. Consequat ac felis donec et. Tellus orci ac
                auctor augue mauris. Semper feugiat nibh sed pulvinar proin
                gravida hendrerit lectus a. Tincidunt arcu non sodales neque
                sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin
                aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus
                sit amet dictum sit amet. Tristique senectus et netus et
                malesuada fames ac turpis egestas. Et tortor consequat id porta
                nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit
                adipiscing bibendum est ultricies integer. Mattis aliquam
                faucibus purus in massa tempor nec.
              </p>
              <Divider id="Logistic Info" align="center">
                <span class="p-tag">Logistic info</span>
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor
                magna eget est lorem. Amet consectetur adipiscing elit ut. Nam
                libero justo laoreet sit amet. Pharetra massa massa ultricies mi
                quis hendrerit dolor magna. Est ultricies integer quis auctor
                elit sed vulputate. Consequat ac felis donec et. Tellus orci ac
                auctor augue mauris. Semper feugiat nibh sed pulvinar proin
                gravida hendrerit lectus a. Tincidunt arcu non sodales neque
                sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin
                aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus
                sit amet dictum sit amet. Tristique senectus et netus et
                malesuada fames ac turpis egestas. Et tortor consequat id porta
                nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                Eget egestas purus viverra accumsan in nisl nisi. Suscipit
                adipiscing bibendum est ultricies integer. Mattis aliquam
                faucibus purus in massa tempor nec.
              </p>
            </ScrollPanel>
          </div>
          <div class="col-3">
            <div class="grid">
              <Button
                v-for="(item, index) in buttons"
                :id="item.id"
                :key="index"
                v-bind="item.props"
                :class="[
                  item.class,
                  item.prevOffset() < currentScrollPos &&
                  currentScrollPos < item.offset()
                    ? 'p-button-secondary'
                    : 'p-button-info'
                ]"
                @click="item.click()"
              />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import CountryService from '@/services/CountryService.ts'

export default {
  setup () {
    //scroll logics
    const panel = ref(null)
    const currentScrollPos = ref(0)
    const offsets = ref({ sec0: '', sec1: '', sec2: '', sec3: '' })
    const buttons = computed(() => [
      {
        id: 'Seller Info',
        props: {
          type: 'button',
          label: 'Seller Info',
          badge: '8'
        },
        class: ['mb-3 col-12 flex-grow-1 h-8rem'],
        // offset: offsets.value[0],
        prevOffset: () => offsets.value['sec0'] || 0,
        offset: () => offsets.value['sec1'] || 0,
        click () {
          document.getElementById('Seller Info').scrollIntoView()
        }
      },
      {
        id: 'Shop Info',
        props: {
          type: 'button',
          label: 'Shop Info',
          badge: '8'
        },
        class: 'mb-3 col-12 flex-grow-1 h-8rem',
        prevOffset: () => offsets.value['sec1'] || 0,
        offset: () => offsets.value['sec2'] || 0,
        click: () => {
          document.getElementById('Shop Info').scrollIntoView()
        }
      },
      {
        id: 'Logistic Info',
        props: {
          type: 'button',
          label: 'Logistic Info',
          badge: '8'
        },
        class: 'mb-3 col-12 flex-grow-1 h-8rem',
        prevOffset: () => offsets.value['sec2'] || 0,
        offset: () => offsets.value['sec3'] || 0,
        click: () => {
          document.getElementById('Logistic Info').scrollIntoView()
        }
      }
    ])

    //form logics
    const state = reactive({
      name: '',
      id: '',
      companyName: '',
      crn: '',
      accept: null,
      shopName: '',
      pickupAddr: ''
    })

    const rules = {
      name: { required },
      id: { required },
      companyName: { required },
      crn: { required },
      accept: { required }
    }

    const countryService = ref(new CountryService())

    const submitted = ref(false)
    const countries = ref()
    const showMessage = ref(false)
    const date = ref()
    const country = ref()

    const v$ = useVuelidate(rules, state)

    const handleSubmit = isFormValid => {
      submitted.value = true

      if (!isFormValid) {
        return
      }

      toggleDialog()
    }
    const toggleDialog = () => {
      showMessage.value = !showMessage.value

      if (!showMessage.value) {
        resetForm()
      }
    }
    const resetForm = () => {
      state.name = ''
      state.id = ''
      state.companyName = ''
      state.crn = ''
      state.date = null
      state.country = null
      state.accept = null
      submitted.value = false
    }

    onMounted(() => {
      panel.value.$refs.content.onscroll = e => {
        currentScrollPos.value = e.target.scrollTop
        offsets.value['sec0'] = 0
        offsets.value['sec1'] = e.target.childNodes[1].offsetTop
        offsets.value['sec2'] = e.target.childNodes[3].offsetTop
        offsets.value['sec3'] = e.target.childNodes[5].offsetTop
      }
      countryService.value.getCountries().then(data => (countries.value = data))
    })

    return {
      state,
      v$,
      handleSubmit,
      toggleDialog,
      submitted,
      countries,
      showMessage,
      date,
      country,
      panel,
      buttons,
      currentScrollPos
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss'; //Here i add extra "./"(current directory)
.register {
  .card {
    border-radius: 10px;
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
