<template>
    <form ref="formProcess" @submit.prevent="processing" class="mt-5 mb-5">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Título *</label>
                    <input v-model="process.title" id="title" class="form-input py-2" type="text"
                        placeholder="Nome do Processo" required :disabled="sendingForm" />
                </div>

                <div class="w-1/2">
                    <label for="responsable" class="font-semibold text-gray-500">Responsável *</label>
                    <input v-model="process.responsable" id="responsable" class="form-input py-2" type="text"
                        placeholder="Nome do Responsável" required />
                </div>
            </div>

            <div class="flex gap-x-5 mb-5">
                <div class="w-1/2">
                    <label for="description" class="font-semibold text-gray-500">Descrição do Processo *</label>
                    <textarea id="description" cols="4" rows="4" v-model="process.description" class="form-input py-2"
                        placeholder="Descreva detalhadamente o processo." :disabled="sendingForm" required></textarea>
                </div>
                <div class="w-1/2">
                    <label for="description" class="font-semibold text-gray-500">Objetivos do Processo</label>
                    <textarea id="description" cols="4" rows="4" v-model="process.description" class="form-input py-2"
                        placeholder="Descreva detalhadamente o processo." :disabled="sendingForm"></textarea>
                </div>
            </div>

            <h2 class="form-title">Requisitos de Compliance</h2>

            <div class="mb-5">
                <label class="font-semibold text-gray-500">Legislação Aplicável</label>
                <label for="dropzone-file"
                    class="flex flex-col items-center w-full px-4 py-6 mx-auto mt-2 text-center bg-white border-2 border-gray-400 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
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
                    <label for="policy" class="font-semibold text-gray-500">Políticas e Procedimentos Internos</label>
                    <textarea id="policy" cols="4" rows="4" v-model="process.policy" class="form-input py-2"
                        placeholder="Procedimentos aplicáveis internamente na instituição" :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="resources" class="font-semibold text-gray-500">Equipamentos e Recursos</label>
                    <textarea id="resources" cols="4" rows="4" v-model="process.resources" class="form-input py-2"
                        placeholder="Materiais e items necessários para a operação do processo." :disabled="sendingForm"></textarea>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectResponsable from '../SelectResponsable.vue';


const props = defineProps({
    processFromServer: {
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

const formProcess = ref(null);
const sendingForm = ref(false);
const operationType = ref("CREATE");

const process = ref(reactive({
    title: null,
    code: null,
    version: "1.0",
    norms: [],
    description: null,
    documentations: null,
    objective: null,
    responsable: {
        name: null,
        email: null,
    },
    date: null,
    resources: [],
    history: [],
    status: null,
}));



const processing = () => {
    sendingForm.value = true;
    if (formProcess.value.checkValidity() === true) {
        formProcess.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveProcess();
        } else {
            axiosUpdateProcess();
        }

    }
    else {
        formProcess.value.classList.add("was-validated");
    }
};

const axiosSaveProcess = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(process.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/processs/save`, jsonObject, config)
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

const axiosUpdateProcess = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(process.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.put(`/api/processs/update`, jsonObject, config)
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
    if (props.processFromServer != null) {
        process.value = props.processFromServer;
        operationType.value = "UPDATE";
    }
});

</script>