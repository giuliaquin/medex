<template>
  <section id="products" class="mx-auto max-w-7xl bg-white px-5 pb-10 pt-6">
    <SectionTitle :title="$t('navbar.products')" step="02" />

    <div class="grid grid-cols-4 gap-5 text-center">
      <div class="card">
        <img src="/img/products/wowdrobe.png" alt="" />
        <h2>WoWdrobe</h2>
      </div>
      <div class="card">
        <img src="/img/products/boi.png" alt="" />
        <h2>Bite of Italy</h2>
      </div>
      <div class="card">
        <img src="/img/products/systa.png" alt="" />
        <h2>Systa</h2>
      </div>
      <div class="card">
        <img src="/img/products/wowdrobe.png" alt="" />
        <h2>Guidami</h2>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  @apply p-2;
  img {
    @apply mx-auto mb-4 h-14;
  }
  h2 {
    @apply text-3xl;
    font-family: 'Cinzel', serif;
  }
}
</style>
