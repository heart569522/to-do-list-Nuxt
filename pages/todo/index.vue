<script setup lang="ts">
import { ref } from "vue";
import { toDoData, type ToDoItem } from "~/libs/data";
import TaskItem from "~/components/task-item.vue";

useSeoMeta({
  title: "My To Do",
  description: "sample to-do list to try anything",
});

const data = toDoData;
const selectedProject = ref<ToDoItem | null>(data[0]);

const selectProject = (project: ToDoItem) => {
  selectedProject.value = project;
};
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
                <li v-for="item in data" :key="item.id">
                  <button
                    type="button"
                    class="p-4 text-left bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 w-full rounded-md"
                    :class="{'border-2 border-primary': selectedProject?.id === item.id}"
                    @click="selectProject(item)"
                  >
                    {{ item.projectName }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TaskItem v-if="selectedProject" :project="selectedProject" />
      </div>
    </div>
  </section>
</template>
