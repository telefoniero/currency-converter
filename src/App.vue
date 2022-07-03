<script setup>
import { ref, watchEffect, provide } from 'vue'
import useCurrencies from '@/composables/useCurrencies'

import CurrencyExchanger from '@/components/CurrencyExchanger.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'

const currencies = ref([])
provide('currencies', currencies)

const coef = ref(0)

const unwatch = watchEffect(
  async () => (currencies.value = await useCurrencies())
)
unwatch()
</script>

<template>
  <CurrencyExchanger :coef="coef" />
  <CurrencySelector @get-coef="coef = $event" />
  {{ coef }}
</template>
