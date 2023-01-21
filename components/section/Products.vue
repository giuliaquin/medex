<template>
  <section id="products" class="mmb-8 bg-violet-700 px-5 py-10 text-white">
    <div class="mx-auto max-w-7xl">
      <SectionTitle :title="$t('navbar.products')" step="02" color="white" />

      <div class="grid gap-5 py-6 text-center md:grid-cols-4">
        <div class="card">
          <img src="/img/products/wowdrobe.png" alt="" />
          <h2>WoWdrobe</h2>
        </div>
        <div class="card">
          <img src="/img/products/boi.png" alt="" />
          <h2>Bite of Italy</h2>
        </div>
        <div class="card">
          <img
            src="/img/products/systa.png"
            alt=""
            style="mix-blend-mode: color-burn; filter: grayscale(100%)"
          />
          <h2>Systa</h2>
        </div>
        <div class="card">
          <img
            src="/img/products/guidami.jpg"
            alt=""
            style="mix-blend-mode: color-burn; filter: grayscale(100%)"
          />
          <h2>Guidami</h2>
        </div>
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
