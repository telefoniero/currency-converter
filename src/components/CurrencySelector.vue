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
})

const emit = defineEmits(['get-coef'])

watch(convert, async obj => emit('get-coef', await useCoef(obj)))
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
