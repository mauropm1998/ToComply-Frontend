<template>
    <form ref="formSystem" @submit.prevent="processing" class="mt-5 mb-10">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="title" class="font-semibold text-gray-500">Título do Sistema *</label>
                <input v-model="system.title" id="title" class="form-input py-2" type="text" placeholder="Escreva aqui."
                    required :disabled="sendingForm" />
            </div>
            <div class="w-1/2">
                <label for="title" class="font-semibold text-gray-500">Tipo do Sistema *</label>
                <select v-model="system.type" :disabled="sendingForm" id="type" class="form-select">
                    <option value="CERTIFIABLE">Certificável</option>
                    <option value="NOT_CERTIFIABLE">Não Certificável</option>
                </select>
            </div>
        </div>

        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="responsible" class="font-semibold text-gray-500">Responsável pelo Sistema *</label>
                <input type="text" v-model="system.person_responsible" :disabled="sendingForm" id="responsible"
                    class="form-input py-2" placeholder="Nome completo do responsável" required>
            </div>
            <div class="w-1/2">
                <label for="date" class="font-semibold text-gray-500">Data da Implementação *</label>
                <input type="date" id="date" v-model="system.date" :disabled="sendingForm" class="form-input py-[7px]"
                    required>
            </div>
            <div class="w-1/2">
                <label for="status" class="font-semibold text-gray-500">Estado</label>
                <select v-model="system.status" :disabled="sendingForm" id="status" class="form-select">
                    <option value="DEVELOPMENT">Em Desenvolvimento</option>
                    <option value="IMPLEMENTED">Implementado</option>
                    <option value="MAINTENANCE">Em Manutenção</option>
                    <option value="DISABLED">Descontinuado</option>
                </select>
            </div>
        </div>

        <h2 class="form-title">Estrutura do Sistema</h2>

        <div class="w-full mb-5">
            <label for="indicators" class="font-semibold text-gray-500">Indicadores de Desempenho</label>
            <div class="relative">
                <SelectIndicators @send-indicator-data="responsibleData" />
            </div>
        </div>

        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="description" class="font-semibold text-gray-500">Descrição *</label>
                <textarea id="description" cols="3" rows="4" v-model="system.description" class="form-input py-2"
                    placeholder="Resumo detalhado sobre o sistema." :disabled="sendingForm" required></textarea>
            </div>
            <div class="w-1/2">
                <label for="components" class="font-semibold text-gray-500">Componentes *</label>
                <textarea id="components" cols="3" rows="4" v-model="system.components" class="form-input py-2"
                    placeholder="Partes integrantes do sistema." :disabled="sendingForm" required></textarea>
            </div>
        </div>

        <div class="flex gap-x-5 mb-5">
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

                    <p class="mt-1 text-xs tracking-wide text-gray-500 dark:text-gray-400">Escolha um Ficheiro ou arraste e
                        solte aqui.</p>

                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
            <div class="w-1/2">
                <label for="components" class="font-semibold text-gray-500">Auditorias Realizadas</label>
                <textarea id="components" cols="3" rows="4" v-model="system.components" class="form-input py-2"
                    placeholder="Escrever aqui..." :disabled="sendingForm" required></textarea>
            </div>
        </div>

        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="audits_results" class="font-semibold text-gray-500">Resultado das Auditorias</label>
                <textarea id="audits_results" cols="3" rows="4" v-model="system.audits_results" class="form-input py-2"
                    placeholder="Descreva o desfecho das auditorias feitas." :disabled="sendingForm"></textarea>
            </div>
            <div class="w-1/2">
                <label for="components" class="font-semibold text-gray-500">Notas Adicionais</label>
                <textarea id="components" cols="3" rows="4" v-model="system.components" class="form-input py-2"
                    placeholder="Informações relevantes sobre o sistema." :disabled="sendingForm"></textarea>
            </div>
        </div>

        <h2 class="form-title">Normas</h2>

        <div class="grid grid-cols-3 gap-x-5 mb-5">
            <div>
                <label for="person_responsible" class="font-semibold text-gray-500">Norma Primária</label>
                <div class="relative">
                    <SelectProcess @send-norm-data="normData" />
                </div>
            </div>
            <div>
                <label for="person_norm" class="font-semibold text-gray-500">Normas Integradas</label>
                <div class="relative">
                    <SelectProcess @send-norm-data="normData" />
                </div>
            </div>
            <div>
                <label for="person_norm" class="font-semibold text-gray-500">Normas Associadas</label>
                <div class="relative">
                    <SelectProcess @send-norm-data="normData" />
                </div>
            </div>
        </div>

        <h2 class="form-title">Processos</h2>
        <div>
            <label for="person_responsible" class="font-semibold text-gray-500">Processos Anexos</label>
            <div class="relative">
                <SelectProcess @send-norm-data="normData" />
            </div>
        </div>
    </form>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectProcess from '../../process/SelectProcess.vue';
import SelectIndicators from './SelectIndicators.vue';

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

const formSystem = ref(null);
const sendingForm = ref(false);

const system = ref(reactive({
    title: null,
    description: null,
    type: "CERTIFIABLE",
    person_responsible: null,
    date: null,
    application_date: null,
    validate_date: null,
    documentation: null,
    status: "DEVELOPMENT",
}));

const resetForm = () => {
    formSystem.value.classList.remove("was-validated");
    formSystem.value.reset();

    system.value = {
        title: null,
        description: null,
        person_responsible: null,
        type: "CERTIFIABLE",
        post_date: null,
        application_date: null,
        validate_date: null,
        documentation: null,
        status: null,
    };
};

const processing = () => {
    sendingForm.value = true;
    if (formSystem.value.checkValidity() === true) {
        formSystem.value.classList.remove("was-validated");
        emit("processing");
        axiosSaveSystem();
    }
    else {
        formSystem.value.classList.add("was-validated");
    }
};

const axiosSaveSystem = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(system.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/systems/save`, jsonObject, config)
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