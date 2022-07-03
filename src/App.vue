<script setup>
import { ref, watchEffect, provide } from 'vue'
import useCurrencies from '@/composables/use/currencies'

import CurrencyExchanger from '@/components/CurrencyExchanger.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'

const coef = ref(0)
</script>

<template>
  <div>{{ coef }}</div>
  <CurrencyExchanger :coef="coef" />
  <CurrencySelector @get-coef="coef = $event" />
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
