<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "To-Do List",
    icon: "i-heroicons-document-check-solid",
    to: "/todo",
  },
  {
    label: "History",
    icon: "i-heroicons-document-text-solid",
    to: "/history",
  },
];
</script>

<template>
  <Navigation :links="links" />
</template>
