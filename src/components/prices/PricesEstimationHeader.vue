<script setup>
import { computed, ref } from 'vue';

const minSliderValue = 0;
const maxSliderValue = 40;
const activeCurrency = ref('USD');
const chosenUsers = ref(0);

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

const chosenSliderPercentStyle = computed(() => {
  const percent = (chosenUsers.value / maxSliderValue) * 100;

  return `background: linear-gradient(to right, var(--custom-blue-color) ${percent}%, var(--custom-gray5-color) ${percent}%)`;
});

const handleInputDescriptionStyle = computed(() => {
  const
    newValue = Number( (chosenUsers.value - minSliderValue) * 100 / (maxSliderValue - minSliderValue) ),
    newPosition = 5 - (newValue * 0.2);

  // return `left: calc(${newValue}% + ${newPosition}px)`;
  return `left: calc(${newValue}% - 20px)`;
});

const handleChosenUsers = computed(() => {
  return chosenUsers.value > 1 ? `${chosenUsers.value} users` : `${chosenUsers.value} user`;
});

const handlePrice = computed(() => {
  return chosenUsers.value * pricePerUser;
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

      <div class="relative hidden md:block md:w-full">
        <span
          class="absolute -top-[40px] text-[18px] leading-[28px] font-sans font-medium"
          :style="handleInputDescriptionStyle"
        >
          {{ handleChosenUsers }}
        </span>

        <span
          class="absolute -bottom-[10px] title-small"
          :style="handleInputDescriptionStyle"
        >
          ${{ handlePrice }}/year
        </span>

        <input
          v-model="chosenUsers"
          type="range"
          :min="minSliderValue"
          :max="maxSliderValue"
          :style="chosenSliderPercentStyle"
          class="hover:cursor-pointer md:w-full mb-2"
        >

        <div class="flex items-center justify-between text-c-gray2 text-small pointer-events-none">
          <span class="">0</span>

          <span>20</span>

          <span class="mr-1">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="min-w-[12px]"
            >
              <path d="M2.91202 0.816051C1.3062 0.816051 0.0284979 2.09375 0.0284979 3.66477C0.0284979 5.25568 1.3062 6.52344 2.91202 6.52344C4.04554 6.52344 4.89569 5.96165 5.46245 5.42472C5.67623 5.21094 5.84029 5.01705 6.00435 4.82315C6.14853 5.01207 6.31259 5.20597 6.53134 5.42472C7.10804 5.96662 7.95819 6.52344 9.09668 6.52344C10.6876 6.52344 11.9703 5.25568 11.9703 3.66477C11.9703 2.09375 10.6876 0.816051 9.09668 0.816051C7.96316 0.816051 7.10804 1.37784 6.52637 1.9446C6.2927 2.16335 6.14853 2.33736 6.00435 2.52628C5.84526 2.33736 5.67623 2.14347 5.46742 1.9446C4.89071 1.38281 4.04554 0.816051 2.91202 0.816051ZM1.40066 3.66477C1.40066 2.85938 2.07679 2.18821 2.91202 2.18821C3.53844 2.18821 4.08034 2.51634 4.50293 2.93395C4.76145 3.17756 4.9802 3.45597 5.13929 3.66477C4.98517 3.88849 4.78631 4.14205 4.50293 4.41548C4.05051 4.84304 3.53844 5.15128 2.91202 5.15128C2.07679 5.15128 1.40066 4.49006 1.40066 3.66477ZM10.5882 3.66477C10.5882 4.49006 9.92196 5.15128 9.09668 5.15128C8.45534 5.15128 7.9383 4.83807 7.49086 4.41548C7.21742 4.14702 7.01855 3.89844 6.85449 3.66477C6.95392 3.54545 7.19256 3.21733 7.49086 2.93395C7.90847 2.52131 8.45534 2.18821 9.09668 2.18821C9.92196 2.18821 10.5882 2.85938 10.5882 3.66477Z" fill="#B3B7C7"/>
            </svg>
          </span>
        </div>
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

<style lang="scss" scoped>
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: relative;
  display: block;
  height: 6px;
  background: var(--custom-gray5-color);
  border-radius: 40px;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 3px;
    height: 6px;
    background-color: #fff;
  }
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/** Thumb styles */
input[type=range]::-webkit-slider-thumb {
  position: relative;
  z-index: 2;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--custom-blue-color);
  margin-top: -7px;
}

input[type=range]::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--custom-blue-color);
}

input[type=range]::-ms-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--custom-blue-color);
}

/** Track styles */
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  border-radius: 40px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  height: 6px;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 6px;
  border-radius: 40px;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 6px;
  border-radius: 40px;
}
</style>
