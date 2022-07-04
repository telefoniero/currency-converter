<script setup>
import CurrencySelect from '@/components/UI/CurrencySelect.vue'
import useCoef from '@/composables/use/coef'
import useLocaleCurrency from '@/composables/use/localeCurrency'
import useEffectOnce from '@/composables/helpers/useEffectOnce'
import useCurrencies from '@/composables/use/currencies'
import { reactive, watch, ref } from 'vue'

const convert = reactive({
  from: null,
  to: null
})
const currencies = ref([])

useEffectOnce(async () => {
  convert.from = await useLocaleCurrency()
  currencies.value = await useCurrencies()
  // Promise.all([useLocaleCurrency(), useCurrencies()]).then(val => {
  //   console.log(val)
  // })
})

const emit = defineEmits(['update-coef'])

watch(convert, async obj => emit('update-coef', await useCoef(obj)))
</script>

<template>
  <div class="selector">
    <CurrencySelect
      v-for="(value, key) in convert"
      :key="key"
      class="selector__select"
      v-model="convert[key]"
      :options="currencies"
    />
  </div>
</template>
