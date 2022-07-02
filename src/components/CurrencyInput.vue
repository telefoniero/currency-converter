<script setup>
import { defineProps, defineEmits } from 'vue'
import { IMaskComponent } from 'vue-imask'

defineProps({
  modelValue: String,
  disabled: Boolean
})

const emit = defineEmits(['update:modelValue'])

function update(value) {
  if (value.slice(-1) !== '.') {
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <IMaskComponent
    placeholder="Введите значение"
    :mask="Number"
    radix="."
    :unmask="true"
    :value="modelValue"
    @complete="update"
  />
</template>
