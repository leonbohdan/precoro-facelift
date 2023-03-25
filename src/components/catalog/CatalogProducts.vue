<script setup>
import CatalogProduct from '@/components/catalog/CatalogProduct.vue';

const products = [
  {
    color: '#1d2452',
    filters: [{ name: 'SMB', color: '' }, { name: 'Information Technology', color: '' }],
    time: 7,
    title: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
    name: 'Mark Smith',
    nameTitle: 'Owner',
  }, {
    color: '#4545f5',
    filters: [{ name: 'SMB', color: '' }, { name: 'Biotech', color: '' }],
    time: 10,
    title: 'How Ridgeline Discovery Reduced Invoice Processing Time by 90% in a Month',
    name: 'Stefan Hideman',
    nameTitle: 'Manager',
  }, {
    color: '#7b61ff',
    filters: [{ name: 'Enterprise', color: '' }, { name: 'Textile Testing & Certification', color: '' }],
    time: 4,
    title: 'How TESTEX Increased Order Processing Speed by Threefold',
    name: 'Sara Linder',
    nameTitle: 'CEO',
  }, {
    color: '#4ed0ff',
    filters: [{ name: 'Travel & Tourism, Leisure', color: '' }, { name: 'Textile Testing & Certification', color: '' }],
    time: 14,
    title: 'How Greater Palm Springs CVB Achieved Operational Efficiency in the Procurement Process',
    name: 'Teodor Green',
    nameTitle: 'Manager',
  },
];
</script>

<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
    <CatalogProduct v-for="(product, i) in products" :key="i" :product="product"/>
  </div>
</template>
