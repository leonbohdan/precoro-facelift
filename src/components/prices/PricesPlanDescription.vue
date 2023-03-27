<script setup>
import { computed, ref } from 'vue';

const plansDescription = [
  'Direct integration with QuickBooks or Xero',
  'Unlimited custom fields & workflows',
  'Standard onboarding and support',
  'Multi-departments / projects',
  'Unlimited document storage',
  'Amazon Business Punch-in',
  'Multi-currencies ',
  'Lifetime updates',
  '3-way matching ',
  'Multi-locations',
  'Budgets',
];

const users = ref(10);

const openAllFeatures = () => {
  alert('Open all features!');
};

const handleChosenPlan = (plan) => {
  alert(`You have chosen plan for the ${plan === 'small' ? 'small' : 'large'} team!`);
};

const isSmallTeam = computed(() => {
  return users.value > 20;
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-[_1fr,_2fr]">
    <div class="pt-0 md:pt-8 md:pr-1 order-last md:order-first">
      <div class="title text-c-black mb-6">
        All plans include:
      </div>

      <div
        v-for="(description, i) in plansDescription"
        :key="i"
        class="flex items-baseline mb-3 text-default text-c-gray"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          class="mr-[10px] min-w-[14px]"
        >
          <path d="M2 6L5 9L12 2" stroke="#1D2452" stroke-width="2" stroke-linecap="square"/>
        </svg>
        
        <span>
          {{ description }}
        </span>
      </div>

      <div class="flex items-center group hover:cursor-pointer mt-6">
        <span
          class="text-default font-bold text-primary group-hover:text-primary-hover transition ease-in-out delay-150"
          @click="openAllFeatures"
        >
          See all features
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
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        :class="[
          'flex flex-col justify-between items-center rounded-lg p-6 md:py-8 mb-5 md:mb-0 active-plan',
          {'opacity-25 pointer-events-none': isSmallTeam}
        ]"
      >
        <div class="title text-c-black text-center mb-1">
          For smaller teams
        </div>

        <div class="title-small text-c-gray text-center mb-6">
          with ≤20 users
        </div>

        <h1 class="mb-3">
          $35
        </h1>

        <div class="text-default text-c-gray text-center mb-10">
          per user per month <br> billed annually
        </div>

        <button class="btn-primary mb-[60px] group" @click="handleChosenPlan('small')">
          Get Started
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 min-w-[16px] group-hover:translate-x-1 transition ease-in-out delay-150"
          >
            <path d="M6 3L11 8L6 13" stroke="white" stroke-width="2"/>
          </svg>
        </button>

        <svg
          width="142"
          height="142"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M121.961 57.4077C117.873 53.3192 111.244 53.3192 107.155 57.4077L106.095 56.3471L107.155 57.4077C103.067 61.4963 103.067 68.1251 107.155 72.2137C111.244 76.3023 117.873 76.3023 121.961 72.2137C126.05 68.1251 126.05 61.4963 121.961 57.4077ZM124.082 55.2855C118.821 50.0263 110.294 50.0266 105.034 55.2864C99.7738 60.5465 99.7738 69.0749 105.034 74.335C110.294 79.5952 118.822 79.5952 124.083 74.335C129.343 69.0749 129.343 60.5465 124.083 55.2864C124.082 55.2861 124.082 55.2858 124.082 55.2855Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M82.9704 36.0422C76.3586 29.4304 65.6389 29.4304 59.0271 36.0422C52.4154 42.6539 52.4154 53.3737 59.0271 59.9854C65.6389 66.5971 76.3587 66.5971 82.9704 59.9854C89.5818 53.374 89.5821 42.6549 82.9714 36.0431C82.9711 36.0428 82.9707 36.0425 82.9704 36.0422ZM85.0917 33.9208C77.3084 26.1376 64.6891 26.1375 56.9058 33.9208L56.9058 33.9208C49.1225 41.7042 49.1225 54.3234 56.9058 62.1067C64.6892 69.89 77.3084 69.89 85.0917 62.1067C92.875 54.3234 92.875 41.7041 85.0917 33.9208Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.846 57.4077C30.7575 53.3192 24.1286 53.3192 20.0401 57.4077C15.9515 61.4963 15.9515 68.1251 20.0401 72.2137C24.1286 76.3023 30.7575 76.3023 34.846 72.2137C38.9346 68.1251 38.9346 61.4963 34.846 57.4077ZM36.9673 55.2864C31.7072 50.0263 23.1789 50.0263 17.9187 55.2864C12.6586 60.5465 12.6586 69.0749 17.9187 74.335C23.1789 79.5952 31.7072 79.5952 36.9673 74.335C42.2275 69.0749 42.2275 60.5465 36.9673 55.2864Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M115.054 91.1406C115.054 90.3122 115.725 89.6406 116.554 89.6406H121.293C130.292 89.6406 137.585 96.933 137.585 105.932V112.417C137.585 113.245 136.913 113.917 136.085 113.917C135.256 113.917 134.585 113.245 134.585 112.417V105.932C134.585 98.5898 128.635 92.6406 121.293 92.6406H116.554C115.725 92.6406 115.054 91.9691 115.054 91.1406Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7087 92.6406C13.3662 92.6406 7.41699 98.5898 7.41699 105.932V112.417C7.41699 113.245 6.74542 113.917 5.91699 113.917C5.08857 113.917 4.41699 113.245 4.41699 112.417V105.932C4.41699 96.933 11.7093 89.6406 20.7087 89.6406H25.4479C26.2763 89.6406 26.9479 90.3122 26.9479 91.1406C26.9479 91.9691 26.2763 92.6406 25.4479 92.6406H20.7087Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9062 102.944C37.9062 90.6785 47.8492 80.7355 60.1146 80.7355H81.882C94.1473 80.7355 104.09 90.6785 104.09 102.944V112.416C104.09 113.245 103.419 113.916 102.59 113.916C101.762 113.916 101.09 113.245 101.09 112.416V102.944C101.09 92.3353 92.4905 83.7355 81.882 83.7355H60.1146C49.5061 83.7355 40.9062 92.3353 40.9062 102.944V112.416C40.9062 113.245 40.2347 113.916 39.4062 113.916C38.5778 113.916 37.9062 113.245 37.9062 112.416V102.944Z" fill="#D2DEEE"/>
        </svg>
      </div>

      <div
        :class="[
          'flex flex-col justify-between items-center rounded-lg p-6 md:py-8 mb-8 md:mb-0 active-plan',
          {'opacity-25 pointer-events-none': !isSmallTeam}
        ]"
      >
        <div class="title text-c-black text-center mb-1">
          For larger teams
        </div>

        <div class="title-small text-c-gray text-center mb-6">
          with >20 users
        </div>

        <h3 class="text-center mb-3">
          Individually <br> tailored pricing
        </h3>

        <div class="text-default text-c-gray mb-10">
          billed annually
        </div>

        <button class="btn-primary mb-[60px] group" @click="handleChosenPlan('large')">
          Get a Custom Quote
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 min-w-[16px] group-hover:translate-x-1 transition ease-in-out delay-150"
          >
            <path d="M6 3L11 8L6 13" stroke="white" stroke-width="2"/>
          </svg>
        </button>

        <svg
          width="142"
          height="142"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4838 31.0568C33.0374 31.0568 31.0542 33.04 31.0542 35.4864V45.8352H51.7517V35.4864C51.7517 33.04 49.7685 31.0568 47.3221 31.0568H35.4838ZM28.0752 35.4864C28.0752 31.3947 31.3922 28.0778 35.4838 28.0778H47.3221C51.4138 28.0778 54.7307 31.3947 54.7307 35.4864V47.3247C54.7307 48.1473 54.0639 48.8142 53.2412 48.8142H29.5647C28.7421 48.8142 28.0752 48.1473 28.0752 47.3247V35.4864Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4055 16.2385C42.2282 16.2385 42.895 16.9054 42.895 17.728V29.5663C42.895 30.3889 42.2282 31.0558 41.4055 31.0558C40.5829 31.0558 39.916 30.3889 39.916 29.5663V17.728C39.916 16.9054 40.5829 16.2385 41.4055 16.2385Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.645 48.8141C21.1986 48.8141 19.2153 50.7973 19.2153 53.2437V124.273C19.2153 125.096 18.5485 125.763 17.7258 125.763C16.9032 125.763 16.2363 125.096 16.2363 124.273V53.2437C16.2363 49.152 19.5533 45.8351 23.645 45.8351H59.1598C63.2514 45.8351 66.5684 49.152 66.5684 53.2437V71.0011C66.5684 71.8238 65.9015 72.4906 65.0789 72.4906C64.2563 72.4906 63.5894 71.8238 63.5894 71.0011V53.2437C63.5894 50.7973 61.6062 48.8141 59.1598 48.8141H23.645Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M90.3119 25.4204C88.9519 24.9107 87.4285 25.1 86.2346 25.9271C85.0408 26.7542 84.3283 28.1137 84.3277 29.566C84.3277 29.5659 84.3277 29.5661 84.3277 29.566V70.9999C84.3277 71.8226 83.6608 72.4894 82.8381 72.4894C82.0155 72.4894 81.3486 71.8226 81.3486 70.9999V29.566C81.3495 27.1368 82.5413 24.8618 84.5381 23.4784C86.5349 22.0949 89.083 21.7783 91.3577 22.631L120.953 33.7293C123.847 34.814 125.764 37.5809 125.762 40.6712V124.272C125.762 125.095 125.095 125.762 124.272 125.762C123.449 125.762 122.783 125.095 122.783 124.272V40.6703C122.784 38.8226 121.638 37.1674 119.908 36.5188L90.3119 25.4204Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M53.2407 72.4895C50.7943 72.4895 48.8111 74.4727 48.8111 76.9191V124.272C48.8111 125.095 48.1442 125.762 47.3215 125.762C46.4989 125.762 45.832 125.095 45.832 124.272V76.9191C45.832 72.8275 49.149 69.5105 53.2407 69.5105H88.7554C92.8471 69.5105 96.164 72.8275 96.164 76.9191V124.272C96.164 125.095 95.4972 125.762 94.6745 125.762C93.8519 125.762 93.185 125.095 93.185 124.272V76.9191C93.185 74.4727 91.2018 72.4895 88.7554 72.4895H53.2407Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6289 104.74C60.6289 103.917 61.2958 103.251 62.1184 103.251H79.8758C80.6985 103.251 81.3653 103.917 81.3653 104.74C81.3653 105.563 80.6985 106.23 79.8758 106.23H62.1184C61.2958 106.23 60.6289 105.563 60.6289 104.74Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6289 88.7583C60.6289 87.9357 61.2958 87.2688 62.1184 87.2688H79.8758C80.6985 87.2688 81.3653 87.9357 81.3653 88.7583C81.3653 89.5809 80.6985 90.2478 79.8758 90.2478H62.1184C61.2958 90.2478 60.6289 89.5809 60.6289 88.7583Z" fill="#D2DEEE"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3203 124.272C10.3203 123.45 10.9872 122.783 11.8098 122.783H130.192C131.015 122.783 131.682 123.45 131.682 124.272C131.682 125.095 131.015 125.762 130.192 125.762H11.8098C10.9872 125.762 10.3203 125.095 10.3203 124.272Z" fill="#D2DEEE"/>
        </svg>
      </div>
    </div>
  </div>
</template>
