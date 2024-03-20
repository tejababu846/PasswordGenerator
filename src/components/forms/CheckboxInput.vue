<template>
  <div>
    <div
      v-for="(option, i) in options"
      :key="option.id"
      class="checkbox-option d-flex align-items-center"
      :class="{'mt-2': i}"
    >
      <input
        v-model="checkboxValues[option.id]"
        :id="option.id.toString()"
        :name="option.label"
        type="checkbox"
        class="me-3"
      />
      <label class="form-base-text-color" for="coding">{{option.label}}</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type IOptionCheckbox, type ICheckboxValues } from "@/interfaces/forms/SecurityLevels";
import { type Ref, ref, watch } from "vue";

const checkboxValues: Ref<ICheckboxValues> = ref({})

const props = defineProps({
  options: {
    type: Array<IOptionCheckbox>,
    required: false,
    default: () => []
  }
});

const emit = defineEmits(["update:modelValue"]);
watch(
  () => checkboxValues.value,
  (val: ICheckboxValues) => {

    if(!Object.values(checkboxValues.value).filter(c => c).length) {
      const tempCheckboxValue: ICheckboxValues = {};
      
      props.options.forEach(option => {
        tempCheckboxValue[option.id] = true;
      })

      setTimeout(()=> checkboxValues.value = tempCheckboxValue, 5)
    } else {
      emit("update:modelValue", val);
    }

  },
  { 
    deep: true,
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.checkbox-option {
  $base-transition: all 0.3s;
  $input-size: 18px;

  input[type=checkbox] {
    position: relative;
    cursor: pointer;
    height: $input-size;
    width: $input-size;

    transition: $base-transition;
    
    &:hover {
      &:before {
        transition: $base-transition;
        border-color: var(--highlight-color);
      }
    }

    &:before {
      transition: $base-transition;

      content: "";
      display: block;
      position: absolute;
      width: $input-size;
      height: $input-size;
      top: 0;
      left: 0;
      border: 2px solid rgba(255, 255, 255, 0.699);
      background-color: var(--main-color-form);
      padding: 1px;
    }

    &:checked {
      &:before {
        background-color: var(--highlight-color);
        border-color: transparent;
      }
      
      &:after {
        content: "";
        display: block;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 2.5px 2.5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 4px;
        left: 6px;
      }
    }
  }

  label {
    font-size: 1.1rem;  
  }
}
</style>@/interfaces/forms/SecurityLevels