<template>
    <div class="wrapper-page-title">
        <h1>
            {{ pageTitle }}
        </h1>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    pageTitle: {
        type: String,
        required: true,
    }
})
</script>


<style lang="scss" scoped>
.wrapper-page-title {
    display: flex;
    align-items: center;
    justify-content: center;

    & > h1 {
        margin-bottom: 2rem;
        color: var(--light-main-color-form);
        font-weight: 500;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
}
</style>