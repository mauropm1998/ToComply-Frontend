<template>
    <article>
        <p class="text-gray-500 text-lg font-medium"><i class="bi bi-card-image"></i> Minha_imagem_de_evidencia.png</p>
        <div class="text-gray-600">
            234.7KB | <span class="text-blue-600 font-medium">Naor de Almeida</span> | 22 Abr 2024
        </div>
        <div class="relative my-3 w-full h-44 image-box">
            <img src="/src/assets/img/ev1.jpg" alt="Evidência anexada" class="w-full h-44 rounded-lg">
            <button type="button" @click="open_info_dialog = true"
                class="px-4 py-1.5 image-btn hidden absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] transition duration-100 hover:bg-[rgba(0, 0, 0, 0.45)]">
                <i class="bi bi-eye-fill text-[2.3rem] text-white"></i>
            </button>
        </div>
    </article>


    <BaseModalDialog @close-modal="closeModalAlertDelete" @yes="axiosDeleteDocumentation" @no="closeModalAlertDelete"
        :open-modal="open_modal_delete" :enable-close-outside="true" title="Eliminar Evidência" type="DANGER"
        buttons="YES_NO">
        Você está prestes a eliminar esta<strong> Evidência e todos os dados associados.</strong> Deseja realmente
        prosseguir? *Essa operação não pode ser desfeita!
    </BaseModalDialog>

    <BaseModalContent @close-modal="closeModalUpdate" :open-modal="open_info_dialog" :enable-close-outside="false">

        <div class="bg-white py-4 rounded-lg max-w-[670px] w-full relative">
            <button @click="closeModalUpdate"
                class="absolute -top-3 -right-3 flex items-center justify-center w-1/2 p-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-50 border shadow-sm rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                <i class="bi bi-x-lg text-[1rem]"></i>
            </button>
            <div class="text-center pt-4">
                <h2 class="font-semibold text-2xl text-gray-500">Atualizar Informações</h2>
                <span class="text-gray-400">Edite informações referente a Evidência</span>
            </div>

            <div class="h-[70vh] overflow-y-scroll beauty-scrollbar px-8">
       
            </div>
        </div>

    </BaseModalContent>
</template>


<script setup>

import { ref } from 'vue';
import BaseModalDialog from "@/components/BaseModalDialog.vue";
import BaseModalContent from "@/components/BaseModalContent.vue";


const open_info_dialog = ref(false);

const showDialogDelete = () => {
    open_modal_delete.value = true;
};

const closeModalUpdate = () => {
    open_update_dialog.value = false;
};

const closeModalAlertDelete = () => {
    open_modal_delete.value = false;
};

defineProps({
    evidence: {
        type: Object,
        default: null,
    }
})

</script>

<style scoped>
.image-box:hover .image-btn {
    @apply block;
}

</style>
