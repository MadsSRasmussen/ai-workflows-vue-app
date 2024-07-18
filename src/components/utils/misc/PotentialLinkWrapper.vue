<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import { RouterLink } from 'vue-router';

defineProps<{
    to?: RouteLocationRaw
}>();

</script>
<template>
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <div v-else><slot /></div>
</template>