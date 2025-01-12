<template>
    <form ref="formEvaluation" @submit.prevent="processing" class="mt-5 mb-4">
            <div class="w-full mb-5">
                <label for="type" class="font-semibold text-gray-500">Tipo de Avaliação</label>
                <select v-model="training.type" :disabled="sendingForm" id="type"
                    class="block form-control w-full px-4 py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100">
                    <option value="ORAL">Oral</option>
                    <option value="ESCRITA">Escrita</option>
                    <option value="PRATICA">Prática</option>
                </select>
            </div>
            <div class="w-full mb-5">
                <label for="date" class="font-semibold text-gray-500">Data da Avaliação *</label>
                <input v-model="training.date" id="date"
                    class="block form-control w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                    type="date" required :disabled="sendingForm" />
            </div>

            <div class="w-full mb-5">
                <label for="type" class="font-semibold text-gray-500">Tipo do Resultado</label>
                <select v-model="training.evaluation_type" :disabled="sendingForm" id="type"
                    class="block form-control w-full px-4 py-[9.5px] mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100">
                    <option value="PONTUACAO">Pontuação</option>
                    <option value="CONDICAO">Aprovação/Reprovação</option>
                </select>
            </div>

            <div class="w-full mb-5" v-if="training.evaluation_type === 'PONTUACAO'">

                <label for="date" class="font-semibold text-gray-500">Resultado *</label>
                <input v-model="training.date" id="date"
                    class="block form-control w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                    type="number" max="100" required :disabled="sendingForm" placeholder="Inserir a pontuação aqui" />
                    <span class="text-gray-500 text-sm block mt-2">A pontuação é positiva ou negativa?</span>
                    <div class="w-full flex mt-2 gap-x-1">
                        <label :class="['w-1/2 cursor-pointer flex gap-x-2 items-center justify-center px-4  py-2 rounded-lg border ', training.address === 'POSITIVA' ? 'bg-emerald-300 text-emerald-700 font-medium' : 'text-emerald-500']">
                            <i :class="training.address === 'NEGATIVA' ? 'bi bi-check-circle' : 'bi bi-check-circle-fill'"></i>
                            <input type="radio" value="POSITIVA" class="hidden" v-model="training.address">
                            Positiva
                        </label>
                        <label :class="['w-1/2 cursor-pointer flex gap-x-2 items-center justify-center px-4 py-2 rounded-lg border ',  training.address === 'NEGATIVA' ? 'bg-red-300 text-red-700 font-medium' : 'text-red-500']">
                            <i :class="training.address === 'POSITIVA' ? 'bi bi-x-circle' : 'bi bi-x-circle-fill'"></i>
                            <input type="radio" value="NEGATIVA" class="hidden" v-model="training.address">
                            Negativa 
                        </label>
                    </div>
            </div>

            <div class="w-full mb-5" v-else>
                <span class="text-gray-500 text-sm block mt-2">Qual é o resultado?</span>
                    <div class="w-full flex mt-2 gap-x-1">
                        <label :class="['w-1/2 cursor-pointer flex gap-x-2 items-center justify-center px-4  py-2 rounded-lg border ', training.evaluation_result === 'APROVADO' ? 'bg-emerald-300 text-emerald-700 font-medium' : 'text-emerald-500']">
                            <i :class="training.evaluation_result === 'REPROVADO' ? 'bi bi-check-circle' : 'bi bi-check-circle-fill'"></i>
                            <input type="radio" value="APROVADO" class="hidden" v-model="training.evaluation_result">
                            Aprovado
                        </label>
                        <label :class="['w-1/2 cursor-pointer flex gap-x-2 items-center justify-center px-4 py-2 rounded-lg border ',  training.evaluation_result === 'REPROVADO' ? 'bg-red-300 text-red-700 font-medium' : 'text-red-500']">
                            <i :class="training.evaluation_result === 'APROVADO' ? 'bi bi-x-circle' : 'bi bi-x-circle-fill'"></i>
                            <input type="radio" value="REPROVADO" class="hidden" v-model="training.evaluation_result">
                            Reprovado
                        </label>
                    </div>
            </div>

    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from '@/util/Axios.js';

const emit = defineEmits(
    [
        "processing",
        "success",
        "error",
        "close-modal",
    ]
);

const formEvaluation = ref(null);
const sendingForm = ref(false);

const training = ref(reactive({
    title: null,
    category: null,
    description: null,
    duraction: null,
    instructor: {
        name: null,
        email: null,
    },
    type: "ESCRITA", // ONLINE, WORKSHOP, SEMINARIO
    address: "POSITIVA",
    online_platform: null,
    support_material: [],
    date: null,
    resources: [],
    participants: [],
    table_of_content: [],
    status: null,
    evaluation_type: "PONTUACAO"
}));

const processing = () => {
    sendingForm.value = true;
    if (formEvaluation.value.checkValidity() === true) {
        formEvaluation.value.classList.remove("was-validated");
        emit("processing");
        axiosUpdateTraining();
    }
    else {
        formEvaluation.value.classList.add("was-validated");
    }
};

const axiosUpdateTraining = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(training.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.put(`/api/train/update`, jsonObject, config)
        .then((response) => {
            sendingForm.value = false;
            if (response.data === "OK") {
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

</script>