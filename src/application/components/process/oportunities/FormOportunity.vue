<template>
    <form ref="formOportunity" @submit.prevent="processing" class="mt-5 mb-5">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Oportunidade *</label>
                    <input v-model="oportunity.title" id="title" class="form-input py-2" type="text" placeholder="Título da oportunidade"
                        required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="process" class="font-semibold text-gray-500">Processo *</label>
                    <SelectProcess />
                </div>
            </div>

            <div class="mb-5">
                <label for="description" class="font-semibold text-gray-500">Descrição</label>
                <textarea id="description" cols="3" rows="4" v-model="oportunity.description" class="form-input py-2"
                    placeholder="Descrição detalhada sobre a oportunidade..." :disabled="sendingForm"></textarea>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="priority" class="font-semibold text-gray-500">Prioridade</label>
                    <select v-model="oportunity.priority" :disabled="sendingForm" id="priority" class="form-select">
                        <option value="HIGH">Alta</option>
                        <option value="MIDDLE">Média</option>
                        <option value="LOW">Baixa</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <label for="category" class="font-semibold text-gray-500">Categoria</label>
                    <input type="text" v-model="oportunity.category" :disabled="sendingForm" id="category" class="form-input py-2" placeholder="Classificação da oportunidade" />
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="responsable" class="font-semibold text-gray-500">Responsável *</label>
                    <input v-model="oportunity.responsable" id="responsable" class="form-input py-2" type="text"
                        placeholder="Nome do Resposável" required :disabled="sendingForm" />
                </div>

                <div class="w-1/2">
                    <label for="date" class="font-semibold text-gray-500">Data de Identificação</label>
                    <input v-model="oportunity.date" id="date" class="form-input py-[7px]" type="date"
                        :disabled="sendingForm" />
                </div>
            </div>

            <h2 class="form-title">Outras Informações</h2>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="impact" class="font-semibold text-gray-500">Impacto Potencial</label>
                    <textarea v-model="oportunity.impact" id="impact" cols="3" rows="4" class="form-input py-2"
                        placeholder="Descrição do impacto potencial da melhoria na organização." :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="benefits" class="font-semibold text-gray-500">Benefícios Esperados</label>
                    <textarea v-model="oportunity.benefits" id="benefits" cols="3" rows="4" class="form-input py-2"
                        placeholder="Benefícios específicos esperados da implementação da melhoria." required :disabled="sendingForm"></textarea>
                </div>
            </div>
            <div class="flex gap-x-5 mb-6">
                <div class="w-1/2">
                    <label for="resources" class="font-semibold text-gray-500">Recursos Necessários</label>
                    <textarea v-model="oportunity.resources" id="resources" cols="3" rows="4" class="form-input py-2"
                        placeholder="Recursos necessários para implementar a melhoria, como ferramentas, pessoal, orçamento." :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="action_plan" class="font-semibold text-gray-500">Plano de Ação</label>
                    <textarea v-model="oportunity.action_plan" id="action_plan" cols="3" rows="4" class="form-input py-2"
                        placeholder="Passos detalhados para implementar a melhoria." required :disabled="sendingForm"></textarea>
                </div>
            </div>

            
            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="status" class="font-semibold text-gray-500">Estado da Oportunidade</label>
                    <select v-model="oportunity.status" :disabled="sendingForm" id="status" class="form-select">
                        <option value="PENDENT">Pendente</option>
                        <option value="IN_COURSE">Em andamento</option>
                        <option value="DONE">Concluída</option>
                        <option value="CANCELED">Cancelada</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <label for="risks" class="font-semibold text-gray-500">Riscos Associado *</label>
                    <SelectRisks />
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

const oportunity = ref(reactive({
    title: null,
    origin: null,
    priority: "MIDDLE",
    category: null,
    description: null,
    impact: null,
    benefits: null,
    action_plan: null,
    resources: null,
    risks: null,
    process: null,
    date: null,
    status: "IN_COURSE",
}));

const resetForm = () => {
    formOportunity.value.classList.remove("was-validated");
    formOportunity.value.reset();

    oportunity.value = {
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
    const jsonObject = JSON.stringify(oportunity.value);
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