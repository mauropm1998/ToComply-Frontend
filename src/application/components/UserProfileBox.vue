<template>
    <div class="flex justify-end">
        <!-- User Profile Dropdown toggle button -->
        <button @click="toggleBox"
            class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-700 md:me-0"
            type="button">
            <span class="sr-only">Abrir menu do usuário</span>
            <img class="w-8 h-8 me-2 rounded-full"
              src="/src/assets/img/user.jpg"
                alt="Identidade visual do usuário">
            Naor de Almeida
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>


        <!-- Dropdown menu -->
        <Transition name="dropdown" mode="in-out">
            <div v-show="openBox"
                class="dropdown absolute top-[2.3rem] -right-1 w-[240px] py-2 mt-2 z-50 bg-white rounded-lg shadow-2xl border-2 border-solid border-gray-200 max-w-sm divide-y divide-gray-100">

                <div
                    class="flex items-center py-4 px-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300">
                    <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        alt="jane avatar">
                    <div class="mx-1">
                        <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                    </div>
                </div>

                <hr class="border-gray-200 dark:border-gray-700 ">

                <RouterLink :to="{ name: 'profile' }"
                    class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Ver Perfil
                </RouterLink>

                <a href="#"
                    class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Definições
                </a>

                <hr class="border-gray-200 dark:border-gray-700 ">

                <a href="#" @click.prevent="terminarSessao"
                    class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Terminar Sessão
                </a>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { UserService } from "@/services/user/UserService";
import { ref } from "vue";

const openBox = ref(false);
const userService = new UserService();

const toggleBox = () => {
    openBox.value = !openBox.value;

    if (openBox.value) {
        setTimeout(() => {
            document.addEventListener("click", closeDropdownOnClickOutside)
        }, 100)
    }
};

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
        openBox.value = false;
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

const terminarSessao = () => {
    userService.removeUserdata()
    window.location.href = "/login";
}

</script>

<style scoped></style>