<script setup>
import { inject } from 'vue'
import CustomSelect from 'vue-select'

const emit = defineEmits(['update'])
const disabled = inject('isLoading')
</script>

<template>
  <CustomSelect
    label="description"
    placeholder="Выберите валюту"
    @option:selected="emit('update', $event)"
    :reduce="option => option.code"
    :disabled="disabled"
  >
    <!-- eslint-disable-next-line vue/no-unused-vars  -->
    <template #no-options="{ search, searching, loading }">
      Валюта не найдена
    </template>
  </CustomSelect>
</template>
