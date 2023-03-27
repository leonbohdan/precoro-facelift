<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  pricePerUser: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['update:model-value']);

const isSelectOpen = ref(false);

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const handleSelectValue = computed(() => {
  const result = selectOptions.value.filter(({ value }) => value === props.modelValue);

  return result[0];
});

const selectOptions = computed(() => {
  return [
    {
      name: 'Chose a plan',
      value: 0,
    },{
      name: currencyFormatter.format(props.pricePerUser),
      value: 1,
    },{
      name: currencyFormatter.format(2 * props.pricePerUser),
      value: 2,
    },{
      name: currencyFormatter.format(3 * props.pricePerUser),
      value: 3,
    },{
      name: currencyFormatter.format(4 * props.pricePerUser),
      value: 4,
    },{
      name: currencyFormatter.format(5 * props.pricePerUser),
      value: 5,
    },{
      name: currencyFormatter.format(6 * props.pricePerUser),
      value: 6,
    },{
      name: currencyFormatter.format(7 * props.pricePerUser),
      value: 7,
    },{
      name: currencyFormatter.format(8 * props.pricePerUser),
      value: 8,
    },{
      name: currencyFormatter.format(9 * props.pricePerUser),
      value: 9,
    },{
      name: currencyFormatter.format(10 * props.pricePerUser),
      value: 10,
    },{
      name: currencyFormatter.format(1 * props.pricePerUser),
      value: 11,
    },{
      name: currencyFormatter.format(12 * props.pricePerUser),
      value: 12,
    },{
      name: currencyFormatter.format(13 * props.pricePerUser),
      value: 13,
    },{
      name: currencyFormatter.format(14 * props.pricePerUser),
      value: 14,
    },{
      name: currencyFormatter.format(15 * props.pricePerUser),
      value: 15,
    },{
      name: currencyFormatter.format(16 * props.pricePerUser),
      value: 16,
    },{
      name: currencyFormatter.format(17 * props.pricePerUser),
      value: 17,
    },{
      name: currencyFormatter.format(18 * props.pricePerUser),
      value: 18,
    },{
      name: currencyFormatter.format(19 * props.pricePerUser),
      value: 19,
    },{
      name: currencyFormatter.format(20 * props.pricePerUser),
      value: 20,
    },{
      name: 'More than 20 users?',
      value: 21,
    },
  ];
});

const toggle = () => {
  isSelectOpen.value = !isSelectOpen.value;
};

const handleChosenSelectValue = (value) => {
  emits('update:model-value', value);
  isSelectOpen.value = false;
};

const handleChosenPlan = (plan) => {
  alert(`You have chosen plan for the ${plan === 'small' ? 'small' : 'large'} team!`);
};
</script>

<template>
  <div class="relative w-full">
    <button
      type="button"
      :class="[
        'flex w-full items-center justify-between rounded bg-white p-2',
        isSelectOpen ? 'ring-c-primary3 ring-[2px]' : 'ring-c-gray5 ring-1'
      ]"
      @click="toggle"
    >
      <span>
        <template v-if="!handleSelectValue.value">
          <span class="text-small text-c-gray">
            {{ handleSelectValue.name }}
          </span>
        </template>

        <template v-if="handleSelectValue.value < 21 && handleSelectValue.value > 0">
          <span class="text-default text-c-black">{{ handleSelectValue.value }} user</span>

          <span class="text-c-gray5 px-2">|</span>

          <span class="text-[16px] leading-[24px] font-sans font-semibold text-c-black">
            {{ handleSelectValue.name }}/year
          </span>
        </template>

        <template v-if="handleSelectValue.value === 21">
          <span class="text-small text-c-gray">
            More than 20 users?
          </span>
        </template>
      </span>

      <span class="text-2xl w-5 h-5 grid place-content-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="isSelectOpen ? 'rotate-180 stroke-primary' : 'stroke-c-black'"
        >
          <path
            d="M4.49951 8.24988L11.9995 15.7499L19.4995 8.24988"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <ul
      v-if="isSelectOpen"
      class="z-2 absolute mt-2 w-full rounded bg-white shadow-select-box min-h-[50px] max-h-[200px] overflow-y-auto"
    >
      <li
        v-for="({name, value}, i) in selectOptions"
        :key="i"
        :class="[
          'cursor-pointer py-3 px-4',
          {'flex flex-col items-center p-4 bg-c-gray5': value === 21},
          {'bg-c-gray5 text-primary': value === props.modelValue }
        ]"
        @click="handleChosenSelectValue(value)"
      >
        <template v-if="!value">
          {{ name }}
        </template>

        <template v-if="value < 21 && value > 0">
          <span
            :class="[
              'text-default text-c-black',
              {'bg-c-gray5 text-primary': value === props.modelValue },
              value === 1 ? 'pr-[50px]' : 'pr-[40px]'
            ]"
          >
            {{ value }} user{{ value > 1 ? 's' : '' }}
          </span>

          <span
            :class="[
              'text-[16px] leading-[24px] font-sans font-semibold text-c-black',
              {'bg-c-gray5 text-primary': value === props.modelValue }
            ]"
          >
            {{ name }}/year
          </span>
        </template>

        <template v-if="value === 21">
          <div class="text-small text-c-gray mb-1">
            More than 20 users?
          </div>

          <div
            class="flex items-center group hover:cursor-pointer title-small"
            @click="handleChosenPlan('large')"
          >
            <span class="text-default font-bold text-primary group-hover:text-primary-hover transition ease-in-out delay-150">
              Get a Custom Quote
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              class="ml-[10px] group-hover:translate-x-1 stroke-primary group-hover:stroke-primary-hover transition ease-in-out delay-150"
            >
              <path d="M1 1L6 6L1 11" stroke-width="2"/>
            </svg>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
