<template>
    <div>
        <div class="flex gap-x-2 items-center mt-5">
            <h3 class="font-bold text-xl text-gray-500">ISO 27001</h3>
            <NormStatus status="ACTIVE" />
        </div>
        <h4 class="font-medium text-xl text-gray-500">Sistemas de Gestão de Segurança da Informação</h4>
        <p class="text-gray-500 my-2">Esta norma especifica os requisitos para estabelecer, implementar, manter e melhorar
            continuamente um sistema de gestão de segurança da informação. Esta norma especifica os requisitos, manter e
            melhorar continuamente um sistema de gestão de segurança da informação
        </p>

        <div class="grid grid-cols-3 my-5">
            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <p class="text-gray-500 leading-tight">2024</p>
                    <span class="text-sm font-semibold text-gray-600">Data de Publicação</span>
                </div>
            </div>

            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <p class="text-gray-500 leading-tight">22 Mai 2024</p>
                    <span class="text-sm font-semibold text-gray-600">Data de Revisão</span>
                </div>
            </div>

            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-arrow-repeat text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <p class="text-gray-500 leading-tight">Em progresso</p>
                    <span class="text-sm font-semibold text-gray-600">Estado de Certificação</span>
                </div>
            </div>
        </div>

        <ul class="mt-5 text-gray-600">
            <li class="flex border-y py-3 items-start gap-x-4">
                <div class="w-[40%]">
                    <h3 class="font-semibold">Organização Responsável</h3>
                </div>
                <p class="w-[60%] m-0">
                    ISO (International Organization for Standardization)
                </p>
            </li>

            <li class="flex border-b py-3 items-start gap-x-4">
                <div class="w-[40%]">
                    <h3 class="font-semibold">Link para Documento Oficial</h3>
                </div>
                <p class="w-[60%] m-0">
                    <a href="https://www.iso.org/standard/54534.html" class="text-blue-500 underline">ISO 27001 Official
                        Document</a>
                </p>
            </li>

            <li class="flex border-b py-3 items-start gap-x-4">
                <div class="w-[40%]">
                    <h3 class="font-semibold">Tipo da Norma</h3>
                </div>
                <p class="w-[60%] m-0">
                    Certificável
                </p>
            </li>

            <li class="flex border-b py-3 items-start gap-x-4">
                <div class="w-[40%]">
                    <h3 class="font-semibold">Categoria</h3>
                </div>
                <p class="w-[60%] m-0">
                    Norma Internacional
                </p>
            </li>

            <li class="flex pt-4 pb-5 items-start gap-x-4">
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Requisitos Específicos</h3>
                    <ul class="list-disc ps-4 text-gray-600">
                        <li>Procedimendo labore voluptatibus incidunt!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                        <li>Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                            iusto.</li>
                    </ul>
                </div>
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Procedimentos Associados</h3>
                    <div class="flex items-center justify-between rounded-lg py-1 px-3 my-4 border bg-gray-100">
                        <div class="flex items-center gap-x-3">
                            <i class="bi bi-file-earmark-pdf-fill text-[1.9rem] text-red-600"></i>
                            <p class="text-gray-500 max-w-[190px] overflow-long-text  text-lg font-medium">
                                documento_de_verificacao.pdf
                            </p>
                        </div>

                        <button class="btn-neutral">
                            <i class="bi bi-download text-[1rem]"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between rounded-lg py-1 px-3 my-4 border bg-gray-100">
                        <div class="flex items-center gap-x-3">
                            <i class="bi bi-file-earmark-pdf-fill text-[1.9rem] text-red-600"></i>
                            <p class="text-gray-500 max-w-[190px] overflow-long-text  text-lg font-medium">
                                documento_de_verificacao.pdf
                            </p>
                        </div>

                        <button class="btn-neutral">
                            <i class="bi bi-download text-[1rem]"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between rounded-lg py-1 px-3 my-4 border bg-gray-100">
                        <div class="flex items-center gap-x-3">
                            <i class="bi bi-file-earmark-pdf-fill text-[1.9rem] text-red-600"></i>
                            <p class="text-gray-500 max-w-[190px] overflow-long-text  text-lg font-medium">
                                documento_de_verificacao.pdf
                            </p>
                        </div>

                        <button class="btn-neutral">
                            <i class="bi bi-download text-[1rem]"></i>
                        </button>
                    </div>

                </div>
            </li>

            <li class="flex pt-4 pb-5 items-start gap-x-4">
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Referências</h3>
                    <p class="text-gray-600 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eum animi eius reiciendis atque
                        facilis, exercitationem praesentium quibusdam maiores veritatis aliquam qui! In quos minima aliquid
                        ratione dolores dicta! At.
                    </p>
                </div>
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Notas Adicionais</h3>
                    <p class="text-gray-600 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eum animi eius reiciendis atque
                        facilis, exercitationem praesentium quibusdam maiores veritatis aliquam qui! In quos minima aliquid
                        ratione dolores dicta! At.
                    </p>
                </div>
            </li>
        </ul>

        <div class="mb-5 mt-3 text-gray-600 grid grid-cols-2 gap-x-5">
            <div>
                <h3 class="font-semibold mb-3">Sistema de Condição Primária</h3>
                <div class="border-s-4 border-y ps-3 pb-2 pt-1 border-s-blue-500">
                    <p class="mb-1">Norma de Segurança de Informação</p>
                    <div v-if="status === 'CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                        <span class="text-xs font-semibold">Certificável</span>
                    </div>
                    <div v-if="status === 'NOT_CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                        <span class="text-sm font-semibold">Não Certificável</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="font-semibold mb-3">Sistema de Condição Integrada</h3>
                <div class="border-s-4 border-y ps-3 pb-2 pt-1 border-s-blue-500">
                    <p class="mb-1">Norma de Segurança de Informação</p>
                    <div v-if="status === 'CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                        <span class="text-xs font-semibold">Certificável</span>
                    </div>
                    <div v-if="status === 'NOT_CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                        <span class="text-sm font-semibold">Não Certificável</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-10 mt-3 text-gray-600 grid grid-cols-2 gap-x-5">
            <div>
                <h3 class="font-semibold mb-3">Sistema de Condição Anexas </h3>
                <div class="border-s-4 border-y ps-3 pb-2 pt-1 border-s-blue-500">
                    <p class="mb-1">Norma de Segurança de Informação</p>
                    <div v-if="status === 'CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                        <span class="text-xs font-semibold">Certificável</span>
                    </div>
                    <div v-if="status === 'NOT_CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                        <span class="text-sm font-semibold">Não Certificável</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="font-semibold mb-2">Sistema de Condição Integrada</h3>
                <div class="border-s-4 border-y ps-3 pb-2 pt-1 border-s-blue-500">
                    <p class="mb-1">Norma de Segurança de Informação</p>
                    <div v-if="status === 'CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 rounded-xl text-blue-500 bg-blue-100">
                        <span class="text-xs font-semibold">Certificável</span>
                    </div>
                    <div v-if="status === 'NOT_CERTIFIABLE'"
                        class="inline-flex items-center px-2 py-1 text-orange-500 rounded-xl bg-orange-100/80">
                        <span class="text-sm font-semibold">Não Certificável</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import NormStatus from '@/components/norms/NormStatus.vue';


const status = ref("CERTIFIABLE");

</script>