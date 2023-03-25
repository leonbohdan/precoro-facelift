<script setup>
const handleDirection = (direction) => {
  alert(`You have chosen ${direction} page! But need to add logic for pagination!`);
};
</script>

<template>
  <div class="flex items-center justify-center pb-8">
    <span class="hover:cursor-pointer" @click="handleDirection('prev')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="30"
        viewBox="0 0 18 30"
        fill="none"
        class="rotate-180 opacity-50 hover:-translate-x-0.5 transition ease-in-out delay-150"
      >
        <path d="M2 2L15 15L2 28" stroke="#4545F5" stroke-width="3"/>
      </svg>
    </span>

    <span class="px-[110px] md:px-[125px] text-small text-c-gray2 whitespace-nowrap">
      1 of 3
    </span>

    <span class="hover:cursor-pointer" @click="handleDirection('next')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="30"
        viewBox="0 0 18 30"
        fill="none"
        class="hover:translate-x-0.5 transition ease-in-out delay-150"
      >
        <path d="M2 2L15 15L2 28" stroke="#4545F5" stroke-width="3"/>
      </svg>
    </span>
  </div>
</template>
