<template>
  <div>
    <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4 !bg-white">
      <div class="flex justify-center items-center gap-4 w-full">
        <div
          class="border border-gray-300 rounded-lg p-6 w-[400px] shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto relative overflow-hidden"
        >
          <LoginForm @authenticating="onAuthenticating" />
          <Progress v-if="isAuthenticating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LoginForm from '@/components/login/LoginForm.vue'
import Progress from '@/components/Progress.vue'

const isAuthenticating = ref(false)
const onAuthenticating = (state) => {
  isAuthenticating.value = state
}

onMounted(async () => {
  document.title = 'Iniciar Sessão - Comply360'
})
</script>
