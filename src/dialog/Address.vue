<template>
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
        Your account is registered under name <b>{{ state.name }}</b> ; it'll be
        valid next 30 days without activation. Please check
        <b>{{ state.email }}</b> for activation instructions.
      </p>
    </div>
    <template #footer>
      <div class="flex justify-content-center">
        <Button label="OK" @click="toggleDialog" class="p-button-text" />
      </div>
    </template>
  </Dialog>
</template>
<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import CountryService from '@/services/CountryService.ts'
export default {
    setup(){
        
    }
}
</script>
