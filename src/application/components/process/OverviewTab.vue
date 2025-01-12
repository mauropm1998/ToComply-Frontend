<template>
    <section class="mt-3 flex gap-x-6">
        <div class="w-[70%]">
            <div class="flex justify-between items-center">
                <div class="card">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-x-3 items-center">
                            <span class="text-lg font-semibold text-gray-700">PRC-20213</span>
                            <ProcessStatus status="ADJOURNED" />
                        </div>
                        <button class="btn-light">
                            <i class="bi bi-pencil text-[1rem]"></i>
                        </button>
                    </div>

                    <h2 class="text-gray-500 font-semibold text-2xl">Procedimento de Controle de Qualidade</h2>
                    <p class="text-gray-500 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione ipsa exercitationem officia iure temporibus, ad vero quibusdam id soluta deserunt tempora
                        velit ea explicabo illum error accusamus tenetur? Reprehenderit, fuga!</p>
                </div>

            </div>

            <div class="grid grid-cols-4 gap-4 my-7">
                <ProcessStatisticsCard type="indicators" />
                <ProcessStatisticsCard type="norms" />
                <ProcessStatisticsCard type="oportunities" />
                <ProcessStatisticsCard type="risks" />
            </div>

            <ul class="card py-6">
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Versão do Procedimento </h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">1.0</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Norma ISO Relacionada </h3>
                    </div>
                    <div class="w-[60%]">
                        <h4 class="font-medium text-gray-600">ISO 27001</h4>
                        <p class="text-gray-500">Sistemas de Gestão de Segurança da Informação</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Requisitos Específicos</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Cláusula 8.5.1 - Controle de Produção e Provisão de Serviço</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Objetivo</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Garantir a qualidade dos produtos antes do envio ao cliente </p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Escopo</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Aplicável a todos os produtos na linha de montagem </p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Responsável</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-9 h-9 rounded-full" src="/src/assets/img/user.jpg"
                                alt="Identidade Visual do Responsável">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white leading-none">Naor de
                                    Almeida</h2>
                                <p class="text-sm font-normal text-blue-600">Administrador
                                </p>
                            </div>
                        </div>
                        </p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Recursos Necessários</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Equipamentos de inspeção, formulários de registro </p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Critérios de Aceitação</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Nenhum defeito visual; funcionalidade conforme especificações</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Documentos Relacionados</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Instrução de Trabalho IT-002, Formulário de Inspeção FI-001 </p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Registros de Treinamento</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Não definido.</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Auditorias</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Auditoria Interna - Agendada para 01/06/2024</p>
                    </div>
                </li>
                <li class="flex gap-x-4 border-b py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Alertas de Revisão</h3>
                    </div>
                    <div class="w-[60%]">
                        <p class="text-gray-500">Revisão anual em 01012025</p>
                    </div>
                </li>
                <li class="flex gap-x-4 py-4">
                    <div class="w-[40%]">
                        <h3 class="font-semibold text-gray-600 mb-2">Histórico de Alterações</h3>
                    </div>
                    <div class="w-[60%]">
                        <div class="mb-2">
                            <p class="text-gray-500 mb-2">Versão 1.0: Criação inicial - 01/01/2024</p>
                            <div class="flex items-center gap-x-2">
                                <img class="object-cover w-8 h-8 rounded-full" src="/src/assets/img/user.jpg"
                                    alt="Identidade Visual do Responsável">
                                <div>
                                    <h2 class="font-medium text-gray-800 dark:text-white leading-none text-sm">Naor de
                                        Almeida</h2>
                                    <p class="text-xs font-normal text-blue-600">Administrador
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <p class="text-gray-500 mb-2">Versão 1.0: Criação inicial - 01/01/2024</p>
                            <div class="flex items-center gap-x-2">
                                <img class="object-cover w-8 h-8 rounded-full" src="/src/assets/img/user.jpg"
                                    alt="Identidade Visual do Responsável">
                                <div>
                                    <h2 class="font-medium text-gray-800 dark:text-white leading-none text-sm">Naor de
                                        Almeida</h2>
                                    <p class="text-xs font-normal text-blue-600">Administrador
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="w-[30%]">
            <div class="card mb-3 border text-center">
                <i class="bi bi-clipboard-check text-gray-800 text-[1.7rem]"></i>
                <h4 class="font-bold text-gray-600">Agendar Auditoria</h4>
                <p class="text-gray-400 max-w-[90%] mx-auto mt-1">Inspecione e garanta a conformidade com o
                    procedimento.</p>
                <button class="block btn-light w-[80%] mx-auto mt-3">Agendar Agora</button>
            </div>
            <div class="card mb-3 border text-center">
                <i class="bi bi-person-video3 text-gray-800 text-[1.7rem]"></i>
                <h4 class="font-bold text-gray-600">Registar Treinamento</h4>
                <p class="text-gray-400 max-w-[90%] mx-auto mt-1">Capacite a equipa para atender aos requisitos do procedimento.</p>
                <button class="block btn-light w-[80%] mx-auto mt-3">Registar Agora</button>
            </div>
            <div class="card mb-3 border text-center">
                <i class="bi bi-receipt-cutoff text-gray-800 text-[1.7rem]"></i>
                <h4 class="font-bold text-gray-600">Agendar Revisão</h4>
                <p class="text-gray-400 max-w-[90%] mx-auto mt-1">Reveja os requisitos envolvidos no
                    procedimento e assegure a melhoria continua.</p>
                <button class="block btn-light w-[80%] mx-auto mt-3">Agendar Agora</button>
            </div>
        </div>

    </section>
</template>

<script setup>

import ProcessStatus from './ProcessStatus.vue';
import ProcessStatisticsCard from './ProcessStatisticsCard.vue';

</script>