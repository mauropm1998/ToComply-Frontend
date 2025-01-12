import axios from 'axios'
import { UserService } from '@/services/user/UserService.js'
import { getProfile } from './Util.js'

const profile = getProfile()
const userService = new UserService()

const instance = axios.create({
  baseURL: profile === 'dev' ? 'http://localhost:8080/api/v1' : 'https://comply360.ao/api/v1'
})

// Interceptor para anexar o token
instance.interceptors.request.use(
  async (config) => {
    if (window.location.pathname !== '/login' && window.location.pathname !== '/registration') {
      const token = userService.userData.accessToken
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
)

// Interceptor para tratar respostas 401
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/registration'
    ) {
      console.warn('Sessão expirada ou token inválido. Redirecionando para login.')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default instance
