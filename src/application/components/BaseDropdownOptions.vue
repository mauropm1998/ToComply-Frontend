<template>
    <div class="flex justify-end">
        <!-- Dropdown toggle button -->
        <button class="px-1 py-1 text-blue-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-blue-50" @click="toggleDropdown">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
        </button>
        <!-- Dropdown menu -->
        <Transition name="dropdown" mode="in-out">
            <div v-show="openDropdown" class="dropdown absolute top-[2.2rem] right-[1.10rem] w-48 py-2 mt-2 z-30 bg-white rounded-md shadow-xl border border-solid border-gray-200 dark:bg-gray-800"
            >
                <RouterLink v-if="options.includes('PREVIEW_ROUTER_LINK')" :to="preview_route_object" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white"> 
                    <i class="bi bi-info-circle w-5 h-5 mx-1 text-[1.1rem]"></i>
                    <span class="mx-1">
                        Detalhes
                    </span>
                </RouterLink>

                <RouterLink v-if="options.includes('PERMISSIONS_ROUTER_LINK')" :to="permission_route_object" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white"> 
                    <i class="bi bi-key w-5 h-5 mx-1 text-[1.2rem]"></i>
                    <span class="mx-1">
                        Permissões
                    </span>
                </RouterLink>

                <RouterLink v-if="options.includes('UPDATE_ROUTER_LINK')" :to="update_route_object" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-pencil-square w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Atualizar
                    </span>
                </RouterLink>

                <a v-if="options.includes('PREVIEW')" @click.prevent="$emit('preview')" href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white"> 
                    <i class="bi bi-info-circle w-5 h-5 mx-1 text-[1.1rem]"></i>
                    <span class="mx-1">
                        Detalhes
                    </span>
                </a>

                <a v-if="options.includes('UPDATE')" @click.prevent="$emit('update')" href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-pencil-square w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Atualizar
                    </span>
                </a>

                <a v-if="options.includes('DOWNLOAD')" @click.prevent="$emit('download')" href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-download w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Baixar
                    </span>
                </a>

                <a v-if="options.includes('DELETE')" @click="$emit('delete')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-trash w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Eliminar
                    </span>
                </a>

                <!-- Instructor Options  -->

                <a v-if="options.includes('ADD_INSTRUCTOR')" @click="$emit('add-instructor')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-person-add w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Adicionar Instrutor
                    </span>
                </a>

                <a v-if="options.includes('CHANGE_INSTRUCTOR')" @click="$emit('remove')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-arrow-repeat w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Trocar de Instrutor
                    </span>
                </a>

                <a v-if="options.includes('REMOVE_INSTRUCTOR')" @click="$emit('remove')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-person-slash w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Remover Instrutor
                    </span>
                </a>

                <!-- Participant Options  -->
                <a v-if="options.includes('EVALUATE_PARTICIPANT')" @click="$emit('evaluate')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-clipboard2-check w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Avaliar Participante
                    </span>
                </a>
                <a v-if="options.includes('REMOVE_PARTICIPANT')" @click="$emit('remove-participant')" @click.prevent href="#" class="flex items-center font-medium px-3 py-3 text-sm text-gray-800 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i class="bi bi-person-slash w-5 h-5 mx-1 text-[1.05rem]"></i>
                    <span class="mx-1">
                        Remover Participante
                    </span>
                </a>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue"

const openDropdown = ref(false);

defineProps({
    preview_route_object: Object,
    permission_route_object: Object,
    update_route_object: Object,
    options: {
        type: Array, // DELETE | UPDATE | DOWNLOAD | PREVIEW | UPDATE_ROUTER_LINK | PREVIEW_ROUTER_LINK | PERMISSIONS_ROUTER_LINK
        default: () => ["DELETE"]
    }
})

defineEmits(["delete", "update", "preview", "download"]);

const closeDropdownOnClickOutside = (event) => {
    if (!event.target.classList.contains("dropdown")) {
    openDropdown.value = false;
    document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

const toggleDropdown = () => {
    openDropdown.value = !openDropdown.value;

    if (openDropdown.value) {
        setTimeout(() => {
            document.addEventListener("click", closeDropdownOnClickOutside)  
        }, 100) 
    }
};

</script>

<style scoped>
.dropdown-enter-active{
    transition: all .3s ease;
}
.dropdown-leave-active {
    transition: all .2s ease;
}

.dropdown-enter-from{
    opacity: 0;
    transform: translateY(20%);
}
.dropdown-leave-to {
    opacity: 0;
}
</style>