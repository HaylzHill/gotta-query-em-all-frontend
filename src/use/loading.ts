import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue'

const useLoading = () => {
  const interval = ref(null);
  const percentage = ref(0)

  const countUp = () => {
    if (percentage.value === 100) {
      return;
    }

    percentage.value += 10;
  }

  onMounted(() => {
    interval.value = window.setInterval(countUp, 500)
  })

  onUnmounted(() => {
    window.clearInterval(interval.value)
  })

  return {
    percentage,
  }
}

export default useLoading;

