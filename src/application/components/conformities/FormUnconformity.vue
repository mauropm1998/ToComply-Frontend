<template>
    <form ref="formUnconformity" @submit.prevent="processing" class="mt-5 mb-10">
        <div v-show="!showAuditData">
            <h2 class="form-title">Informações Gerais</h2>
            <div class="w-full">
                <div class="flex gap-x-5 mb-5">
                    <div class="w-1/2">
                        <label for="process" class="font-semibold text-gray-500">Origem *</label>
                        <div class="relative">
                            <SelectResponsable @send-responsable-data="responsableData" />
                        </div>
                    </div>
                    <div class="w-1/2">
                        <label for="customer" class="font-semibold text-gray-500">Cliente</label>
                        <input v-model="unconformity.customer" id="customer" type="text" class="form-input py-2"
                            placeholder="Cliente que identificou a NC">
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-x-5 mb-5">
                    <div>
                        <label for="priority" class="font-semibold text-gray-500">Prioridade</label>
                        <select v-model="unconformity.priority" :disabled="sendingForm" id="priority"
                            class="form-select">
                            <option value="HIGHT">Alta</option>
                            <option value="NORMAL">Média</option>
                            <option value="LOW">Baixa</option>
                        </select>
                    </div>
                    <div>
                        <label for="status" class="font-semibold text-gray-500">Estado</label>
                        <select v-model="unconformity.status" :disabled="sendingForm" id="status"
                            class="form-select">
                            <option value="OPENED">Aberta</option>
                            <option value="IN_COURSE">Em Andamento</option>
                            <option value="RESOLVED">Resolvida</option>
                        </select>
                    </div>
                    <div>
                        <label for="date" class="font-semibold text-gray-500">Data</label>
                        <input v-model="unconformity.date" id="date" type="date" class="form-input py-[7px]">
                    </div>
                </div>

                <div class="flex gap-x-5 mb-5">
                    <div class="w-1/2">
                        <label for="description" class="font-semibold text-gray-500">Descrição</label>
                        <textarea id="description" cols="4" rows="4" v-model="unconformity.description"
                            class="form-input py-2" placeholder="Descreva a ocorrência identificada..."
                            :disabled="sendingForm"></textarea>
                    </div>
                    <div class="w-1/2">
                        <label for="consequences" class="font-semibold text-gray-500">Possíveis Consequências</label>
                        <textarea id="consequences" cols="4" rows="4" v-model="unconformity.consequences"
                            class="form-input py-2" placeholder="As consequências que esta ocorrência pode trazer"
                            :disabled="sendingForm"></textarea>
                    </div>
                </div>

                <div class="flex gap-x-5 mb-5">
                    <div class="w-1/2">
                        <label for="analisys_situation" class="font-semibold text-gray-500">Análise da Situação</label>
                        <textarea id="analisys_situation" cols="4" rows="4" v-model="unconformity.analisys_situation"
                            class="form-input py-2" placeholder="Descreva a ocorrência identificada..."
                            :disabled="sendingForm"></textarea>
                    </div>
                    <div class="w-1/2">
                        <label for="coverage" class="font-semibold text-gray-500">Abrangência</label>
                        <textarea id="coverage" cols="4" rows="4" v-model="unconformity.coverage"
                            class="form-input py-2" placeholder="Processos afetados pela NC e ouitras NC similares."
                            :disabled="sendingForm"></textarea>
                    </div>
                </div>

                <div class="flex gap-x-5 mb-5">
                    <div class="w-1/2">
                        <label for="break_point" class="font-semibold text-gray-500">Ponto do Desvio</label>
                        <input v-model="unconformity.break_point" id="break_point" type="text" class="form-input py-2"
                            placeholder="Parte do processo em que ocorreu a NC">
                    </div>
                    <div class="w-1/2">
                        <label for="frequency" class="font-semibold text-gray-500">Frequência</label>
                        <select v-model="unconformity.frequency" id="frequency" class="form-select"
                            :disabled="sendingForm">
                            <option value="3">Nunca aconteceu, é a primeira vez</option>
                            <option value="5">Ocorre Anualmente</option>
                            <option value="7">Ocorre mais de uma vez por ano e menos de uma vez por mês</option>
                            <option value="9">Ocorre Mensalmente</option>
                        </select>
                    </div>
                </div>

                <div class="flex gap-x-5 mb-5">
                    <div class="w-1/2">
                        <label for="severity" class="font-semibold text-gray-500">Severidade</label>
                        <select v-model="unconformity.severity" id="severity" class="form-select"
                            :disabled="sendingForm">
                            <option value="3">A consequência possui resultados pouco significativos</option>
                            <option value="5">A consequência possui resultados com custos baixos</option>
                            <option value="7">A consequência possui resultados com custos altos</option>
                            <option value="9">A consequência possui resultados irreversíveis</option>
                        </select>
                    </div>
                    <div class="w-1/2">
                        <label for="attention_degree" class="font-semibold text-gray-500">Grau de Atenção</label>
                        <input v-model="unconformity.attention_degree" id="attention_degree" type="number"
                            class="form-input py-2" placeholder="Nível de atenção a NC">
                    </div>
                </div>

                <h2 class="form-title">Ações de Contenção</h2>
                <div class="mb-5">
                    <div class="grid grid-cols-3 gap-x-5">
                        <div>
                            <label for="contentcy_action_1" class="font-semibold text-gray-500">Ação</label>
                            <input class="form-input py-2" id="contentcy_action_1"
                                v-model="unconformity.contentcy_action.action" type="text"
                                placeholder="Descreva a ação de contenção." :disabled="sendingForm" />
                        </div>
                        <div>
                            <label for="limit_date" class="font-semibold text-gray-500">Data Limite</label>
                            <input v-model="unconformity.limit_date" id="limit_date" type="date"
                                class="form-input py-[7px]">
                        </div>
                        <div>
                            <label for="success" class="font-semibold text-gray-500">Eficaz?</label>
                            <select v-model="unconformity.contentcy_action.success" id="success" class="form-select"
                                :disabled="sendingForm">
                                <option value="YES">Sim</option>
                                <option value="NO">Não</option>
                            </select>
                        </div>
                    </div>

                    <button class="text-blue-500 mt-2 font-semibold hover:text-blue-600 hover:underline">
                        <i class="bi bi-plus"></i>
                        <span>Adicionar Mais</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>


import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
import SelectResponsable from '../SelectResponsable.vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";


const props = defineProps({
    unconformityFromServer: {
        type: Object,
        default: null
    }
});

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

const formUnconformity = ref(null);
const sendingForm = ref(false);
const showAuditData = ref(false);
const operationType = ref("CREATE");
const tabIndex = ref(1);

const unconformity = ref(reactive({
    name: null,
    description: null,
    priority: "NORMAL",
    responsable_resolution: null,
    date: null,
    documentation: null,
    status: "IN_COURSE",
    severity: 9,
    frequency: 5,
    process: {
        name: null,
        id: null,
    },
    contentcy_action: {
        success: "YES",
        action: null,
        limit_date: null,
    },
}));

const responsableData = ref([]);

const resetForm = () => {
    formUnconformity.value.classList.remove("was-validated");
    formUnconformity.value.reset();

    unconformity.value = {
        name: null,
        description: null,
        responsable_resolution: null,
        priority: "NORMAL",
        date: null,
        documentation: null,
        status: "IN_COURSE",
        process: {
            name: null,
            id: null,
        }
    };
}

const processing = () => {
    sendingForm.value = true;
    if (formUnconformity.value.checkValidity() === true) {
        formUnconformity.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveUnconformity();
        } else {
            axiosUpdateUnconformity();
        }

    }
    else {
        formUnconformity.value.classList.add("was-validated");
    }
};

const axiosSaveUnconformity = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(unconformity.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/unconformities/save`, jsonObject, config)
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
        .catch((error) => {
            sendingForm.value = false;
            emit("error");
        });

};

const axiosUpdateUnconformity = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(unconformity.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.put(`/api/unconformities/update`, jsonObject, config)
        .then((response) => {
            sendingForm.value = false;
            if (response.data === "OK") {
                resetForm();
                emit("success-update");
            }
            else {
                emit("error-update");
            }
        })
        .catch((error) => {
            sendingForm.value = false;
            emit("error-update");
        });

};

onMounted(() => {
    if (props.unconformityFromServer != null) {
        unconformity.value = props.unconformityFromServer;
        operationType.value = "UPDATE";
    }

    eventBus.on("toggle-tab", (tab) => {
        tabIndex.value = tab;

    });

    eventBus.on("schedule-audit", () => {
        showAuditData.value = true;
        if (formUnconformity.value.checkValidity() === true) {
            formUnconformity.value.classList.remove("was-validated");

            //axiosSaveUnconformity();

            showAuditData.value = true;
        } else {
            formUnconformity.value.classList.add("was-validated");
        }
    });

    eventBus.on("save-unconformity", () => {
        if (formUnconformity.value.checkValidity() === true) {
            formUnconformity.value.classList.remove("was-validated");

            // CHAMADA AXIOS PARA CRIAR A OPORTUNIDADE
            //axiosSaveUnconformity();
            emit('close-modal');
        } else {
            formUnconformity.value.classList.add("was-validated");
        }
    });
});

onBeforeUnmount(() => {
    eventBus.off("save-unconformity");
    eventBus.off("schedule-audit");
    eventBus.off("toggle-tab");
});


</script>