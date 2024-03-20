<template>
  <button class="fw-bold wrapper-submit-button w-100 p-3 text-uppercase">
    Generate
  </button>
</template>

<style lang="scss" scoped>
.wrapper-submit-button {
  background-color: var(--highlight-color);
  color: var(--opaque-black);

  border: 1px solid transparent;
  
  letter-spacing: 1px;
  
  transition: all 0.3s;

  &:hover {
    background-color: transparent;
    color: var(--highlight-color);
    border-color: var(--highlight-color);
    
    transition: all 0.3s;
  }
}
</style>