<script setup>
import { computed, ref } from 'vue';

const activeCurrency = ref('USD');
const chosenUsers = ref(4);

const pricePerUser = 420;

const selectOptions = [
  {
    name: `1 user | $${pricePerUser}/year`,
    value: 1,
  },{
    name: `2 user | $${2 * pricePerUser}/year`,
    value: 2,
  },{
    name: `3 user | $${3 * pricePerUser}/year`,
    value: 3,
  },{
    name: `4 user | $${4 * pricePerUser}/year`,
    value: 4,
  },{
    name: `5 user | $${5 * pricePerUser}/year`,
    value: 5,
  },{
    name: `6 user | $${6 * pricePerUser}/year`,
    value: 6,
  },{
    name: `7 user | $${7 * pricePerUser}/year`,
    value: 7,
  },{
    name: `8 user | $${8 * pricePerUser}/year`,
    value: 8,
  },{
    name: `9 user | $${9 * pricePerUser}/year`,
    value: 9,
  },{
    name: `10 user | $${10 * pricePerUser}/year`,
    value: 10,
  },{
    name: `11 user | $${11 * pricePerUser}/year`,
    value: 11,
  },{
    name: `12 user | $${12 * pricePerUser}/year`,
    value: 12,
  },{
    name: `13 user | $${13 * pricePerUser}/year`,
    value: 13,
  },{
    name: `14 user | $${14 * pricePerUser}/year`,
    value: 14,
  },{
    name: `15 user | $${15 * pricePerUser}/year`,
    value: 15,
  },{
    name: `16 user | $${16 * pricePerUser}/year`,
    value: 16,
  },{
    name: `17 user | $${17 * pricePerUser}/year`,
    value: 17,
  },{
    name: `18 user | $${18 * pricePerUser}/year`,
    value: 18,
  },{
    name: `19 user | $${19 * pricePerUser}/year`,
    value: 19,
  },{
    name: `20 user | $${20 * pricePerUser}/year`,
    value: 20,
  },
];

const handleActiveCurrency = (currency) => {
  activeCurrency.value = currency;
};

const isActiveCurrency = computed(() => {
  return (currency) => {
    return activeCurrency.value === currency;
  };
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-[_1fr,_2fr] mb-10 md:mb-[60px] md:min-h-[80px]">
    <h3 class="text-center md:text-start mb-6 md:mb-0">
      Estimate your investment
    </h3>

    <div class="flex flex-col md:items-end md:justify-between">
      <div class="flex justify-center text-c-gray mb-10 md:mb-0">
        <span
          :class="[
            'p-1 text-default hover:cursor-pointer hover:text-primary whitespace-nowrap transition ease-in-out delay-150 last:pr-0',
            { 'active-filter': isActiveCurrency('USD') },
          ]"
          @click="handleActiveCurrency('USD')"
        >
          USD
        </span>

        <span class="p-1 text-default">|</span>

        <span
          :class="[
            'p-1 text-default hover:cursor-pointer hover:text-primary whitespace-nowrap transition ease-in-out delay-150 last:pr-0',
            { 'active-filter': isActiveCurrency('EUR') },
          ]"
          @click="handleActiveCurrency('EUR')"
        >
          EUR
        </span>

        <span class="p-1 text-default">|</span>

        <span
          :class="[
            'p-1 text-default hover:cursor-pointer hover:text-primary whitespace-nowrap transition ease-in-out delay-150 last:pr-0',
            { 'active-filter': isActiveCurrency('GBP') },
          ]"
          @click="handleActiveCurrency('GBP')"
        >
          GBP
        </span>
      </div>

      <div class="hidden md:block md:w-full">
        <input
          v-model="chosenUsers"
          type="range"
          min="0"
          max="20"
          class="hover:cursor-pointer md:w-full"
        >
      </div>

      <div class="md:hidden flex items-center flex-col">
        <div class="text-center text-small text-c-gray mb-3">
          How many users?
        </div>

        <select id="" v-model="chosenUsers" name="select">
          <option
            v-for="({name, value}, i) in selectOptions"
            :key="i"
            :value="value"
          >
            {{ name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
