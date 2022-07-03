<script setup>
import CurrencyInput from '@/components/UI/CurrencyInput.vue'
import { computed, reactive, toRef, watch } from 'vue'
import { round, inverseNum } from '@/assets/js/helpers'

const props = defineProps({
  coef: Number
})

const coef = toRef(props, 'coef')
const inverseCoef = computed(() => inverseNum(coef.value))

watch(coef, val => (values[1].num = round(values[0].num * val, 2)))

const values = reactive([
  {
    num: 0,
    coef: coef
  },
  {
    num: 0,
    coef: inverseCoef
  }
])

function exchange(evt, idx) {
  const convertableIndex = (idx + 1) % values.length
  const coef = values[idx].coef
  values[convertableIndex].num = round(values[idx].num * coef, 2)
}
</script>

<template>
  <CurrencyInput
    v-for="(value, index) of values"
    :key="index"
    v-model.number="values[index].num"
    @input="exchange($event, index)"
  />

  <pre>{{ values }}</pre>
</template>
