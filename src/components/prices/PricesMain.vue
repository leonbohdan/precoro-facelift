<script setup>
import { ref } from 'vue';
import PricesEstimationHeader from '@/components/prices/PricesEstimationHeader.vue';
import PricesPlanDescription from '@/components/prices/PricesPlanDescription.vue';

const chosenUsers = ref(0);
</script>

<template>
  <div class="p-[20px] md:p-[40px] bg-white rounded-lg">
    <PricesEstimationHeader @update-users="chosenUsers = $event"/>

    <PricesPlanDescription :chosen-users="chosenUsers"/>
  </div>
</template>
