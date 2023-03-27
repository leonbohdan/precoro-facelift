<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});

const openStory = () => {
  alert('There are no story! Need to add logic for that!');
};

const handleFilter = (filterName) => {
  alert(`You have chosen ${filterName} filter! But need to add logic for filtration!`);
};
</script>

<template>
  <div class="border-solid border-[#eef0f6] border-[2px] rounded-lg shadow-c-box">
    <div class="rounded-t-lg bg-[#1d2452] h-[244px]" :style="`background-color: ${product.color};`"/>

    <div class="p-5 md:p-8">
      <div class="flex relative">
        <div class="mb-3 flex overflow-x-auto" style="width: calc(100vw - 82px);">
          <span
            v-for="({name}, i) in product.filters"
            :key="i"
            :class="[
              'whitespace-nowrap inline-flex justify-center text-small py-1 px-3 mr-1 hover:cursor-pointer transition ease-in-out delay-150 rounded-[20px]',
              {'text-success bg-bg-green hover:bg-bgh-green': i === 0},
              {'text-primary bg-bg-blue hover:bg-bgh-blue': i === 1}
            ]"
            @click="handleFilter(name)"
          >
            {{ name }}
          </span>

          <span class="whitespace-nowrap inline-flex text-small text-c-gray2 p-1">
            {{ product.time }} min read
          </span>
        </div>

        <div class="absolute inset-0 pointer-events-none filter-tags-bg"/>
      </div>

      <div class="mb-6 title-small text-c-black">
        {{ product.title }}
      </div>

      <div class="md:flex justify-between md:items-baseline flex-col md:flex-row">
        <div class="flex items-center mb-6 md:mb-0">
          <div
            class="bg-[#1d2452] rounded-full min-w-[56px] min-h-[56px] mr-3"
            :style="`background-color: ${product.color};`"
          />

          <div>
            <div class="text-default font-semibold text-c-black">
              {{ product.name }}
            </div>

            <div class="text-small text-c-gray">
              {{ product.nameTitle }}
            </div>
          </div>
        </div>

        <div class="flex items-center group hover:cursor-pointer">
          <span
            class="text-default font-bold text-primary group-hover:text-primary-hover transition ease-in-out delay-150"
            @click="openStory"
          >
            Read story
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            class="ml-[10px] group-hover:translate-x-1 stroke-primary group-hover:stroke-primary-hover transition ease-in-out delay-150"
          >
            <path d="M1 1L6 6L1 11" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
