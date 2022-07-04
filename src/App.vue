<script setup>
import { ref, reactive } from 'vue'
import useCurrencies from '@/composables/use/currencies'
import useLocaleCurrency from '@/composables/use/localeCurrency'
import watchEffectOnce from '@/composables/helpers/watchEffectOnce'
import provideMany from '@/composables/helpers/provideMany'

import CurrencyExchanger from '@/components/CurrencyExchanger.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import Display from '@/components/Display.vue'

const coef = ref(0)
const currencies = ref([])
const convert = reactive({
  from: null,
  to: null
})
const loader = ref(null)

provideMany({ coef, convert, currencies })

watchEffectOnce(async () => {
  Promise.all([useLocaleCurrency(), useCurrencies()]).then(data => {
    convert.from = data[0]
    currencies.value = data[1]
    loader.value.classList.add('_hidden')
  })
})
</script>

<template>
  <div class="loader" ref="loader">
    <div class="col-3">
      <div class="snippet" data-title=".dot-pulse">
        <div class="stage">
          <div class="dot-pulse"></div>
        </div>
      </div>
    </div>
  </div>
  <Display />
  <CurrencyExchanger />
  <CurrencySelector @update-coef="coef = $event" />
</template>
