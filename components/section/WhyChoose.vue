<template>
  <section id="why-choose" class="px-5 py-12">
    <div class="mx-auto max-w-7xl">
      <SectionTitle :title="$t('navbar.whyChoose')" step="01" color="black" />
      <div class="grid grid-cols-3 pt-4">
        <div class="col-span-3 px-6 md:col-span-2">
          <h2 class="text-6xl">{{ $t('whyChoose.title') }}</h2>
          <hr class="my-6" />

          <h2 class="mt-4 mb-2 text-3xl uppercase">
            {{ $t('whyChoose.inno') }}
          </h2>
          <p class="text-2xl">
            {{ $t('whyChoose.innomsg') }}
          </p>
          <h2 class="mt-4 mb-2 text-3xl uppercase">
            {{ $t('whyChoose.flex') }}
          </h2>
          <p class="text-2xl">
            {{ $t('whyChoose.flexmsg') }}
          </p>
          <h2 class="mt-4 mb-2 text-3xl uppercase">
            {{ $t('whyChoose.intern') }}
          </h2>
          <p class="text-2xl">
            {{ $t('whyChoose.internmsg') }}
          </p>
        </div>
        <div class="hidden md:block">
          <img src="/img/highlight.jpg" class="rounded-lg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
