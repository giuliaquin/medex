<template>
  <section id="about-us" class="bg-gray-900 px-5 py-10 text-white">
    <div class="mx-auto max-w-7xl">
      <SectionTitle :title="$t('navbar.aboutUs')" step="01" color="white" />
      <div class="grid grid-cols-3">
        <div>
          <img src="/img/highlight.jpg" class="rounded-lg" alt="" />
        </div>
        <div class="col-span-2 px-6">
          <h2 class="text-6xl">{{ $t('aboutUs.title') }}</h2>
          <hr class="my-6" />
          <p class="text-">
            {{ $t('aboutUs.message') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
