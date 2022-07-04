<script setup>
import { inject, computed } from 'vue'
import { round } from '@/assets/js/helpers'

const coef = inject('coef')
const displayableCoef = computed(() => round(coef.value, 3))
</script>

<template>
  <div class="display">{{ displayableCoef }}</div>
</template>
