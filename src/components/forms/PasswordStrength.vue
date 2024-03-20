<template>
  <div class="form-item wrapper-password-strength form-black-highlight d-flex flex-lg-row flex-column align-items-lg-center justify-content-between px-4 py-3">
    <div class="mb-2 mb-lg-0">
      STRENGTH
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div
        class="form-base-text-color text-uppercase security-level-label me-2 me-lg-3"
      >
        {{ securityLevelsLabel[passwordSecurityLevel] }}
      </div>
      
      <div class="strength-chips d-flex align-items-center">
        <span
        v-for="i in 4"
        :key="i"
        :class="{
          'ms-2': i > 1,
          'active': i <= passwordSecurityLevel
        }"
        class="chip"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ICheckboxValues, type SecurityLevelsLabel } from "@/interfaces/forms/SecurityLevels";
import { computed, type ComputedRef, type PropType } from 'vue';

const props = defineProps({
  passwordSecurities: {
    type:  Object as PropType<ICheckboxValues>,
    required: false,
    default: () => ({})
  }
})

const passwordSecurityLevel: ComputedRef<number> = computed(() => Object.values(props.passwordSecurities).filter(c => c).length)

const securityLevelsLabel: SecurityLevelsLabel = {
  0: "weak",
  1: "weak",
  2: "medium",
  3: "safe",
  4: "great",
}
</script>

<style lang="scss" scoped>
.wrapper-password-strength {
  .security-level-label {
    font-size: 20px;
    min-height: 32px;
  }
  .strength-chips {
    .chip {
      $chip-width: 25px;
      display: inline-block;
      border: 1px solid white;
      height: $chip-width;
      width: calc($chip-width/5 * 2);
      background: transparent;

      transition: all 0.3s;
      
      &.active {
        border-color: var(--form-highlight-color-2);
        background-color: var(--form-highlight-color-2);
      }
    }
  }
}
</style>@/interfaces/forms/SecurityLevels