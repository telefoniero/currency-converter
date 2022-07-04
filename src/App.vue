<script setup>
import { ref, reactive, watch, provide } from 'vue'
import useCurrencies from '@/composables/use/currencies'
import useLocaleCurrency from '@/composables/use/localeCurrency'
import useCoef from '@/composables/use/coef'
import watchEffectOnce from '@/composables/helpers/watchEffectOnce'
import provideMany from '@/composables/helpers/provideMany'

import CurrencyExchanger from '@/components/CurrencyExchanger.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import Display from '@/components/Display.vue'
import Loader from '@/components/Loader.vue'

const coef = ref(0)
const currencies = ref([])
const convert = reactive({
  from: null,
  to: null
})
const isLoading = ref(true)

watch(convert, obj => {
  isLoading.value = true
  useCoef(obj).then(res => {
    coef.value = res
    isLoading.value = false
  })
})

provideMany({ coef, convert, currencies, isLoading })

watchEffectOnce(() => {
  Promise.all([useLocaleCurrency(), useCurrencies()]).then(data => {
    convert.from = data[0]
    currencies.value = data[1]
    isLoading.value = false
  })
})
</script>

<template>
  <Loader :active="isLoading" />
  <Display />
  <CurrencyExchanger />
  <CurrencySelector @update-coef="coef = $event" />
</template>
