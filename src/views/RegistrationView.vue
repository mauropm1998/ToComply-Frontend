<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4 !bg-white">
    <div
      class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 relative overflow-hidden"
    >
      <div class="text-center mb-12">
      </div>
      <RegistrationForm @registering="onRegistering" />
      <Progress v-if="isRegistering" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Progress from '@/components/Progress.vue'
import RegistrationForm from '@/components/registration/RegistrationForm.vue'

const isRegistering = ref(false)
const onRegistering = (state) => {
  isRegistering.value = state
}

onMounted(async () => {
  document.title = 'Criar uma conta - Comply360'
})
</script>
