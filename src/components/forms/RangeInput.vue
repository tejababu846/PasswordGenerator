<template>
  <div class="wrapper-range-input" :style="`--current-range: ${currentPercentageRange}`">
    <div class="labels row align-items-center mb-2">
      <label :for="label" class="col-10 col-lg-11 form-base-text-color">
        {{ label }}
      </label>
      
      <div class="range-val form-highlight-text col-2 col-lg-1">
        {{ currentValue }}
      </div>
    </div>

    <input
      v-model="currentValue"
      type="range"
      :name="label"
      :min="min"
      :max="max"
    >
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type Ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  min: {
    type: Number,
    required: false,
    default: 0
  },
  max: {
    type: Number,
    required: false,
    default: 100
  },
});

const currentValue: Ref<number> = ref(props.min);

const currentPercentageRange = computed(() => {
  const currentValueWithoutOffset = currentValue.value - props.min;
  const maxValueWithoutOffset = props.max - props.min;
  const baseValue =  currentValueWithoutOffset / maxValueWithoutOffset; // 1

  return `${(baseValue) * 100}%`
})

const emit = defineEmits(["update:modelValue"]);
watch(
  () => currentValue.value,
  (val: number) => emit("update:modelValue", val),
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.wrapper-range-input {
  --current-range: 0%;

  & .labels {
    label {
      font-size: 1.1rem;
    }

    .range-val {
      font-size: 1.6rem;
    }
  }

  & input {
    width: 100%;
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin-right: 15px;
    height: 7px;
    background: var(--form-dark-highlight);
    border-radius: 0px;
    background-image: linear-gradient(var(--highlight-color), var(--highlight-color));
    background-size: var(--current-range) 100%;
    background-repeat: no-repeat;
  }

  input[type="range"]::-webkit-slider-thumb {
    --thumb-size: 25px;
    -webkit-appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background: var(--form-base-color);
    // cursor: ew-resize;
    cursor: pointer;
    transition: background .3s ease-in-out;
    border: 2px solid var(--form-base-color);

    &:hover {
      background: var(--form-dark-highlight);
      border-color: var(--highlight-color);
    }

  }

  // input[type=range]::-webkit-slider-runnable-track  {
  //     -webkit-appearance: none;
  //     box-shadow: none;
  //     border: none;
  //     background: transparent;
  // }
}
</style>
