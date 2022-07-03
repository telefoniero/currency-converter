<script setup>
import CustomSelect from 'vue-select'

const emit = defineEmits(['update'])
</script>

<template>
  <CustomSelect
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
