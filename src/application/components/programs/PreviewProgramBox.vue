<template>
    <div class="mt-5">
        <h4 class="font-medium text-xl text-gray-500 mb-1.5">Porgrama de Gestão de Segurança da Informação</h4>
        <ProgramStatus status="SUSPENDED" />
        <p class="text-gray-500 mb-2 mt-4">Esta norma especifica os requisitos para estabelecer, implementar, manter e
            melhorar
            continuamente um sistema de gestão de segurança da informação. Esta norma especifica os requisitos, manter e
            melhorar continuamente um sistema de gestão de segurança da informação
        </p>

        <div class="grid grid-cols-2 gap-x-4 my-5">
            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-calendar-week text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <p class="text-gray-500 leading-tight">09 Jun 2024</p>
                    <span class="text-sm font-semibold text-gray-600">Data de Implementação</span>
                </div>
            </div>

            <div class="flex gap-x-3 mb-3">
                <div class="rounded-md py-2 px-3 bg-blue-50">
                    <i class="bi bi-person text-blue-600 text-[1.3rem]"></i>
                </div>
                <div>
                    <p class="text-gray-500 leading-tight">Naor de Almeida</p>
                    <span class="text-sm font-semibold text-gray-600">Responsável</span>
                </div>
            </div>
        </div>

        <ul class="mt-5 text-gray-600">
            <li class="flex pt-4 pb-5 items-start gap-x-4">
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Descrição das Atividades</h3>
                    <ul class="list-disc ps-4 text-gray-600">
                        <li>Procedimendo labore voluptatibus incidunt!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                        <li>Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                            iusto.</li>
                    </ul>
                </div>
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Recursos Necessários</h3>
                    <ul class="list-disc ps-4 text-gray-600">
                        <li>Procedimendo labore voluptatibus incidunt!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                        <li>Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                            iusto.</li>
                    </ul>
                </div>
            </li>

            <li class="flex pt-4 pb-5 items-start gap-x-4">
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Indicadores de Sucesso</h3>
                    <ul class="list-disc ps-4 text-gray-600">
                        <li>Procedimendo labore voluptatibus incidunt!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Harum inventore saepe veritatis perspiciatis repellendus quis.</li>
                        <li>Est architecto voluptatem adipisci optio hic amet possimus, molestias porro at
                            iusto.</li>
                    </ul>
                </div>
                <div class="w-[50%]">
                    <h3 class="font-semibold mb-2">Documentos Relacionados</h3>
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
        </ul>

        <div class="w-full mb-5">
                    <h3 class="font-semibold mb-2">Notas Adicionais</h3>
                  <p class="text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore a veritatis illum, odit doloribus quod beatae impedit deleniti corporis laudantium praesentium, ipsam culpa animi? Obcaecati fugiat similique repudiandae suscipit.
                  </p>
                </div>

        <div class="mb-3 mt-3 text-gray-600 grid grid-cols-2 gap-x-5">
            <div>
                <h3 class="font-semibold mb-3">Norma Primária</h3>
                <IncludeNormBox />
            </div>
            <div>
                <h3 class="font-semibold mb-3">Normas Integrada</h3>
                <IncludeNormBox />
            </div>
        </div>
        <div class="mb-10 mt-3 text-gray-600 grid grid-cols-2 gap-x-5">
            <div>
                <h3 class="font-semibold mb-3">Normas Associadas </h3>
                <IncludeNormBox />
            </div>
            <div>
                <h3 class="font-semibold mb-2">Processos Anexos</h3>
                <IncludeNormBox />
                <IncludeNormBox />
                <IncludeNormBox />
            </div>
        </div>
    </div>
</template>

<script setup>

import ProgramStatus from '@/components/programs/ProgramStatus.vue';
import IncludeNormBox from '@/components/norms/IncludeNormBox.vue';


</script>