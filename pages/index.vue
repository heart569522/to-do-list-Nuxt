<script setup lang="ts">
useSeoMeta({
  title: "Welcome",
  description: "wirunrom to do list anything & everyday",
});
</script>
<template>
  <section class="px-6 xl:px-48">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Sample To-Do List Project with Nuxt
          </h1>
          <p class="mt-6 text-lg leading-8 text-zinc-900 dark:text-zinc-100 text-pretty">
            Organize your tasks and boost productivity with this simple To-Do
            List project built using Nuxt & Tailwind CSS
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <UButton
              class="h-8 text-base sm:h-10 sm:text-lg"
              color="primary"
              variant="outline"
            >
              <NuxtLink to="/todo">See More</NuxtLink>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
