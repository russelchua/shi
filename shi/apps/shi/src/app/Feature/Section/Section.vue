<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

// defineProps<{}>()
const items = ref(
  [
    { id: 1, name: '品牌故事' },
    { id: 2, name: '上課地點' },
    { id: 3, name: '教學模式' },
    { id: 4, name: '產品介紹' },
    { id: 5, name: '聯絡我們' },
  ]
)
</script>

<template>
  <!-- 內容外部排版 -->
  <section class="w-screen bg-[#A0A0A0] min-h-screen">

    <!-- 內容內部排版 置中 -->
    <div class="max-w-[95rem] my-0 mx-auto">
      <!-- 各頁連結外部排版 -->
      <div class="flex justify-end">
        <!-- 各頁連結內部排版 -->
        <div class="flex justify-content-center align-items-center h-16 p-4 gap-12">
          <template v-for="item in items" :key="item.id">
            <div>{{ item.name }}</div>
          </template>
        </div>
      </div>

      <!-- 各功能頁 -->
      <RouterView />
    </div>

  </section>
</template>

<style scoped></style>
