<script setup>
import { ref, watchEffect, provide } from 'vue'
import useCurrencies from '@/composables/use/currencies'

import CurrencyExchanger from '@/components/CurrencyExchanger.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import Display from '@/components/Display.vue'

const coef = ref(0)

provide('coef', coef)
</script>

<template>
  <Display />
  <CurrencyExchanger />
  <CurrencySelector @update-coef="coef = $event" />
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 3vw;
}
</style>
