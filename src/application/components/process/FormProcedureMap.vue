<template>
    <form ref="formProcedureMap" @submit.prevent="processing" class="mb-10">

        <FormProcedureMapSteps :step="activeStep" />

        <div v-show="activeStep === 1" class="mb-4">
            <h2 class="form-title text-slate-500/80">1. Identificação das Entradas (Inputs) e Fornecedores</h2>
            <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                As entradas são os itens que dão abertura ao procedimento — pode ser uma matéria-prima usada ou um pedido de
                um cliente, por exemplo.
            </p>
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label for="input-one" class="font-semibold text-gray-500">Item ou Entrada 1 *</label>
                    <input v-model="procedure.map.inputs" id="input-one" class="form-input py-2" type="text"
                        placeholder="Matéria-prima ou pedido, etc" required :disabled="sendingForm" />

                </div>
                <div>
                    <label for="customer-one" class="font-semibold text-gray-500">Fonte da Entrada *</label>
                    <input v-model="procedure.map.customer" id="customer-one" class="form-input py-2" type="text"
                        placeholder="Fornecedor interno ou externo" required :disabled="sendingForm" />
                </div>

                <div>
                    <label for="input-two" class="font-semibold text-gray-500">Item ou Entrada 2</label>
                    <input v-model="procedure.map.inputs" id="input-two" class="form-input py-2" type="text"
                        placeholder="Matéria-prima ou pedido, etc" required :disabled="sendingForm" />


                    <div class="mt-2.5">
                        <button class="text-blue-500 font-semibold hover:underline"><i class="bi bi-plus-lg"></i> Adicionar
                            Mais</button>
                    </div>
                </div>

                <div>
                    <label for="customer-two" class="font-semibold text-gray-500">Fonte da Entrada</label>
                    <input v-model="procedure.map.customer" id="customer-two" class="form-input py-2" type="text"
                        placeholder="Fornecedor interno ou externo" required :disabled="sendingForm" />
                </div>
            </div>

        </div>

        <div v-show="activeStep === 2" class="mb-4">
            <h2 class="form-title text-slate-500/80">2. Identificação dos Clientes</h2>
            <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                Refere-se a empresas, pessoas ou departamentos que receberão as respostas dos trabalhos concluídos.
            </p>
            <div class="flex gap-x-5">
                <div class="w-1/2">
                    <label for="output-one" class="font-semibold text-gray-500">Cliente 1 *</label>
                    <input v-model="procedure.map.clients" id="output-one" class="form-input py-2" type="text"
                        placeholder="Empresas, pessoas ou departamentos." required :disabled="sendingForm" />

                    <div class="mt-2.5">
                        <button class="text-blue-500 font-semibold hover:underline"><i class="bi bi-plus-lg"></i> Adicionar
                            Mais</button>
                    </div>
                </div>
                <div class="w-1/2">
                    <label for="output-two" class="font-semibold text-gray-500">Cliente 2</label>
                    <input v-model="procedure.map.outputs" id="output-two" class="form-input py-2" type="text"
                        placeholder="Empresas, pessoas ou departamentos." required :disabled="sendingForm" />
                </div>
            </div>
        </div>

        <div v-show="activeStep === 3" class="mb-4">
            <h2 class="form-title text-slate-500/80">3. Identificação dos Recursos</h2>
            <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                Recursos Humanos e materiais essenciais para a realização do processo, bem como possíveis avaliações de
                custo e lucros.
            </p>

            <div class="w-full mb-4">
                <label for="output-one" class="font-semibold text-gray-500">Recursos Humanos *</label>
                <input v-model="procedure.map.human_resource" id="output-one" class="form-input py-2" type="text"
                    placeholder="Clique para selecionar." required :disabled="sendingForm" />
            </div>

            <div class="flex gap-x-5">
                <div class="w-1/2">
                    <label for="material_resource" class="font-semibold text-gray-500">Recurso Material *</label>
                    <textarea id="material_resource" cols="4" rows="4" v-model="procedure.map.material_resource"
                        class="form-input py-2" placeholder="Equipamentos e materiais necessários."
                        :disabled="sendingForm"></textarea>
                </div>
                <div class="w-1/2">
                    <label for="material_resource" class="font-semibold text-gray-500">Tecnologia Utilizada *</label>
                    <textarea id="material_resource" cols="4" rows="4" v-model="procedure.map.material_resource"
                        class="form-input py-2" placeholder="Software e hardware usados no processo."
                        :disabled="sendingForm"></textarea>
                </div>
            </div>
        </div>

        <div v-show="activeStep === 4" class="mb-4">
            <h2 class="form-title text-slate-500/80">4. Planejamento das Atividades</h2>
            <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                Ações ou passos a serem seguidos para o cumprimento dos objetivos desejados.
            </p>
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label for="activity-one" class="font-semibold text-gray-500">Atividade 1 *</label>
                    <input v-model="procedure.map.activities.one" id="activity-one" class="form-input py-2"
                        type="text" placeholder="Ação a ser feita." required :disabled="sendingForm" />
                </div>
                <div>
                    <label for="responsable_activity" class="font-semibold text-gray-500">Responsável *</label>
                    <input v-model="procedure.map.outputs" id="responsable_activity" class="form-input py-2"
                        type="text" placeholder="Clique para selecionar." required :disabled="sendingForm" />
                </div>
                <div>
                    <label for="activity-two" class="font-semibold text-gray-500">Atividade 2</label>
                    <input v-model="procedure.map.activities.one" id="activity-two" class="form-input py-2"
                        type="text" placeholder="Ação a ser feita." :disabled="sendingForm" />

                    <div class="mt-2.5">
                        <button class="text-blue-500 font-semibold hover:underline"><i class="bi bi-plus-lg"></i> Adicionar
                            Mais</button>
                    </div>
                </div>
                <div>
                    <label for="responsable_activity" class="font-semibold text-gray-500">Responsável</label>
                    <input v-model="procedure.map.outputs" id="responsable_activity" class="form-input py-2"
                        type="text" placeholder="Clique para selecionar." required :disabled="sendingForm" />
                </div>
            </div>
        </div>

        <div v-show="activeStep === 5" class="mb-4">
            <h2 class="form-title text-slate-500/80">5. Identificação das Saídas (Outputs)</h2>
            <p class="text-sm text-gray-500 max-w-[700px] mt-1 mb-2">
                Entregas feitas ao final de cada fluxo de trabalho, ou seja, resultado dos trabalhos que foram feitos.
            </p>
            <div class="flex gap-x-5">
                <div class="w-1/2">
                    <label for="output-one" class="font-semibold text-gray-500">Entrega ou resultado 1 *</label>
                    <input v-model="procedure.map.outputs" id="output-one" class="form-input py-2" type="text"
                        placeholder="Resultado dos trabalhos feitos." required :disabled="sendingForm" />

                    <div class="mt-2.5">
                        <button class="text-blue-500 font-semibold hover:underline"><i class="bi bi-plus-lg"></i> Adicionar
                            Mais</button>
                    </div>
                </div>
                <div class="w-1/2">
                    <label for="output-two" class="font-semibold text-gray-500">Entrega ou resultado 2</label>
                    <input v-model="procedure.map.outputs" id="output-two" class="form-input py-2" type="text"
                        placeholder="Resultado dos trabalhos feitos." required :disabled="sendingForm" />
                </div>
            </div>
        </div>

        <div v-show="activeStep === 6" class="mb-4 mt-5">
            <TurleDiagram :diagram-data="activeStep" />
        </div>

        <div class="flex items-center gap-x-3 mt-5 justify-end">
            <button type="button" @click="toggleStep('prev')" v-show="activeStep != 1" class="btn btn-light"><i
                    class="bi bi-chevron-left"></i> Anterior</button>
            <button type="button" @click="toggleStep('next')" v-show="activeStep != 6" class="btn btn-primary">Próximo <i
                    class="bi bi-chevron-right"></i></button>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from '@/util/Axios.js';
import eventBus from "@/EventBus";
import SelectResponsable from '../SelectResponsable.vue';
import FormProcedureMapSteps from './FormProcedureMapSteps.vue';
import TurleDiagram from './TurleDiagram.vue';


const emit = defineEmits(
    [
        "processing",
        "success",
        "error",
    ]
);

const formProcedureMap = ref(null);
const sendingForm = ref(false);
const activeStep = ref(1);

const procedure = ref(reactive({
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
    map: {
        inputs: null,
        outputs: null,
        customers: null,
        clients: null,
        activities: { name: null, responsable: null, data_limit: null },
    },
    date: null,
    resources: [],
    history: [],
    status: null,
}));

const toggleStep = (action) => {
    console.log(action, "CERTO")
    if (action === 'next') {
        activeStep.value++;
    } else {
        activeStep.value--;
    }
};

const processing = () => {
    sendingForm.value = true;
    if (formProcedureMap.value.checkValidity() === true) {
        formProcedureMap.value.classList.remove("was-validated");
        emit("processing");

        if (operationType.value === "CREATE") {
            axiosSaveProcedure();
        } else {
            axiosUpdateProcedure();
        }

    }
    else {
        formProcedureMap.value.classList.add("was-validated");
    }
};

const axiosSaveProcedure = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(procedure.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.post(`/api/procedures/save`, jsonObject, config)
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

const axiosUpdateProcedure = () => {
    // Converta o objeto para uma string JSON
    const jsonObject = JSON.stringify(procedure.value);
    // Configuração do cabeçalho para indicar o tipo de conteúdo JSON
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };

    axios.put(`/api/procedures/update`, jsonObject, config)
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

});

</script>