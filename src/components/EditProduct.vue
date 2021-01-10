<template>
    <div class="container">
        <h2 class="font-sans font-bold text-xl">Edit Product</h2>
        <form action="#">
            <my-base-input label="unit-price" labelString="Unit Price: " inputType="number" :placeholderString="'&#8358;' + productObject" stepValue="0.01"></my-base-input>
            <my-base-input label="carton-price" labelString="Carton Price: " inputType="number" :placeholderString="'&#8358;' + productObject" stepValue="0.01"></my-base-input>
            <my-base-input label="half-carton-price" labelString="Half Carton Price: " inputType="number" :placeholderString="'&#8358;' + productObject" stepValue="0.01"></my-base-input>

            <my-base-button class="block shadow mx-auto mb-3 w-full">Submit</my-base-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditProduct',
    inject: ['idOfProductToEdit', 'productObject'],
}
</script>