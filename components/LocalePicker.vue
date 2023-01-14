<template>
  <div class="flex">
    <button
      v-for="lang in languages"
      :key="lang.code"
      class="ml-1 rounded-full"
      :class="lang.code === active ? 'border-fuchsia-800' : 'border-gray-300'"
      style="border-width: 3px"
    >
      <img
        :src="`/flags/${lang.code}.svg`"
        class="rounded-full border border-white"
        style="width: 32px"
        :alt="label"
        @click="active = lang.code"
      />
    </button>
  </div>
</template>

<script>
export default defineComponent({
  data: () => ({
    active: 'it',
    languages: [
      { code: 'it', label: 'Italian' },
      { code: 'gb', label: 'English' },
      { code: 'se', label: 'Swedish' },
      { code: 'es', label: 'Spanish' },
      { code: 'fr', label: 'French' },
    ],
  }),
});
</script>
