<script setup>
import CurrencySelect from '@/components/UI/CurrencySelect.vue'
import useCoef from '@/composables/use/coef'
import useLocaleCurrency from '@/composables/use/localeCurrency'
import useEffectOnce from '@/composables/helpers/watchEffectOnce'
import useCurrencies from '@/composables/use/currencies'
import { watch, ref, inject } from 'vue'

const convert = inject('convert')
const currencies = inject('currencies')

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
