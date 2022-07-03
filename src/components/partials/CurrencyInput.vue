<script setup>
import { IMaskComponent } from 'vue-imask'

defineProps({
  disabled: Boolean,
  value: Number
})

const emit = defineEmits(['input'])
</script>

<template>
  <IMaskComponent
    placeholder="Введите значение"
    :mask="Number"
    :value="value.toString()"
    radix="."
    @input="emit('input', +$event.target.value)"
  />
</template>
