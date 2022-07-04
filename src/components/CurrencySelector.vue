<script setup>
import CurrencySelect from '@/components/UI/CurrencySelect.vue'
import { inject } from 'vue'

const convert = inject('convert')
const currencies = inject('currencies')
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
