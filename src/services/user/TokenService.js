import { UserService } from './UserService'
import axios from '@/util/Axios'

const userService = new UserService()

const isExpired = (userData) => {
  if (!userData) {
    return true // Se não há token, considere-o expirado
  }

  const payload = JSON.parse(atob(userData.accessToken.split('.')[1])) // Decodifica o payload do JWT
  const currentTime = Math.floor(Date.now() / 1000) // Tempo atual em segundos

  return payload.exp < currentTime // Verifica se o token expirou
}

const isValid = async () => {
  try {
    const response = await axios.get('/auth/check-token', {
      headers: {
        Authorization:
          userService.userData !== null ? 'Bearer ' + userService.userData.accessToken : ''
      }
    })

    if (response.status === 200) {
      return response.data.response
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

// Função para verificar se o token já expirou
export async function isTokenValid() {
  // Verificar se o Token de Acesso ainda é válido ou se já expirou
  const userService = new UserService()
  const expired = isExpired(userService.userData)
  const valid = await isValid()

  if (expired && !valid) {
    return false
  } else if (expired) {
    return false
  } else if (!valid) {
    return false
  } else {
    return true
  }
}
