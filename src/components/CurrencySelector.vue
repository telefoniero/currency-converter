<script setup>
import CurrencySelect from '@/components/UI/CurrencySelect.vue'
import useCoef from '@/composables/useCoef'
import useLocaleCurrency from '@/composables/useLocaleCurrency'
import useEffectOnce from '@/composables/useEffectOnce'
import useCurrencies from '@/composables/useCurrencies'
import { reactive, watch, ref } from 'vue'

const convert = reactive({
  from: '',
  to: ''
})
const currencies = ref([])

useEffectOnce(async () => {
  convert.from = await useLocaleCurrency()
  currencies.value = await useCurrencies()
})

const emit = defineEmits(['get-coef'])

watch(convert, async obj => {
  if (Object.values(obj).every(v => !!v)) {
    const coef = await useCoef(obj)
    emit('get-coef', coef)
  }
})
</script>

<template>
  <CurrencySelect
    v-for="(value, key) in convert"
    :key="key"
    v-model="convert[key]"
    :options="currencies"
  />
</template>
