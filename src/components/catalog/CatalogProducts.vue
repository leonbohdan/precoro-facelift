<script setup>
import CatalogProduct from '@/components/catalog/CatalogProduct.vue';
</script>

<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
    <CatalogProduct v-for="(n, i) in 4" :key="i"/>
  </div>
</template>
