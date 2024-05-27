<script setup lang="ts">
useSeoMeta({
  title: "My To Do",
  description: "wirunrom to do list anything & everyday",
});

const status = ["Pending", "In Progress", "Completed"];

const selected = ref(status[0]);
</script>

<template>
  <section class="px-6 py-14 sm:py-24 xl:px-48">
    <div class="flex justify-between items-center mb-10">
      <h2
        class="text-3xl w-fit font-bold capitalize text-slate-950 dark:text-zinc-100 md:text-5xl"
      >
        To-Do List
      </h2>
      <UButton
        class="h-10 text-base sm:h-12 sm:text-lg"
        color="primary"
        variant="solid"
        icon="i-heroicons-pencil-square"
      >
        <p class="hidden sm:block">Add New Project</p>
      </UButton>
    </div>
    <div class="flex-1">
      <div class="grid grid-cols-12 gap-8">
        <div
          class="col-span-12 md:col-span-4 bg-white dark:bg-zinc-800 rounded-lg p-6"
        >
          <div class="flex flex-col gap-4">
            <h3 class="text-2xl font-semibold tracking-wide">My Projects</h3>
            <div class="w-full rounded-md">
              <ul class="space-y-4">
                <li>
                  <button
                    type="button"
                    class="p-4 text-left bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 w-full rounded-md"
                  >
                    Project 1
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="p-4 text-left bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 w-full rounded-md"
                  >
                    Project 2
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-8 bg-white dark:bg-zinc-800 rounded-lg p-6"
        >
          <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-semibold tracking-wide">Project 1</h3>
              <UButton
                class="h-6 text-sm sm:h-8 sm:text-base"
                color="primary"
                variant="outline"
                icon="i-heroicons-plus"
              >
                <p class="hidden sm:block">New Task</p>
              </UButton>
            </div>

            <ul class="space-y-4">
              <li
                class="p-4 grid grid-cols-12 text-left bg-zinc-700 w-full rounded-md"
              >
                <div
                  class="col-span-12 md:col-span-10 flex flex-col gap-y-2 items-start justify-center"
                >
                  <h4 class="text-xl">Task 1</h4>
                  <p class="text-lg font-light">
                    asdasdasdas vasdfasefasdk asd asdf
                  </p>
                  <div class="flex justify-start items-center gap-2 mt-2">
                    <UBadge
                      :ui="{ rounded: 'rounded-md' }"
                      color="primary"
                      variant="solid"
                      >Badge</UBadge
                    >
                    <UBadge
                      :ui="{ rounded: 'rounded-md' }"
                      color="red"
                      variant="solid"
                      >Badge</UBadge
                    >
                    <UBadge
                      :ui="{ rounded: 'rounded-md' }"
                      color="amber"
                      variant="solid"
                      >Badge</UBadge
                    >
                    <UBadge
                      :ui="{ rounded: 'rounded-md' }"
                      color="blue"
                      variant="solid"
                      >Badge</UBadge
                    >
                  </div>
                </div>
                <div class="col-span-12 md:col-span-2 flex gap-2 mt-4 md:mt-0 justify-center md:justify-end items-center">
                  <!-- <button class="text-2xl">
                    <i class="i-heroicons-check-20-solid"></i>
                  </button>
                  <button class="text-2xl">
                    <i class="i-heroicons-pencil-solid"></i>
                  </button> -->
                  <USelectMenu
                    color="primary"
                    v-model="selected"
                    :options="status"
                  />
                  <button class="text-2xl">
                    <i class="i-heroicons-trash"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
