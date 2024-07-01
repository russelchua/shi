<script setup lang="ts">
// defineProps<{}>()
</script>

<template>
  <!-- 內容外部排版 -->
  <header class="w-screen min-h-[10.329375rem] bg-[#131313]">

    <!-- 內容內部排版 置中 -->
    <div class="max-w-[95rem] my-0 mx-auto">
      <!-- 圖與標題排版 -->
      <h1 class="flex items-center justify-between mt-3.5">
        <a href=""><img class="logo" src="../../../assets/images/logo 2.png" width="100%" alt="恃" /></a>

        <div class="flex flex-col items-center gap-4">
          <p class="title" tabindex="0">新竹恃直排輪學校</p>
          <p class="title" tabindex="0">HSINCHU SHI INLINE SKATE</p>
        </div>
      </h1>

      <!-- 線 -->
      <div class="border-2 border-solid border-[#FFFFFF] mt-[0.9375rem]"></div>
      <div class="border-2 border-solid border-[#A0A0A0] mt-1.5"></div>
    </div>

  </header>
</template>

<style lang="scss" scoped>
// TODO 晚點再弄怎麼把字型新增到Tailwind裡面
.title {
  font-family: Noto Sans TC;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.1875rem;
  text-align: left;
  color: #FFFFFF;
}
</style>
