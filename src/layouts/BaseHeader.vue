<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

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
  return activePage.value === 'catalog' && route.path === '/catalog';
});
</script>

<template>
  <header>
    <nav class="md:container md:mx-auto px-4 md:px-0 py-2 md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Precoro facelift
        </h2>
      </div>

      <div class="mt-5 flex md:mt-0 md:ml-4">
        <div class="border-solid border-2 border-primary rounded-3xl w-full md:w-auto">
          <button 
            type="button" 
            :class="['btn rounded-l-3xl min-w-[50%] md:min-w-[100px] md:mr-[1px]', {'active-btn cursor-default': isCatalogPage}]"
            @click="handleActivePage('catalog')"
          >
            Catalog
          </button>

          <button 
            type="button" 
            :class="['btn rounded-r-3xl min-w-[50%] md:min-w-[100px]', {'active-btn cursor-default': !isCatalogPage }]"
            @click="handleActivePage('price')"
          >
            Prices
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
