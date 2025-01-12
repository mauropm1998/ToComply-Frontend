<template>
    <main class="container mx-auto mt-8">
        <h1 class="font-bold text-xl">Notificações</h1>

        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <RouterLink :to="{ name: 'dashboard' }"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Painel
                    </RouterLink>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span
                            class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Notificações</span>
                    </div>
                </li>
            </ol>
        </nav>

        <section class="mt-4 inline-flex gap-x-4">
            <aside class="w-[560px] divide-y divide-gray-100 dark:divide-gray-700">
                <div
                    class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                    <button
                        class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-blue-500 sm:text-sm text-white hover:bg-blue-500 hover:text-white">
                        <i class="bi bi-list-ul text-[1rem]"></i>
                        Todas
                    </button>

                    <button class="btn-filter">
                        <i class="bi bi-eye-slash text-[1rem]"></i>
                        Não Lidas
                    </button>

                    <button class="btn-filter">
                        <i class="bi bi-star text-[1rem]"></i>
                        Favoritas
                    </button>
                </div>

                <div class="-z-0 relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input v-model="searchBy" type="text" placeholder="Procurar por nome..." @input="getProcessByName"
                        class="block w-full py-2 pr-5 text-gray-700 bg-white border border-gray-300/70 rounded-lg placeholder-gray-400/70 pl-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>

                <div class="mt-3">
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="rounded-full w-11 h-11" src="/src/assets/img/user.jpg" alt="Jese image">
                            <div
                                class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 18 18">
                                    <path
                                        d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                    <path
                                        d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full ps-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span
                                    class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey,
                                what's up? All set for the presentation?"</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                        </div>
                    </a>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="rounded-full w-11 h-11" src="/src/assets/img/user.jpg" alt="Joseph image">
                            <div
                                class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full ps-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                    class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and
                                <span class="font-medium text-gray-900 dark:text-white">5 others</span> started
                                following you.
                            </div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                        </div>
                    </a>
                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="rounded-full w-11 h-11" src="/src/assets/img/user.jpg" alt="Bonnie image">
                            <div
                                class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                                <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full ps-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                    class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and
                                <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your
                                story. See it and view more stories.
                            </div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                        </div>
                    </a>
                </div>

            </aside>

            <div class="card">
                <div class="flex justify-between">
                    <h1 class="text-gray-600 text-2xl font-semibold mb-2">Uma Notificação Qualquer</h1>
                    <div class="options flex gap-x-1">
                        <button class="btn-light"><i class="bi bi-star text-[1rem]"></i></button>
                        <button class="btn-light"><i class="bi bi-trash3 text-[1rem]"></i></button>
                    </div>
                </div>

                <span class="text-blue-600 text-sm text-semibold block mb-3">12 Junho 2024, às 14:05</span>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi delectus harum consequuntur
                    reiciendis dolores beatae amet doloremque, voluptas consectetur hic a, dolore porro. Quidem,
                    asperiores praesentium dolores reprehenderit minima quod.
                </p>
            </div>
        </section>

    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteNorm" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Notificação" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta Notificação. Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import BaseModalDialog from "@/components/BaseModalDialog.vue";
//import PageLoader from "@/components/PageLoader.vue";


const searchBy = ref("");
const open_modal_delete = ref(false);
const notification_id_to_actiion = ref(false);


const showDialogDelete = (id) => {
    open_modal_delete.value = true;
    notification_id_to_actiion.value = id;
    document.body.style.overflow = "hidden";
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
    document.body.style.overflow = "auto";
};

onMounted(() => {
    document.title = "Comply 360 | Notificações";
});

</script>

<style scoped></style>