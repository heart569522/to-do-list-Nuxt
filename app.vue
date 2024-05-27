<script setup lang="ts">
useSeoMeta({
  titleTemplate: "%s | To Do List",
  description: "wirunrom to do list anything & everyday",
  // ogImage: "https://hn.nuxt.space/cover.jpg",
  // ogImageAlt: "Nuxt Hackernews",
  // twitterImage: "https://hn.nuxt.space/cover.jpg",
  // twitterSite: "@nuxt_js",
  // twitterCreator: "@nuxt_js",
  // twitterCard: "summary_large_image",
});

// useHead({
//   link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
// });
</script>

<template>
  <div>
    <NuxtLayout />
    <NuxtPage />
    <!-- </NuxtLayout> -->
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
