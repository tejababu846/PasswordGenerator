<template>
    <div class="wrapper-text-input form-bg form-field-space py-3">
        <div class="row">
            <input
                class="col-10 col-lg-11 form-base-text-color"
                v-model="text"
                type="text"
                name="input-text-password"
                id="input-text-password"
                placeholder="P4$5W0rD !"
            >
            <button @click="copyText" class="form-highlight-text col-2 col-lg-1">
                <FontAwesomeIcon :icon="faCopy" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { type Ref, ref, watch, props } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: ""
    }
})

const text: Ref<string> =  ref("");

const copyText: () => void = (e) => {
    e.preventDefault();
  const element = document.querySelector('#input-text-password');

  if(element) {
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy')
  }
};

const emit = defineEmits(["update:modelValue"]);
watch(() => text.value, (val: string) => emit("update:modelValue", val));

watch(
    () => props.modelValue,
    (val: string) => text.value = val,
)
</script>


<style lang="scss" scoped>
.wrapper-text-input {
    & > :first-child > * {
        font-size: 1.6rem;

        background: none !important;
        text-decoration: none !important;
        border: none !important;
        outline: none;
    }

    & button {
        transition: all 0.3s;

        &:hover {
            transition: all 0.3s;
            cursor: pointer;
            color: white;
        }
    }
}
</style>