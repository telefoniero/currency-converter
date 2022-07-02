<script setup>
import useCurrencies from '@/composables/useCurrencies'
import {defineEmits} from 'vue';

const emit = defineEmits(['update'])

const currencies = await useCurrencies()
</script>

<template>
  <CustomSelect
    :options="currencies"
    label="description"
    placeholder="Выберите валюту"
    @option:selected="emit('update', $event)"
  >
    <!-- eslint-disable-next-line vue/no-unused-vars  -->
    <template #no-options="{ search, searching, loading }">
      Валюта не найдена
    </template>
  </CustomSelect>
</template>