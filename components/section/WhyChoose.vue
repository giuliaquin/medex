<template>
  <section id="why-choose" class="bg-gray-900 px-5 py-10 text-white">
    <div class="mx-auto max-w-7xl">
      <SectionTitle :title="$t('navbar.whyChoose')" step="01" color="white" />
      <div class="grid grid-cols-3">
        <div class="col-span-2 pr-6">
          <h2 class="text-6xl">{{ $t('whyChoose.title') }}</h2>
          <hr class="my-6" />
          <p class="text-2xl">
            {{ $t('whyChoose.message') }}
          </p>
        </div>
        <div>
          <img src="/img/highlight.jpg" class="rounded-lg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
