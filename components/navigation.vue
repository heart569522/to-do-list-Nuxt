<script setup lang="ts">
type Link = {
  label: string;
  icon: string;
  to: string;
};

const props = defineProps<{ links: Link[] }>();

const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  console.log(colorMode);
};
</script>

<template>
  <nav
    class="w-full flex py-4 dark:bg-zinc-700/50 bg-zinc-300/50 justify-between items-center px-6 xl:px-48 shadow-md"
  >
    <ul class="flex gap-3 sm:gap-6">
      <li v-for="link in links" :key="link.label">
        <NuxtLink
          :to="link.to"
          class="flex items-center space-x-1 dark:text-zinc-400 py-2 dark:hover:text-zinc-300 dark:active:text-zinc-100 font-semibold"
          active-class="dark:text-zinc-50 border-b-2 border-primary"
        >
          <span class="text-xl"><i :class="link.icon"></i></span>
          <p class="text-base">{{ link.label }}</p>
        </NuxtLink>
      </li>
    </ul>
    <!-- <ul class="flex gap-3 sm:gap-6">
      <li>
        <button
          type="button"
          @click="toggleColorMode"
          class="flex items-center justify-center text-center bg-transparent hover:bg-zinc-500/50 rounded-lg py-1 p-2 dark:text-zinc-200 dark:hover:text-zinc-100 dark:active:text-zinc-200 font-semibold"
        >
          <span class="text-2xl translate-y-0.5"
            ><i
              :class="[
                colorMode.value === 'dark'
                  ? 'i-heroicons-sun'
                  : 'i-heroicons-moon',
              ]"
            ></i
          ></span>
        </button>
      </li>
    </ul> -->
  </nav>
</template>
