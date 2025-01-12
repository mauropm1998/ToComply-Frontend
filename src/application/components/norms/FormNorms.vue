<template>
    <form ref="formNorms" @submit.prevent="processing" class="mt-5 mb-5">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Nome da Norma *</label>
                    <input v-model="norm.title" id="title" class="form-input py-2" type="text" placeholder="Título da Norma"
                        required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="code" class="font-semibold text-gray-500">Código da Norma *</label>
                    <input v-model="norm.code" id="code" class="form-input py-2" type="text" placeholder="Ex: ISO-9001"
                        required :disabled="sendingForm" />
                </div>

            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Tipo da Norma *</label>
                    <select v-model="norm.type" :disabled="sendingForm" id="type" class="form-select">
                        <option value="CERTIFIABLE">Certificável</option>
                        <option value="NOT_CERTIFIABLE">Não Certificável</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Categoria *</label>
                    <select v-model="norm.category" :disabled="sendingForm" id="type" class="form-select">
                        <option value="INTERNATIONAL">Norma Internacional</option>
                        <option value="JURISTIC">Norma Jurídica</option>
                        <option value="CORPORATE">Norma Empresarial</option>
                    </select>
                </div>
            </div>

            <div class="w-full mb-5">
                <label for="description" class="font-semibold text-gray-500">Descrição</label>
                <textarea id="description" cols="3" rows="4" v-model="norm.description" class="form-input py-2"
                    placeholder="Resumo detalhado sobre a norma..." :disabled="sendingForm"></textarea>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="organization" class="font-semibold text-gray-500">Organização Responsável *</label>
                    <input v-model="norm.organization" id="organization" class="form-input py-2" type="text"
                        placeholder="Nome da entidade que emitiu a norma." required :disabled="sendingForm" />
                </div>

                <div class="w-1/2">
                    <label for="post_date" class="font-semibold text-gray-500">Data de Publicação</label>
                    <input v-model="norm.post_date" id="post_date" class="form-input py-[7px]" type="date"
                        :disabled="sendingForm" />
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="revision_date" class="font-semibold text-gray-500">Data de Revisão</label>
                    <input v-model="norm.revision_date" id="revision_date" class="form-input py-[7px]" type="date"
                        :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="status" class="font-semibold text-gray-500">Estado</label>
                    <select v-model="norm.status" :disabled="sendingForm" id="status" required class="form-select">
                        <option value="ACTIVE">Ativa</option>
                        <option value="INACTIVE">Inativa</option>
                        <option value="IN_REVISION">Em Revisão</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <label for="certification_status" class="font-semibold text-gray-500">Estado de Certificação</label>
                    <select v-model="norm.certification_status" :disabled="sendingForm" required id="certification_status"
                        class="form-select">
                        <option value="PLANNED">Planejado</option>
                        <option value="IN_PROGRESS">Em Progresso</option>
                        <option value="CERTIFICATED">Certificada</option>
                        <option value="EXPIRED">Expirada</option>
                        <option value="NOT_APPLICABLE">Não Aplicável</option>
                    </select>
                </div>
            </div>

            <h2 class="form-title">Requisitos e Documentação</h2>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="requests" class="font-semibold text-gray-500">Requisitos Específicos *</label>
                    <textarea v-model="norm.requests" id="requests" cols="3" rows="4" class="form-input py-2"
                        placeholder="Lista de requisitos específicos que a norma impõe." required
                        :disabled="sendingForm"></textarea>
                </div>

                <div class="w-1/2">
                    <label class="font-semibold text-gray-500">Procedimentos Associados</label>
                    <label for="dropzone-file"
                        class="flex flex-col items-center w-full p-4 mx-auto mt-2 text-center bg-white border-2 border-gray-400 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>

                        <h3 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Carregar Ficheiro</h3>

                        <p class="mt-1 text-xs tracking-wide text-gray-500 dark:text-gray-400">Escolha um Ficheiro ou
                            arraste e
                            solte aqui.</p>

                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
            </div>

            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="references" class="font-semibold text-gray-500">Referências</label>
                    <textarea v-model="norm.references" id="references" cols="3" rows="4" class="form-input py-2"
                        placeholder="Liste as referências para esta Norma." :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="notes" class="font-semibold text-gray-500">Notas Adicionais</label>
                    <textarea v-model="norm.notes" id="notes" cols="3" rows="4" class="form-input py-2"
                        placeholder="Informações adicionais relevantes." required :disabled="sendingForm"></textarea>
                </div>
            </div>

            <h2 class="form-title">Sistemas</h2>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="" class="font-semibold text-gray-500">Condição Primária *</label>
                    <SelectSystem />
                </div>
                <div class="w-1/2">
                    <label for="" class="font-semibold text-gray-500">Condição Integrada *</label>
                    <SelectSystem />
                </div>
            </div>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="" class="font-semibold text-gray-500">Condição Anexas (Sistemas) *</label>
                    <SelectSystem />
                </div>
                <div class="w-1/2">
                    <label for="" class="font-semibold text-gray-500">Condição Anexas (Programas) *</label>
                    <SelectSystem />
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectSystem from './SelectSystem.vue';

const emit = defineEmits(
    [
        "processing",
        "success",
        "success-update",
        "error",
        "error-update",
        "close-modal",
    ]
);

const formNorms = ref(null);
const sendingForm = ref(false);

const norm = ref(reactive({
    title: null,
    code: null,
    type: "CERTIFIABLE",
    category: "INTERNATIONAL",
    description: null,
    requests: null,
    references: null,
    notes: null,
    post_date: null,
    application_date: null,
    revision_date: null,
    documentation: null,
    status: "ACTIVE",
    certification_status: "IN_PROGRESS",
}));

const resetForm = () => {
    formNorms.value.classList.remove("was-validated");
    formNorms.value.reset();

    norm.value = {
        title: null,
        code: null,
        type: "CERTIFIABLE",
        category: "INTERNATIONAL",
        description: null,
        post_date: null,
        application_date: null,
        revision_date: null,
        documentation: null,
        status: "ACTIVE",
        certification_status: "IN_PROGRESS",
    };
};

const processing = () => {
    sendingForm.value = true;
    if (formNorms.value.checkValidity() === true) {
        formNorms.value.classList.remove("was-validated");
        emit("processing");
        axiosSaveNorm();
    }
    else {
        formNorms.value.classList.add("was-validated");
    }
};

const axiosSaveNorm = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(norm.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/norms/save`, jsonObject, config)
        .then((response) => {
            sendingForm.value = false;
            if (response.data === "OK") {
                resetForm();
                emit("success");
            }
            else {
                emit("error");
            }
        })
        .catch(() => {
            sendingForm.value = false;
            emit("error");
        });
};

onMounted(() => {

});

</script>