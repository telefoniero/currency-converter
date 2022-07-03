<script setup>
import CurrencyInput from '@/components/partials/CurrencyInput.vue'
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  coef: Number
})

const values = reactive({
  initial: 0,
  converted: 0
})

function exchange(evt, forwards) {
  if (forwards) {
    values.converted = +(evt * props.coef).toFixed(2)
  } else {
    values.initial = +(evt / props.coef).toFixed(2)
  }
}
</script>

<template>
  <CurrencyInput :value="values.initial" @input="exchange($event, true)" />

  <pre>{{ values }}</pre>
</template>
