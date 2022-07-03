<script setup>
import { IMaskComponent } from 'vue-imask'

defineProps({
  modelValue: Number,
  // adding to delete 'modelmodifiers' html-attribute
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
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
    class="input"
    :mask="Number"
    :value="modelValue.toString()"
    radix="."
    @input="inputMasked"
  />
</template>
