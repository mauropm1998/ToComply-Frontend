<template>
  <form novalidate @submit.prevent="">
    <div class="space-y-3">
      <div>
        <label class="text-gray-800 text-sm mb-2 block">Nome completo *</label>
        <input
          v-model="registrationRequest.fullname"
          type="text"
          class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
          placeholder="Informe seu nome"
        />
      </div>
      <div>
        <label class="text-gray-800 text-sm mb-2 block">Email *</label>
        <input
          v-model="registrationRequest.email"
          type="email"
          class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
          placeholder="Informe seu email"
        />
      </div>
      <div>
        <label class="text-gray-800 text-sm mb-2 block">Palavra-passe *</label>
        <input
          v-model="registrationRequest.password"
          name="password"
          type="password"
          class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
          placeholder="Enter password"
        />
      </div>
    </div>

    <div class="!mt-8">
      <button
        @click="registrateUser"
        type="button"
        class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Criar conta
      </button>
    </div>
    <p class="text-gray-800 text-sm mt-6 text-center">
      Já tem uma conta?
      <a href="/login" class="text-blue-600 font-semibold hover:underline ml-1">Faça Login</a>
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import { UserService } from '@/services/user/UserService'
import axios from '@/util/Axios'

const emit = defineEmits(['registering'])

const registrationRequest = ref({
  fullname: null,
  email: null,
  password: null
})

const router = useRouter()
const isRegistering = ref(false)
const userService = new UserService()

const toastOptions = ref({
  autoClose: 5000,
  clearOnUrlChange: false,
  closeOnClick: true,
  style: {
    fontSize: '.85rem'
  }
})

const registrateUser = async () => {
  isRegistering.value = true
  emit('registering', true)

  try {
    const response = await axios.post('/auth/registration', registrationRequest.value)
    isRegistering.value = false
    emit('registering', false)
    userService.userData = response.data
    console.log(response.data)
    router.push({ name: 'dashboard' })
  } catch (error) {
    toastOptions.value.type = 'error'

    if (error.response && error.response.data.errors && error.response.data.errors.length > 0) {
      error.response.data.errors.forEach((err) => {
        toast(err, toastOptions.value)
      })
    } else {
      toast(error.response.data.message, toastOptions.value)
    }

    isRegistering.value = false
    emit('registering', false)
  }
}
</script>
