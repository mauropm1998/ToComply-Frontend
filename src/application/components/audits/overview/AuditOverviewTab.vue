<template>
    <AuditDetails @open_update_dialog="onHandleUpdateDialog" />
    <AuditOverview />
    <AuditTeam />
</template>

<script setup>

import AuditDetails from "@/components/audits/overview/AuditDetails.vue";
import AuditOverview from "@/components/audits/overview/AuditOverview.vue";
import AuditTeam from "@/components/audits/overview/AuditTeam.vue";

</script>