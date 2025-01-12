<template>
    <div class="flex justify-end">
        <!-- Set responsable person toggle button -->
        <input id="responsable" v-model="getResponsableName" @click="toogleBox"
            class="block form-control cursor-pointer w-full px-4 py-2 mt-2.5 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
            type="text" placeholder="Clique para adicionar" required readonly />

        <!-- Set responsable person content -->
        <Transition name="box" mode="in-out">
            <div v-show="openBox"
                class="box absolute top-[3rem] left-0 w-[350px] py-2 px-3 mt-2 z-50 bg-white rounded-lg shadow-2xl border-2 border-solid border-gray-200">
                <ul class="space-y-2">
                    <li class="hover:bg-blue-50 px-2 py-1 rounded-lg">
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-9 h-9 rounded-full" src="/src/assets/img/user.jpg"
                                alt="Identidade Visual">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white leading-tight">Arthur Melo</h2>
                                <p class="text-sm font-normal text-blue-700">Administrador
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="hover:bg-blue-50 px-2 py-1 rounded-lg">
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-9 h-9 rounded-full" src="/src/assets/img/user.jpg"
                                alt="Identidade Visual">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white leading-tight">Arthur Melo</h2>
                                <p class="text-sm font-normal text-blue-700">Administrador
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="hover:bg-blue-50 px-2 py-1 rounded-lg">
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-9 h-9 rounded-full" src="/src/assets/img/user.jpg"
                                alt="Identidade Visual">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white leading-tight">Arthur Melo</h2>
                                <p class="text-sm font-normal text-blue-700">Administrador
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits("send-responsable-data");

const openBox = ref(false);
const getResponsableName = ref(null);

const responsableData = ref({
    name: null,
    email: null,
});

const toogleBox = () => {
    openBox.value = !openBox.value;
};

const processing = () => {
    emit('send-responsable-data', responsableData.value);
    getResponsableName.value = responsableData.value.name;
    toogleBox();
}

</script>

<style scoped>
.box-enter-active {
    transition: all .3s ease;
}

.box-leave-active {
    transition: all .2s ease;
}

.box-enter-from {
    opacity: 0;
    transform: translateY(20%);
}

.box-leave-to {
    opacity: 0;
}
</style>