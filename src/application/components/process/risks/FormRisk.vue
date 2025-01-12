<template>
    <form ref="formOportunity" @submit.prevent="processing" class="mt-5 mb-5">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="mb-5">
                <label for="description" class="font-semibold text-gray-500">Descrição</label>
                <textarea id="description" cols="3" rows="4" v-model="risk.description" class="form-input py-2"
                    placeholder="Uma descrição completa do risco, incluindo a natureza do risco e as condições que podem levar à sua ocorrência." :disabled="sendingForm"></textarea>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="category" class="font-semibold text-gray-500">Tipo do Risco</label>
                    <input type="text" v-model="risk.category" :disabled="sendingForm" id="category" class="form-input py-2" placeholder="Classificação da Risco" />
                </div>
                <div class="w-1/2">
                    <label for="process" class="font-semibold text-gray-500">Processo *</label>
                    <SelectProcess />
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="priority" class="font-semibold text-gray-500">Probabilidade</label>
                    <select v-model="risk.priority" :disabled="sendingForm" id="priority" class="form-select">
                        <option value="HIGH">Alta</option>
                        <option value="MIDDLE">Média</option>
                        <option value="LOW">Baixa</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <label for="impact" class="font-semibold text-gray-500">Impacto</label>
                    <select v-model="risk.impact" :disabled="sendingForm" id="impact" class="form-select">
                        <option value="HIGH">Alto</option>
                        <option value="MIDDLE">Médio</option>
                        <option value="LOW">Baixo</option>
                    </select>
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="responsable" class="font-semibold text-gray-500">Responsável pela Identificação *</label>
                    <input v-model="risk.responsable" id="responsable" class="form-input py-2" type="text"
                        placeholder="Nome do Resposável" required :disabled="sendingForm" />
                </div>

                <div class="w-1/2">
                    <label for="date" class="font-semibold text-gray-500">Data de Identificação</label>
                    <input v-model="risk.date" id="date" class="form-input py-[7px]" type="date"
                        :disabled="sendingForm" />
                </div>
            </div>

            <h2 class="form-title">Medidas de Contingência</h2>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="mitigation" class="font-semibold text-gray-500">Mitigações Existentes</label>
                    <textarea v-model="risk.mitigation" id="mitigation" cols="3" rows="4" class="form-input py-2"
                        placeholder="Medidas atuais já em vigor para mitigar o risco." required :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="action_plan" class="font-semibold text-gray-500">Plano de Ação</label>
                    <textarea v-model="risk.action_plan" id="action_plan" cols="3" rows="4" class="form-input py-2"
                        placeholder="Passos detalhados para mitigar ou gerenciar o risco." required :disabled="sendingForm"></textarea>
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="responsable_action" class="font-semibold text-gray-500">Responsável pelo Plano de Ação *</label>
                    <input v-model="risk.responsable_action" id="responsable_action" class="form-input py-2" type="text"
                        placeholder="Nome do Resposável" required :disabled="sendingForm" />
                </div>

                <div class="w-1/2">
                    <label for="status" class="font-semibold text-gray-500">Estado do Risco</label>
                    <select v-model="risk.status" :disabled="sendingForm" id="status" class="form-select">
                        <option value="IDENTIFIED">Identificado</option>
                        <option value="IN_MITIGATION">Em Mitigação</option>
                        <option value="MITIGATED">Mitigado</option>
                    </select>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectProcess from '../SelectProcess.vue';
import SelectRisks from '../risks/SelectRisks.vue';

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

const formOportunity = ref(null);
const sendingForm = ref(false);

const risk = ref(reactive({
    title: null,
    origin: null,
    priority: "MIDDLE",
    category: null,
    description: null,
    impact:  "MIDDLE",
    mitigation: null,
    action_plan: null,
    responsable: null,
    responsable_action: null,
    process: null,
    date: null,
    date_action: null,
    status: "IN_MITIGATION",
}));

const resetForm = () => {
    formOportunity.value.classList.remove("was-validated");
    formOportunity.value.reset();

    risk.value = {
        title: null,
        origin: null,
        type: "CERTIFIABLE",
        category: "INTERNATIONAL",
        description: null,
        date: null,
        application_date: null,
        revision_date: null,
        documentation: null,
        status: "ACTIVE",
        certification_status: "IN_PROGRESS",
    };
};

const processing = () => {
    sendingForm.value = true;
    if (formOportunity.value.checkValidity() === true) {
        formOportunity.value.classList.remove("was-validated");
        emit("processing");
        axiosSaveOportunity();
    }
    else {
        formOportunity.value.classList.add("was-validated");
    }
};

const axiosSaveOportunity = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(risk.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/process/oportunities/save`, jsonObject, config)
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