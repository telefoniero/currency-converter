<script setup>
import { inject } from 'vue'

const emit = defineEmits(['update'])

const currencies = inject('currencies')
</script>

<template>
  <CustomSelect
    :options="currencies"
    label="description"
    placeholder="Выберите валюту"
    @option:selected="emit('update', $event)"
    :reduce="option => option.code" 
  >
    <!-- eslint-disable-next-line vue/no-unused-vars  -->
    <template #no-options="{ search, searching, loading }">
      Валюта не найдена
    </template>
  </CustomSelect>
</template>
