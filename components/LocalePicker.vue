<template>
  <div class="flex">
    <img
      v-for="lang in languages"
      :key="lang.code"
      :src="`/flags/${lang.code}.svg`"
      class="ml-1 rounded-full border-2"
      :class="lang.code === active ? 'border-fuchsia-800' : 'border-gray-500'"
      style="width: 32px"
      :alt="label"
      @click="active = lang.code"
    />
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
