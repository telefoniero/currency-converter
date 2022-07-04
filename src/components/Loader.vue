<script setup>
defineProps({
  active: Boolean
})
</script>

<template>
  <div class="loader" :class="{ _hidden: !active }" ref="loader">
    <div class="col-3">
      <div class="snippet" data-title=".dot-pulse">
        <div class="stage">
          <div class="dot-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>
