<script setup>
import { IMaskComponent } from 'vue-imask'

defineProps({
  disabled: Boolean,
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

function inputMasked(evt) {
  if (evt.target.value.match(/(^\d*\.?\d{0,2}$)/)) {
    emit('update:modelValue', evt.target.value || 0)
  }
}
</script>

<template>
  <IMaskComponent
    placeholder="Введите значение"
    :mask="Number"
    :value="modelValue.toString()"
    radix="."
    @input="inputMasked"
  />
</template>
