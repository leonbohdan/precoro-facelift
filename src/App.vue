<script setup>
import BaseHeader from '@/layouts/BaseHeader.vue';
</script>

<template>
  <BaseHeader />

  <main class="md:container md:mx-auto px-4">
    <RouterView/>
  </main>
</template>
