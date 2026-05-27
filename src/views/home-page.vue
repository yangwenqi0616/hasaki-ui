<template>
  <div class="home-page">
    <div class="home-page-sidebar">
      <div class="logo">
        <img src="/favicon.ico" alt="" />
        hasaki-ui
      </div>
      <ul v-for="item in routes" :key="item">
        <li
          v-for="(ele, index) in item.children"
          :key="ele"
          :class="{ active: mIndex == index }"
          @click="goPath(ele, index)"
        >
          {{ ele.name }}
        </li>
      </ul>
    </div>
    <main class="home-page-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mIndex = ref(sessionStorage.getItem('mIndex') || '0')
const routes = computed(() => router.options.routes)

const goPath = (ele, index) => {
  mIndex.value = index
  router.push({
    path: ele.path
  })
  sessionStorage.setItem('mIndex', index)
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-sidebar {
    width: 200px;
    height: 100%;
    border-right: 1px solid #eee;
    text-align: center;
    .logo {
      display: flex;
      align-items: center;
      padding: 15px;
      font-size: 20px;
      img {
        width: 25px;
        margin-right: 10px;
      }
    }
    ul {
      li {
        height: 50px;
        line-height: 50px;
        cursor: pointer;
      }
      .active {
        color: #409eff;
        background-color: #ecf5ff;
        border-right: 1px solid #409eff;
      }
    }
  }
  &-main {
    flex: 1;
    padding: 20px 50px;
    overflow-y: auto;
  }
}
</style>
