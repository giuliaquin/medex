<template>
  <h1 class="font-cinzel mb-10 text-xl font-bold">
    <!-- <span class="inline-block p-3 text-center">{{ step }}</span> -->
    <span class="px-6 py-3">{{ title }}</span>
  </h1>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  step: string | number;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  color: 'black',
});
</script>

<style scoped lang="scss">
h1 {
  max-width: 300px;
  width: 100%;

  // background: linear-gradient(to right, #9f75e6, #8241f9);

  span {
    @apply rounded-full border-4;

    border-color: v-bind(color);
    color: v-bind(color);

    &:first-child {
      width: 59.5px;
      height: 59.5px;
    }

    &:last-child {
      margin-left: -4px;
    }
  }
}
</style>
