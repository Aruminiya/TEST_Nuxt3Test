<template>
  <header>
    <nav class="bg-gray-50">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NuxtLink to="/">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
              </div>
            </NuxtLink>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <NuxtLink to="/" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >首頁</NuxtLink>
                <NuxtLink to="/about" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">關於我們</NuxtLink>
                <NuxtLink to="/products" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">產品總覽</NuxtLink>
                <NuxtLink to="/uiTest" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">NuxtUI 測試</NuxtLink>
                <NuxtLink to="/vueUseTest" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">VueUse 測試</NuxtLink>
                <NuxtLink to="/vCalendar" class="link hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">vCalendar 測試</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- 輸出組建內容 -->
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
.router-link-exact-active.link{
  background-color: rgb(29, 20, 51);
  color: white;
}
</style>