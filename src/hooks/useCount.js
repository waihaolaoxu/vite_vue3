import { ref, computed } from "vue";
export default function useCount(initValue = 1) {
    const count = ref(initValue);

    const increase = (delta) => {
        if (typeof delta !== "undefined") {
            count.value += delta;
        } else {
            count.value += 1;
        }
    };
    const multiple = computed(() => count.value * 2);

    const decrease = (delta) => {
        if (typeof delta !== "undefined") {
            count.value -= delta;
        } else {
            count.value -= 1;
        }
    };

    return {
        count,
        multiple,
        increase,
        decrease,
    };
}