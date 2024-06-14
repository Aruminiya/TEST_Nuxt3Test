<template>
  <NuxtLayout>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-3/12">側邊欄位</div>
        <div class="w-full sm:w-9/12">
          <NuxtPage />
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute left-0 w-screen">
        <div class="bg-gray-200 p-4">none container</div>
      </div>
    </div>

  </NuxtLayout>
</template>

<script>
</script>