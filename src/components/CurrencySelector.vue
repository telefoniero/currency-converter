<script setup>
import CurrencySelect from '@/components/partials/CurrencySelect.vue'
import useCoef from '@/composables/useCoef'
import useLocaleCurrency from '@/composables/useLocaleCurrency'
import { reactive, watch, watchEffect } from 'vue'

const convert = reactive({
  from: '',
  to: ''
})

const emit = defineEmits(['get-coef'])

const unwatch = watchEffect(
  async () => (convert.from = await useLocaleCurrency())
)
unwatch()

watch(convert, async obj => {
  if (Object.values(obj).every(v => !!v)) {
    const coef = await useCoef(obj)
    emit('get-coef', coef)
  }
})
</script>

<template>
  <CurrencySelect v-model="convert.from" />
  <CurrencySelect v-model="convert.to" />
</template>
