function round(value, order) {
  return +value.toFixed(order)
}

function inverseNum(num) {
  return isFinite(1 / num) ? 1 / num : 0
}

export { round, inverseNum }
