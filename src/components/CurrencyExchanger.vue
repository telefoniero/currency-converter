<script setup>
import CurrencyInput from '@/components/UI/CurrencyInput.vue'
import { computed, inject, reactive, toRef, watch } from 'vue'
import { round, inverseNum } from '@/assets/js/helpers'

const coef = inject('coef')
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
  <div class="exchanger">
    <CurrencyInput
      v-for="(value, index) of values"
      class="exchanger__input"
      :key="index"
      v-model.number="values[index].num"
      @input="exchange($event, index)"
    />
  </div>
</template>
