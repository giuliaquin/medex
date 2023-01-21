<template>
  <div class="sticky top-0 bg-white" style="z-index: 1000">
    <div class="mx-auto max-w-7xl px-6">
      <div
        class="flex items-center justify-between py-3 md:justify-start md:space-x-10"
      >
        <div class="flex items-center justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Medex Lab</span>
            <img class="h-10 w-auto sm:h-16" src="/logo.webp" alt="" />
          </a>
          <h1 class="font-cinzel ml-3 text-2xl font-bold">Medex Lab</h1>
        </div>
        <nav class="hidden justify-end space-x-10 md:flex">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            class="text-base font-medium hover:font-bold"
          >
            {{ item.title }}
          </a>
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <LocalePicker />
        </div>
      </div>
    </div>
  </div>
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div
    class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
  >
    <div
      class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x-mark -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a
              v-for="item in menuItems"
              :key="item.href"
              :href="item.title"
              class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
            >
              <!-- <svg
                class="h-6 w-6 flex-shrink-0 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg> -->
              <span class="ml-3 text-base font-medium text-gray-900">{{
                item.title
              }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface MenuItem {
  title: string;
  href: string;
}
export default defineComponent({
  computed: {
    menuItems(): MenuItem[] {
      return [
        {
          title: this.$t('navbar.home'),
          href: '#home',
        },
        {
          title: this.$t('navbar.aboutUs'),
          href: '#about-us',
        },
        {
          title: this.$t('navbar.services'),
          href: '#services',
        },
        {
          title: this.$t('navbar.products'),
          href: '#products',
        },
        {
          title: this.$t('navbar.whyChoose'),
          href: '#why-choose',
        },
        {
          title: this.$t('navbar.contacts'),
          href: '#contacts',
        },
      ];
    },
  },
});
</script>
