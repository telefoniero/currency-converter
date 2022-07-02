<script setup>
import { ref } from 'vue'

import CurrencySelect from '@/components/CurrencySelect.vue'
import CurrencyInput from '@/components/CurrencyInput.vue'

const data = ref('12332')
</script>

<template>
  <CurrencySelect />
  <CurrencySelect />
  <CurrencyInput v-model="data" />
  {{ data }}
</template>
