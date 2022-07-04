import { provide } from 'vue'

export default function (data) {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      provide(key, data[key])
    }
  }
}
