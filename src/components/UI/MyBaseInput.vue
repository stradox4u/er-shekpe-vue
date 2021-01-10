<template>
    <div class="flex flex-row justify-between space-x-4 pb-3">
        <label :for="label">{{ labelString }}</label>
        <input @input="$emit('update:modelValue', $event.target.value)" class="flex-grow pl-3 focus:outline-none" :type="inputType" :placeholder="placeholderString" :step="stepValue" />
    </div>
</template>

<script>
export default {
    name: 'MyBaseInput',
    props: {
        label: {
            type: String,
            required: true
        },
        labelString: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            required: true
        },
        placeholderString: {
            type: String,
            required: false
        },
        stepValue: {
            type: Number,
            required: false
        },
        modelValue: {
            required: false
        },
    },

}
</script>