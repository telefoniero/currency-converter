<script setup>
import { inject, toRefs, computed } from 'vue'
import { round } from '@/assets/js/helpers'

const coef = inject('coef')
const isLoading = inject('isLoading')

const { from, to } = toRefs(inject('convert'))
const displayable = computed(() =>
  from.value && to.value && !isLoading.value
    ? `1 ${from.value} = ${round(coef.value, 3)} ${to.value}`
    : '?'
)
</script>

<template>
  <div class="display">
    {{ displayable }}
  </div>
</template>
