<script setup>
import CatalogFilters from '@/components/catalog/CatalogFilters.vue';
import CatalogProducts from '@/components/catalog/CatalogProducts.vue';
</script>

<template>
  <h2 class="mb-2">
    Catalog
  </h2>

  <CatalogFilters class="mb-8"/>

  <CatalogProducts class="mb-10"/>

  <div>Swipe slide</div>
</template>
