<template>
    <form ref="formProcessActionPlan" @submit.prevent="processing" class="mt-5 mb-10">
        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="origin" class="font-semibold text-gray-500">Origem</label>
                <select v-model="actionPlan.origin" id="origin" class="form-select">
                    <option value="OPORTUNITY">Oportunidade</option>
                    <option value="RISK">Risco</option>
                </select>
            </div>

            <div class="w-1/2">
                <label for="responsable" class="font-semibold text-gray-500">Responsável *</label>
                <input v-model="actionPlan.responsable" id="responsable" class="form-input py-2" type="text"
                    placeholder="Nome do Responsável" required />
            </div>
        </div>

        <div class="mb-5">
            <label for="problem" class="font-semibold text-gray-500">O que *</label>
            <textarea id="problem" cols="4" rows="4" v-model="actionPlan.problem" class="form-input py-2"
                placeholder="Descreva detalhadamente o problema." :disabled="sendingForm" required></textarea>
        </div>

        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="impact" class="font-semibold text-gray-500">Gravidade</label>
                <select v-model="actionPlan.impact" id="impact" class="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div class="w-1/2">
                <label for="urgent" class="font-semibold text-gray-500">Urgência</label>
                <select v-model="actionPlan.urgent" id="urgent" class="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
        
        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="action" class="font-semibold text-gray-500">Ação sobre o item *</label>
                <select v-model="actionPlan.action" id="action" class="form-select">
                    <option value="MONITORAR">Monitorar</option>
                    <option value="ATUAR">Atuar</option>
                </select>
            </div>
            <div class="w-1/2">
                <label for="dateLimit" class="font-semibold text-gray-500">Responsável *</label>
                <input v-model="actionPlan.dateLimit" id="dateLimit" class="form-input py-[7px]" type="date" required />
            </div>
        </div>

        <div class="mb-5">
            <label for="howToResolve" class="font-semibold text-gray-500">O que Será feito?</label>
            <textarea id="howToResolve" cols="4" rows="4" v-model="actionPlan.howToResolve" class="form-input py-2"
                placeholder="Descreva o procedimento de resolução." :disabled="sendingForm"></textarea>
        </div>

        <div class="flex gap-x-5 mb-5">
            <div class="w-1/2">
                <label for="implemented" class="font-semibold text-gray-500">Implementado?</label>
                <select v-model="actionPlan.implemented" id="implemented" class="form-select">
                    <option value="YES">Sim</option>
                    <option value="NO">Não</option>
                </select>
            </div>
            <div class="w-1/2">
                <label for="succefuly" class="font-semibold text-gray-500">Eficaz?</label>
                <select v-model="actionPlan.succefuly" id="succefuly" class="form-select">
                    <option value="YES">Sim</option>
                    <option value="NO">Não</option>
                </select>
            </div>
        </div>

    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";


const emit = defineEmits(
    [
        "processing",
        "success",
        "success-update",
        "error",
        "error-update",
    ]
);

const formProcessActionPlan = ref(null);
const sendingForm = ref(false);
const operationType = ref("CREATE");

const actionPlan = ref(reactive({
    origin: "RISK",
    responsable: null,
    problem: null,
    howToResolve: null,
    action: "MONITORAR",
    impact: 1,
    urgent: 3,
    dateLimit: null,
    implemented: "YES",
    succefuly: "NO",
}));

const processing = () => {
    sendingForm.value = true;
    if (formProcessActionPlan.value.checkValidity() === true) {
        formProcessActionPlan.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveProcessActionPlan();
        } else {
            axiosUpdateProcessActionPlan();
        }
    }
    else {
        formProcessActionPlan.value.classList.add("was-validated");
    }
};

const axiosSaveProcessActionPlan = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(actionPlan.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/process/action/save`, jsonObject, config)
        .then((response) => {
            sendingForm.value = false;
            if (response.data === "OK") {
                //resetForm();
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

const axiosUpdateProcessActionPlan = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(actionPlan.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.put(`/api/process/action/update`, jsonObject, config)
        .then((response) => {
            sendingForm.value = false;
            if (response.data === "OK") {
                //resetForm();
                emit("success-update");
            }
            else {
                emit("error-update");
            }
        })
        .catch(() => {
            sendingForm.value = false;
            emit("error-update");
        });

};

onMounted(() => {

});

</script>