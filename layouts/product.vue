<template>
    <header>
      <nav>
          <NuxtLink to="/">Nuxt3 Test</NuxtLink>
      </nav>
    </header>
  
    <!-- 輸出組建內容 -->
    <div>
      <slot></slot>
    </div>
  
    <footer>
      <ul>
          <li><NuxtLink to="/">首頁</NuxtLink></li>
          <li><NuxtLink to="/about">關於我們</NuxtLink></li>
          <li><NuxtLink to="/products">產品總覽</NuxtLink></li>
      </ul>
    </footer>
  </template>

  <script>
  </script>
  
  <style scoped>
  .router-link-exact-active{
      color: rgb(76, 220, 141);
  }
  </style>