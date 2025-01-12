<template>
    <form ref="formDocumentation" @submit.prevent="processing" class="mt-5 mb-4">
        <h2 class="form-title">Informações Gerais</h2>
        <div class="w-full">
            <div class="flex gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="title" class="font-semibold text-gray-500">Título *</label>
                    <input v-model="documentation.title" id="title"
                        class="form-input"
                        type="text" placeholder="Título do Documrnto" required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="category" class="font-semibold text-gray-500">Categoria</label>
                    <input v-model="documentation.category" id="category"
                        class="form-input"
                        type="text" placeholder="Categoria do Documrnto" :disabled="sendingForm" />
                </div>
            </div>
            <div class="flex items-center gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="objective" class="font-semibold text-gray-500">Objectivo</label>
                    <textarea id="objective" cols="4" rows="3" v-model="documentation.objective"
                        class="form-input"
                        placeholder="Objectivo da Documentação..." :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="targets" class="flex justify-between items-center">
                        <span class="font-semibold text-gray-500">Âmbito *</span>
                        <div class="relative">
                            <BaseTooltipInfo
                                info="Defina a extensão e a aplicabilidade do documento, incluindo quais departamentos, processos ou áreas da organização são abrangidos." />
                        </div>
                    </label>
                    <textarea v-model="documentation.targets" id="targets" cols="4" rows="3"
                        class="form-input"
                        placeholder="Extensão e a aplicabilidade do documento" :disabled="sendingForm"></textarea>
                </div>
            </div>

            <div class="flex items-center gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="procedure" class="font-semibold text-gray-500">Procedimento</label>
                    <input v-model="documentation.procedure.name" id="procedure"
                        class="form-input"
                        type="text" placeholder="Procedimento a seguir" :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="validation_date" class="font-semibold text-gray-500">Data de Validade *</label>
                    <input v-model="documentation.validation_date" id="validation_date"
                        class="form-input"
                        type="date" required :disabled="sendingForm" />
                </div>
            </div>

            <h2 class="form-title">Responsável e Responsabilidades</h2>

            <div class="flex gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="responsable_elaboration" class="font-semibold text-gray-500">Responsável pela elaboração
                        *</label>
                    <input v-model="documentation.responsable_elaboration" id="responsable_elaboration"
                        class="form-input"
                        type="text" placeholder="Clique para seleccionar" required :disabled="sendingForm" />
                </div>
                <div class="w-1/2">
                    <label for="responsable_approvation" class="font-semibold text-gray-500">Responsável pela aprovação
                        *</label>
                    <input v-model="documentation.responsable_approvation" id="responsable_approvation"
                        class="form-input"
                        type="text" placeholder="Clique para seleccionar" required :disabled="sendingForm" />
                </div>
            </div>

            <div class="flex items-center gap-x-5 mb-4">
                <div class="w-1/2">
                    <label for="responsabilities" class="font-semibold text-gray-500">Responsabilidades</label>
                    <textarea id="responsabilities" cols="4" rows="3" v-model="documentation.responsabilities"
                        class="form-input"
                        placeholder="Responsabilidades das partes envolvidas na conformidade com o documento"
                        :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="references" class="flex justify-between items-center">
                        <span class="font-semibold text-gray-500">Referências</span>
                        <div class="relative">
                            <BaseTooltipInfo
                                info="Uma lista de referências, como leis, regulamentos, políticas internas, padrões da indústria ou melhores práticas, que foram consideradas na elaboração do documento." />
                        </div>
                    </label>
                    <textarea v-model="documentation.references" id="references" cols="4" rows="3"
                        class="form-input"
                        placeholder="Referências consideradas na elaboração do documento"
                        :disabled="sendingForm"></textarea>
                </div>
            </div>

            <h2 class="form-title">Ficheiro e configurações adicionais</h2>

            <div>
                <label for="dropzone-file"
                    class="flex flex-col items-center w-full px-5 py-7 mx-auto mt-4 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                    <svg xmlns="http:ww.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>

                    <h3 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Carregar Documento</h3>

                    <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Escolha um Ficheiro ou arraste e solte aqui.
                        (DOC, DOCX, ou PDF). </p>

                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>    
        </div>
    </form>
</template>

<script setup>


import { onMounted, reactive, ref } from 'vue';
import BaseTooltipInfo from "@/components/BaseTooltipInfo.vue";
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";

const props = defineProps({
    documentationFromServer: {
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

const formDocumentation = ref(null);
const sendingForm = ref(false);
const operationType = ref("CREATE");

const documentation = ref(reactive({
    title: null,
    objective: null,
    category: null,
    description: null,
    targets: null,
    responsabilities: null,
    responsable_elaboration: null,
    responsable_approvation: null,
    date: null,
    notification_by_email: false,
    validation_date: null,
    references: [],
    status: null,
    restrict: false,
    restric_to: [],
    procedure: {
        name: null,
        id: null,
    },
}));

const processing = () => {
    sendingForm.value = true;
    if (formDocumentation.value.checkValidity() === true) {
        formDocumentation.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveDocumentation();
        } else {
            axiosUpdateDocumentation();
        }

    }
    else {
        formDocumentation.value.classList.add("was-validated");
    }
};

const axiosSaveDocumentation = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(documentation.value);
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

const axiosUpdateDocumentation = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(documentation.value);
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
    if (props.documentationFromServer != null) {
        documentation.value = props.documentationFromServer;
        operationType.value = "UPDATE";
    }
});

</script>