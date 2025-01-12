<template>
    <main class="container mx-auto mt-8">
        <section class="flex items-start gap-x-6 mt-4">
            <div class="w-full">
                <div class="bg-white">
                    <div class="bg-gray-200 h-32 rounded-t-lg"></div>
                    <div class="mx-14">
                        <div class="flex gap-x-4 -mt-9 items-center">
                            <div class="relative">
                                <img class="w-36 h-36 mb-3 rounded-full shadow-lg border-4 border-white"
                                    src="/src/assets/img/user.jpg" alt="Identidade Visual da Empresa" />
                                <i
                                    class="bi bi-check-circle-fill text-green-600 text-[1.6rem] absolute bottom-4 right-2"></i>
                            </div>

                            <div class="info mt-4">
                                <h1 class="text-[26px] font-bold text-gray-800 dark:text-white">IDIMA TECH SOLUTIONS LDA
                                </h1>

                                <div class="flex gap-x-4 items-center">
                                    <span class="text-gray-500 font-semibold">ID: ID4632</span>
                                    <CompanyStatus status="INACTIVE" />
                                    <span class="text-gray-500 font-semibold"><strong>134</strong> dia(s)
                                        restante(s)</span>

                                    <button class="border py-1.5 px-2.5 text-gray-500">
                                        <i class="bi bi-gear text-[1.1rem]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ProfileCompanyInfo />
                    </div>

                </div>

                <div class="mt-5 card">
                    <div
                        class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                        <button
                            class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent font-semibold border-b-4 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                            Utilizadores
                        </button>
                    </div>

                    <div class="flex flex-col mt-8">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden pb-20">

                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead class="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th
                                                    class="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <span>ID</span>
                                                </th>
                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Nome Completo
                                                </th>

                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    E-mail
                                                </th>

                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Data de Adesão
                                                </th>

                                                <th scope="col"
                                                    class="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Estado
                                                </th>

                                                <th scope="col">
                                                    <span class="sr-only">Opções</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="bg-white divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:bg-gray-900">
                                            <tr>
                                                <td
                                                    class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <span>001</span>
                                                </td>

                                                <td class="px-4 py-4 text-sm font-normal table-long-text">
                                                    Naor de Almeida
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    user@email.com
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    22 Mai 2028
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <UserStatus status="SUSPENSE" />
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap relative">
                                                    <BaseDropdownOptions :options="['DELETE', 'PREVIEW']"
                                                        @preview="showDialogPreviewNorm(1)"
                                                        @delete="showDialogDelete(1)" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProfileUserInfo />

        </section>
    </main>

    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteNorm" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Notificação" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta conta. Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita.
    </BaseModalDialog>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import BaseDropdownOptions from "@/components/BaseDropdownOptions.vue";
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import CompanyStatus from '@/components/profile/CompanyStatus.vue';
import UserStatus from '@/components/profile/UserStatus.vue';
import ProfileCompanyInfo from '@/components/profile/ProfileCompanyInfo.vue';
import ProfileUserInfo from '@/components/profile/ProfileUserInfo.vue';
//import PageLoader from "@/components/PageLoader.vue";


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
    document.title = "Comply 360 | Perfil";
});

</script>

<style scoped></style>