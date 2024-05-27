<script setup lang="ts">
const route = useRoute();

const links = [
  // {
  //   label: "Profile",
  //   avatar: {
  //     src: "https://avatars.githubusercontent.com/u/739984?v=4",
  //   },
  //   badge: 100,
  // },
  {
    label: "My To Do",
    icon: "i-heroicons-document-check-solid",
    to: "/todo",
  },
  // {
  //   label: "Horizontal Navigation",
  //   icon: "i-heroicons-chart-bar",
  //   to: `${
  //     route.path.startsWith("/dev") ? "/dev" : ""
  //   }/components/horizontal-navigation`,
  // },
  // {
  //   label: "Command Palette",
  //   icon: "i-heroicons-command-line",
  //   to: "/components/command-palette",
  // },
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b py-2 border-zinc-200 dark:border-zinc-800"
  />
</template>
