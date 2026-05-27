<template>
  <div class="preview-code">
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? '隐藏代码' : '显示代码' }} &lt; &gt;</span>
    </div>
    <el-scrollbar>
      <transition>
        <pre v-highlight v-if="showCode">
          <code>{{ sourceCode }}</code>
        </pre>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  compName: {
    type: String,
    default: '',
    require: true
  }
})

const showCode = ref(false)
const sourceCode = ref('')

const showOrhideCode = () => {
  showCode.value = !showCode.value
}

const getSourceCode = async () => {
  let code = await import(
    /* @vite-ignore */ `@/components/hasaki-ui/${props.compName}/doc/doc.vue?raw`
  )
  sourceCode.value = code.default
}

onMounted(() => {
  getSourceCode()
})
</script>
<style lang="scss">
.preview-code {
  height: 300px;
  .showCode {
    cursor: pointer;
    color: #777;
    text-align: right;
    padding-right: 50px;
    &:hover {
      color: #409eff;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
</style>
