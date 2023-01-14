<template>
  <div class="flex">
    <button
      v-for="locale in $i18n.locales"
      :key="locale.code"
      class="ml-1 rounded-full"
      :class="
        locale.code === $i18n.locale ? 'border-fuchsia-800' : 'border-gray-300'
      "
      style="border-width: 3px"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
    >
      <img
        :src="`/flags/${locale.code}.svg`"
        class="rounded-full border border-white"
        style="width: 32px"
        :alt="locale.label"
      />
    </button>
  </div>
</template>

<script>
export default defineComponent({
  data: () => ({
    locales: [
      { code: 'it', label: 'Italian' },
      { code: 'gb', label: 'English' },
      { code: 'se', label: 'Swedish' },
      { code: 'es', label: 'Spanish' },
      { code: 'fr', label: 'French' },
    ],
  }),
});
</script>
