import { watchEffect } from 'vue'

export default function (callback) {
  const unwatch = watchEffect(callback)
  unwatch()
}
