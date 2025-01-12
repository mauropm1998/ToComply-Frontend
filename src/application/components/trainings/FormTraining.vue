<template>
    <form ref="formTraining" @submit.prevent="processing" class="mt-5 mb-4">
        <div class="w-full">
            <div class="flex gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Nome do Treinamento *</label>
                    <input v-model="training.title" id="title"
                        class="form-input"
                        type="text" placeholder="Escreva aqui..." required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="category" class="font-semibold text-gray-500">Categoria *</label>
                    <input v-model="training.category" id="category"
                        class="form-input"
                        type="text" placeholder="Categoria do Treinamento" required :disabled="sendingForm" />
                </div>
            </div>

            <div class="w-full mb-4">
                <label for="description" class="font-semibold text-gray-500">Descrição</label>
                <textarea id="description" cols="4" rows="3" v-model="training.description"
                    class="block form-control w-full px-4 py-2 mt-3.5 text-gray-700 placeholder-gray-500 bg-white border border-gray-400/70 rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
                    placeholder="Objectivo da Documentação..." :disabled="sendingForm"></textarea>
            </div>

            <div class="flex items-center gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="instructor" class="font-semibold text-gray-500">Instrutor
                        *</label>
                    <div class="relative">
                        <AddInstructorBox @send-instructor-data="insertInstructorData" />
                    </div>
                </div>
                <div class="w-1/2">
                    <label for="date" class="font-semibold text-gray-500">Data do Treinamento *</label>
                    <input v-model="training.date" id="date"
                        class="form-input"
                        type="date" required :disabled="sendingForm" />
                </div>
            </div>

            <div class="grid grid-cols-3 items-center gap-x-5 mb-4">
                <div>
                    <label for="type" class="font-semibold text-gray-500">Tipo do Treinamento</label>
                    <select v-model="training.type" :disabled="sendingForm" id="type"
                        class="form-select">
                        <option value="PRESENCIAL">Presencial</option>
                        <option value="ONLINE">Online</option>
                        <option value="SEMINARIO">Seminário</option>
                        <option value="WORKSHOP">Workshop</option>
                    </select>
                </div>
                <div>
                    <label v-if="training.type != 'ONLINE'" for="address" class="font-semibold text-gray-500">Local do
                        Treinamento *</label>
                    <input v-if="training.type != 'ONLINE'" v-model="training.address" id="address"
                        class="form-input"
                        type="text" placeholder="Local da formação" required :disabled="sendingForm" />

                    <label v-if="training.type === 'ONLINE'" for="online_platform"
                        class="font-semibold text-gray-500">Plataforma a Usar</label>
                    <input v-if="training.type === 'ONLINE'" v-model="training.online_platform" id="online_platform"
                        class="form-input"
                        type="text" placeholder="Plataforma online para a formação" :disabled="sendingForm" />
                </div>
                <div>
                    <label for="duraction" class="font-semibold text-gray-500">Duração (Horas)</label>
                    <input v-model="training.duraction" id="duraction"
                        class="form-input"
                        type="number" min="1" placeholder="Tempo do treinamento em horas" :disabled="sendingForm" />
                </div>
            </div>
            <div>
                <label class="font-semibold text-gray-500">Material de Apoio (opciional)</label>
                <label for="dropzone-file"
                    class="flex flex-col items-center w-full px-5 py-7 mx-auto mt-4 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>

                    <h3 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Carregar Ficheiro</h3>

                    <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Escolha um Ficheiro ou arraste e
                        solte aqui.</p>

                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import AddInstructorBox from './AddInstructorBox.vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";

const props = defineProps({
    trainingFromServer: {
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

const formTraining = ref(null);
const sendingForm = ref(false);
const operationType = ref("CREATE");

const training = ref(reactive({
    title: null,
    category: null,
    description: null,
    duraction: null,
    instructor: {
        name: null,
        email: null,
    },
    type: "PRESENCIAL", // ONLINE, WORKSHOP, SEMINARIO
    address: null,
    online_platform: null,
    support_material: [],
    date: null,
    resources: [],
    participants: [],
    table_of_content: [],
    status: null,
}));

const insertInstructorData = (instructorData) => {
    training.value.instructor.name = instructorData.name;
    training.value.instructor.email = instructorData.email;
}

const insertParticipantOnList = (participant) => {
    training.value.participants.push(participant);
}

const processing = () => {
    sendingForm.value = true;
    if (formTraining.value.checkValidity() === true) {
        formTraining.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveTraining();
        } else {
            axiosUpdateTraining();
        }

    }
    else {
        formTraining.value.classList.add("was-validated");
    }
};

const axiosSaveTraining = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(training.value);
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
    if (props.trainingFromServer != null) {
        training.value = props.trainingFromServer;
        operationType.value = "UPDATE";
    }
});

</script>