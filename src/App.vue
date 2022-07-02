<template>
  <div>
    <Suspense>
      <CurrencyConverter />
    </Suspense>
  </div>
</template>

<script>
import CurrencyConverter from './components/CurrencyConverter.vue'

export default {
  name: 'App',
  components: {
    CurrencyConverter
  }
}
</script>
