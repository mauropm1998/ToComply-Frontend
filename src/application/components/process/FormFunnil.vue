<template>
    <form ref="formFunnil" @submit.prevent="processing" class="mt-5 mb-5">
        <div class="w-full">
            <div class="mb-5">
                <label for="problem" class="font-semibold text-gray-500">Problema</label>
                <input v-model="funnil.problem" id="problem" class="form-input py-2" type="text"
                    placeholder="Que problema surgiu?" required :disabled="sendingForm" />
            </div>
            <div class="mb-5">
                <label for="has" class="font-semibold text-gray-500">Tem?</label>
                <select v-model="funnil.has" id="has" class="form-select">
                    <option value="YES">Sim</option>
                    <option value="NO">Não</option>
                </select>
            </div>

            <div class="mb-5">
                <label for="description" class="font-semibold text-gray-500">Porque? *</label>
                <textarea id="description" cols="4" rows="4" v-model="funnil.description" class="form-input py-2"
                    placeholder="Explique o motivo da resposta anterior" :disabled="sendingForm" required></textarea>
            </div>
                        
            <div class="mb-5">
                <label for="resolved" class="font-semibold text-gray-500">Resolvido?</label>
                <select v-model="funnil.resolved" id="resolved" class="form-select">
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

const props = defineProps({
    itemFromServer: {
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

const formFunnil = ref(null);
const sendingForm = ref(false);
const operationType = ref("CREATE");

const funnil = ref(reactive({
    problem: null,
    description: null,
    has: "YES",
    resolved: "YES",
}));


const processing = () => {
    sendingForm.value = true;
    if (formFunnil.value.checkValidity() === true) {
        formFunnil.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveFunnil();
        } else {
            axiosUpdateFunnil();
        }
    }
    else {
        formFunnil.value.classList.add("was-validated");
    }
};

const axiosSaveFunnil = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(funnil.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/funnil/save`, jsonObject, config)
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

const axiosUpdateFunnil = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(funnil.value);
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
    if (props.itemFromServer != null) {
        funnil.value = props.itemFromServer;
        operationType.value = "UPDATE";
    }
});

</script>