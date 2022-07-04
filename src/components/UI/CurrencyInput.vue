<script setup>
import { IMaskComponent } from 'vue-imask'
import { inject } from 'vue'

defineProps({
  modelValue: Number,
  // added to delete 'modelmodifiers' html-attribute
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
})

const disabled = inject('isLoading')

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
    :disabled="disabled"
  />
</template>
