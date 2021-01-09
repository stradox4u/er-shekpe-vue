<template>
    <div class="flex flex-row justify-between space-x-4 pb-3">
        <label :for="label">{{ labelString }}</label>
        <input class="flex-grow pl-3" :type="inputType" :placeholder="placeholderString" :step="stepValue" />
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
            required: true
        },
        stepValue: {
            type: Number,
            required: false
        }
    }
}
</script>