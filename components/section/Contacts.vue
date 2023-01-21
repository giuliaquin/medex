<template>
  <section id="contacts" class="mb-8 bg-gray-900 px-5 py-10 text-white">
    <div class="mx-auto max-w-7xl">
      <SectionTitle :title="$t('navbar.contacts')" step="03" color="white" />
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <iframe
            width="100%"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=8.92167091369629%2C44.40636990506554%2C8.924117088317873%2C44.40772461196222&amp;layer=mapnik&amp;marker=44.4070472624357%2C8.92289400100708"
            class="rounded-lg"
          />
        </div>
        <div class="px-4 text-xl">
          <p class="mb-10 text-2xl">{{ $t('footer.saluti') }}</p>
          <ContactLinks />
        </div>
      </div>
    </div>
  </section>
</template>
