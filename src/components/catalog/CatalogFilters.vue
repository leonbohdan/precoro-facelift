<script setup>
import { computed, ref } from 'vue';

const activeFilter = ref('All');

const filters = ['All', 'SMB', 'Enterprise', 'Biotech', 'Textile Testing & Certification', 'Insurance', 'Travel & Tourism, Leisure', 'Transport & Logistics', 'Information Technology', 'Other'];

const handleActiveFilter = (filter) => {
  activeFilter.value = filter;
};

const isActiveFilter = computed(() => {
  return (filter) => {
    return activeFilter.value === filter;
  };
});
</script>

<template>
  <div class="flex relative">
    <div class="flex text-c-gray overflow-x-auto">
      <span v-for="(filter, i) in filters" :key="i" class="flex">
        <span
          :class="[
            'p-3 text-default hover:cursor-pointer hover:text-primary whitespace-nowrap transition ease-in-out delay-150',
            { 'first:pl-0': i === 0 },
            { 'active': isActiveFilter(filter) },
          ]"
          @click="handleActiveFilter(filter)"
        >
          {{ filter }}
        </span>

        <span
          v-if="i === 0 || i === 2"
          class="p-3 text-default"
        >
          |
        </span>
      </span>
    </div>

    <div class="absolute inset-0 pointer-events-none filter-tags-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="16"
        fill="none"
        viewBox="0 0 9 16"
        class="absolute top-1/3 right-0"
      ><path stroke="#4545F5" stroke-width="1.5" d="M1 1.5 7.5 8 1 14.5"/></svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: var(--custom-blue-color);
}
</style>