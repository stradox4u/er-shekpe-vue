<template>
    <button class="p-2 focus:outline-none focus:cursor-pointer focus:shadow-outline bg-yellow-500 rounded" type="submit">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyBaseButton'
}
</script>