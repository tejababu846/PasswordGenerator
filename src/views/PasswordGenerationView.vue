<template>
  <div class="text-center">
    <img src="/mainlogoicon.png" alt="Main Logo" class="logo" />
  </div>
  <form class="wrapper-password-generation mt-4 mt-lg-0" @submit="handlerSubmitForm">
    <PageTitle page-title="CUBIC HUB Password Generator" />

    <TextInputCopyable v-model="form.password" class="mb-4" />

    <WrapperForm>
      <RangeInput
        v-model="form.characterLength"
        label="Character Length"
        :min="5"
        :max="50"
        class="mb-4"
      />

      <CheckboxInput v-model="form.securityLevels" :options="optionsCheckbox" class="mb-4" />

      <PasswordStrength
        v-model="form.passwordSecurityLevel"
        :password-securities="form.securityLevels"
        class="mb-5 mb-lg-4"
      />
      <SubmitButton />
    </WrapperForm>

    <div class="py-4"></div>
  </form>
</template>

<script lang="ts" setup>
import WrapperForm from '@/components/forms/WrapperForm.vue'
import TextInputCopyable from '@/components/forms/TextInputCopyable.vue'
import RangeInput from '@/components/forms/RangeInput.vue'
import CheckboxInput from '@/components/forms/CheckboxInput.vue'
import PasswordStrength from '@/components/forms/PasswordStrength.vue'
import SubmitButton from '@/components/forms/SubmitButton.vue'
import PageTitle from '@/components/pageTemplate/PageTitle.vue'
import { generateNewPassword } from '@/helpers/passwordGeneration'
import { type IOptionCheckbox } from '@/interfaces/forms/SecurityLevels'
import { type IPasswordGenerationForm } from '@/interfaces/forms/PasswordGeneration'
import { type Ref, ref } from 'vue'

const optionsCheckbox: Array<IOptionCheckbox> = [
  {
    id: 1,
    label: 'Include Uppercase Letters'
  },
  {
    id: 2,
    label: 'Include Lowercase Letters'
  },
  {
    id: 3,
    label: 'Include Numbers'
  },
  {
    id: 4,
    label: 'Include Symbols'
  }
]

const form: Ref<IPasswordGenerationForm> = ref({
  password: '',
  characterLength: 10,
  securityLevels: {},
  passwordSecurityLevel: 0
})

const handlerSubmitForm = (e) => {
  e.preventDefault()

  form.value.password = generateNewPassword(form.value)
}
</script>

<style lang="scss" scoped>
.wrapper-password-generation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  & > * {
    width: 90%;
    max-width: 500px;
  }
}
</style>
@/interfaces/forms/SecurityLevels
