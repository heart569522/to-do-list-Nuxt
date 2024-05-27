<script setup lang="ts">
useSeoMeta({
  titleTemplate: "My List",
  description: "wirunrom to do list anything & everyday",
});
</script>

<template>
  <section class="px-6 py-14 sm:py-24 xl:px-48">
    <div class="flex justify-between items-center">
      <h2
        class="text-3xl w-fit font-semibold capitalize text-slate-950 dark:text-zinc-100 md:text-5xl"
      >
        My To Do
      </h2>
      <UButton
        class="h-10 text-base sm:h-12 sm:text-lg"
        color="primary"
        variant="solid"
        icon="i-heroicons-pencil-square"
      >
        <p class="hidden sm:block">Add Task</p>
      </UButton>
    </div>
  </section>
</template>
