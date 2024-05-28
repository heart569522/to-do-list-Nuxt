<script setup lang="ts">
import { ref, watch } from "vue";
import type { ToDoItem } from "~/libs/data";

const props = defineProps<{ todo: ToDoItem }>();

const status = ["Pending", "In Progress", "Completed"];
const selectedStatus = ref<Record<number, string>>({});

const updateStatus = (taskId: number, newStatus: string) => {
  selectedStatus.value[taskId] = newStatus;
};

// Initialize selectedStatus with the status of each task in the selected project
watch(
  () => props.todo,
  (newTodo) => {
    newTodo.task.forEach((task) => {
      selectedStatus.value[task.id] = task.status;
    });
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="col-span-12 md:col-span-8 bg-white dark:bg-zinc-800 rounded-lg p-6"
  >
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-semibold tracking-wide mb-2">
          {{ todo.todoName }} - Task
        </h3>
        <UButton
          class="h-8 text-sm sm:h-10 sm:text-base"
          color="primary"
          variant="outline"
          icon="i-heroicons-plus"
        >
          <p class="hidden sm:block">New Task</p>
        </UButton>
      </div>

      <ul class="space-y-4">
        <li
          v-for="task in todo.task"
          :key="task.id"
          class="p-4 grid grid-cols-12 text-left bg-zinc-700 w-full rounded-md"
        >
          <div
            class="col-span-12 lg:col-span-10 flex flex-col gap-y-2 items-start justify-center"
          >
            <h4 class="text-xl">{{ task.title }}</h4>
            <p v-if="task.detail"class="text-lg text-zinc-200 font-light">
              {{ task.detail }}
            </p>
            <div class="flex justify-start items-center gap-2 mt-2">
              <UBadge
                :ui="{ rounded: 'rounded-md' }"
                color="primary"
                variant="solid"
                >{{ task.tag }}</UBadge
              >
            </div>
            <div class="hidden lg:block">
              <p class="text-base text-zinc-200/70 mt-1">
                {{ task.date }}
              </p>
            </div>
          </div>
          <div
            class="col-span-12 lg:col-span-2 flex gap-2 mt-2 lg:mt-0 justify-between lg:justify-end items-center"
          >
            <div class="block lg:hidden">
              <p class="text-base text-zinc-200/70 mt-1">
                {{ task.date }}
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <USelectMenu
                color="primary"
                v-model="selectedStatus[task.id]"
                :options="status"
                @change="updateStatus(task.id, $event)"
              />
              <button class="text-2xl text-zinc-100/70 hover:text-zinc-100">
                <i class="i-heroicons-trash"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
