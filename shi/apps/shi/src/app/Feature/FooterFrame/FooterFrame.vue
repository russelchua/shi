<script setup lang="ts">
// defineProps<{}>()
</script>

<template>
  <!-- 內容外部排版 -->
  <footer class="w-screen min-h-[11.0625rem] bg-[#020202]">
    <!-- 內容內部排版 置中 -->
    <div class="max-w-[95rem] my-0 mx-auto">

      <!-- 資訊 -->
      <div class="flex items-center pt-9 gap-2">
        <p class="p-3 font-roboto text-lg font-normal leading-[1.625rem] tracking-[0.0625rem] text-[#FFFFFF]">
          教練電話：0988786796
        </p>

        <!-- 分隔線 -->
        <div class="w-[0.125rem] h-6 border-[#FFFFFF] border-[0.08125rem]"></div>

        <p class="p-3 font-roboto text-lg font-normal leading-[1.625rem] tracking-[0.0625rem] text-left text-[#FFFFFF]">
          王羿文教練
        </p>
      </div>

      <!-- 版權 -->
      <div class="flex justify-between">
        <span class="px-3 py-2 items-start min-h-8 font-['Noto_Sans_TC'] text-base font-normal leading-8 tracking-[0.125rem] text-left text-[#FFFFFF]">
          COPYRIGHT 2024 Shi HSINCHU SHI INLINE SKATE, ALL RIGHTS RESERVED. 恃 Shi Holdings
        </span>

        <img class="mt-2" src="../../../assets/images/a11y_logo.png" alt="恃" />
      </div>

    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
