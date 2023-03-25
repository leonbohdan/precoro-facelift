<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseHeader from '@/layouts/BaseHeader.vue';

const route = useRoute();

const handleBgColor = computed(() => {
  return route.path === '/prices';
});
</script>

<template>
  <div :class="['relative min-h-screen', {'bg-price': handleBgColor}]">
    <BaseHeader />

    <main class="md:container md:mx-auto px-4 relative z-10">
      <RouterView/>
    </main>

    <svg
      v-if="handleBgColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1020"
      viewBox="0 0 1440 1020"
      fill="none"
      class="absolute inset-0 z-0 pointer-events-none hidden md:block"
    >
      <g opacity="0.8">
        <path
          d="M1546.81 803.391C1625.31 668.96 1670.31 517.623 1678.01 362.153C1406.64 338.046 1134.02 391.727 892.061 516.911C650.103 642.095 448.824 833.6 311.791 1069C293.324 1100.22 276.791 1131.44 261.226 1162.76C715.054 1410.69 1284.42 1253.52 1546.81 803.391Z"
          stroke="url(#paint0_radial_5_968)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.05 8"
        />
        <path
          d="M1679 311.43C1677.07 -17.6866 1507.87 -337.911 1204.77 -516.533C1061.65 -600.873 899.016 -646.493 732.894 -648.9C566.773 -651.306 402.889 -610.417 257.378 -530.258C379.166 -259.174 582.219 -32.6328 838.441 118.02C1091.85 267.908 1385.55 335.455 1679 311.333V311.43Z"
          stroke="url(#paint1_radial_5_968)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.05 8"
        />
        <path
          d="M218.477 -506.786C83.5036 -424.039 -28.7111 -308.964 -108.02 -171.966C-371.287 280.098 -228.487 858.106 211.709 1134.45C232.979 1103.13 253.476 1071.91 272.909 1038.76C410.521 802.218 478.429 531.601 468.798 258.133C459.166 -15.3357 372.388 -280.508 218.477 -506.786Z"
          stroke="url(#paint2_radial_5_968)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.05 8"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_5_968"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(719.5 315.5) rotate(90) scale(964.5 959.5)"
        >
          <stop stop-color="#4D57E3"/>
          <stop offset="1" stop-color="#4D57E3" stop-opacity="0"/>
        </radialGradient>
        <radialGradient
          id="paint1_radial_5_968"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(719.5 315.5) rotate(90) scale(964.5 959.5)"
        >
          <stop stop-color="#4D57E3"/>
          <stop offset="1" stop-color="#4D57E3" stop-opacity="0"/>
        </radialGradient>
        <radialGradient
          id="paint2_radial_5_968"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(719.5 315.5) rotate(90) scale(964.5 959.5)"
        >
          <stop stop-color="#4D57E3"/>
          <stop offset="1" stop-color="#4D57E3" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
