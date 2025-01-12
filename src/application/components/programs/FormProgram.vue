<template>
    <form ref="formProgram" @submit.prevent="processing" class="mt-5 mb-10">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="grid grid-cols-3 gap-x-5 mb-5">
                <div>
                    <label for="title" class="font-semibold text-gray-500">Título du Programa *</label>
                    <input v-model="program.title" id="title" class="form-input py-2" type="text"
                        placeholder="Nome do Programa." required :disabled="sendingForm" />
                </div>
                <div>
                    <label for="responsable" class="font-semibold text-gray-500">Responsável *</label>
                    <input v-model="program.responsable" id="responsable" class="form-input py-2" type="text"
                        placeholder="Nome do Responsável." required :disabled="sendingForm" />
                </div>
                <div>
                    <label for="status" class="font-semibold text-gray-500">Estado</label>
                    <select v-model="program.status" id="status" class="form-select" :disabled="sendingForm">
                        <option value="PLANNED">Planejado</option>
                        <option value="IN_COURSE">Em Vigor</option>
                        <option value="SUSPENDED">Suspenso</option>
                    </select>
                </div>

            </div>

            <div class="w-full mb-5">
                <label for="objective" class="font-semibold text-gray-500">Objetivos *</label>
                <textarea id="objective" cols="3" rows="4" v-model="program.objective" class="form-input py-2"
                    placeholder="Objetivos do programa." :disabled="sendingForm" required></textarea>
            </div>

            <h2 class="form-title">Estrutura do Programa</h2>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="description" class="font-semibold text-gray-500">Descrição das Atividades</label>
                    <textarea id="description" cols="3" rows="4" v-model="program.description" class="form-input py-2"
                        placeholder="Descreva as atividades a serem executadas no programa."
                        :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="resources" class="font-semibold text-gray-500">Recursos Necessários</label>
                    <textarea id="resources" cols="3" rows="4" v-model="program.resources" class="form-input py-2"
                        placeholder="Recursos necessários para a implementação do programa."
                        :disabled="sendingForm"></textarea>
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="success_indicators" class="font-semibold text-gray-500">Indicadores de Sucesso</label>
                    <textarea id="success_indicators" cols="3" rows="4" v-model="program.success_indicators"
                        class="form-input py-2" placeholder="Descreva as atividades a serem executadas no programa."
                        :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="notes" class="font-semibold text-gray-500">Notas Adicionais</label>
                    <textarea id="notes" cols="3" rows="4" v-model="program.notes" class="form-input py-2"
                        placeholder="Informações adicionais relevantes para o programa." :disabled="sendingForm"></textarea>
                </div>
            </div>

            <div class="mb-5">
                <label class="font-semibold text-gray-500">Documentos Relacionados</label>
                <label for="dropzone-file"
                    class="flex flex-col items-center w-full p-6 mx-auto mt-2 text-center bg-white border-2 border-gray-400 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
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

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <h2 class="form-title">Normas</h2>
                    <label for="person_norm" class="font-semibold text-gray-500">Normas Associadas</label>
                    <div class="relative">
                        <SelectNorm @send-norm-data="normData" />
                    </div>
                </div>

                <div class="w-1/2">
                    <h2 class="form-title">Processos</h2>
                    <label for="person_responsible" class="font-semibold text-gray-500">Processos Anexos</label>
                    <div class="relative">
                        <SelectProcess @send-norm-data="normData" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectNorm from '../norms/SelectNorm.vue';
import SelectProcess from '../process/SelectProcess.vue';

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

const formProgram = ref(null);
const sendingForm = ref(false);

const program = ref(reactive({
    title: null,
    description: null,
    objective: null,
    person_responsable: null,
    post_date: null,
    application_date: null,
    lidate_date: null,
    documentation: null,
    status: "PLANNED",
}));

const resetForm = () => {
    formProgram.value.classList.remove("was-validated");
    formProgram.value.reset();

    program.value = {
        title: null,
        description: null,
        person_responsable: null,
        responsable_post: null,
        post_date: null,
        application_date: null,
        validate_date: null,
        documentation: null,
        status: null,
    };
};

const processing = () => {
    sendingForm.value = true;
    if (formProgram.value.checkValidity() === true) {
        formProgram.value.classList.remove("was-validated");
        emit("processing");
        axiosSaveNorm();
    }
    else {
        formProgram.value.classList.add("was-validated");
    }
};

const axiosSaveNorm = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(program.value);
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