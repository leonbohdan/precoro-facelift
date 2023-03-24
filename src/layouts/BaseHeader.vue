<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activePage = ref('catalog');

const handleActivePage = (page) => {
  if (page === 'catalog') {
    activePage.value = 'catalog';
    router.push('/catalog');
  } else {
    activePage.value = 'price';
    router.push('/prices');
  }
};

const isCatalogPage = computed(() => {
  return activePage.value === 'catalog';
});
</script>

<template>
  <header>
    <nav class="container mx-auto py-2 lg:flex lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Precoro facelift
        </h2>
      </div>

      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <div class="border-solid border-2 border-primary rounded-3xl">
          <button 
            type="button" 
            :class="['btn rounded-l-3xl min-w-[100px]', {'active': isCatalogPage}]"
            @click="handleActivePage('catalog')"
          >
            Catalog
          </button>

          <button 
            type="button" 
            :class="['btn rounded-r-3xl min-w-[100px]', {'active': !isCatalogPage }]"
            @click="handleActivePage('price')"
          >
            Price
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
