<script setup lang="ts">
type sizeValues = "sm" | "md" | "lg" | "xl";

const props = defineProps<({
    size?: sizeValues
})>();
const sizeClasses: Record<sizeValues, string> = {
    sm: "h-2",
    md: "h-4",
    lg: "h-8",
    xl: "h-16",
}
const className = "mb-2 mt-2 " + (props.size ? sizeClasses[props.size] : sizeClasses['md']); 
</script>
<template>
    <div :class="className"></div>
</template>