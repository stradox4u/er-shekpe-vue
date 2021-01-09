<template>
    <div class="container">
        <h2 class="font-sans font-bold text-xl">Create New Product</h2>
        <hr class="pb-5">
        <form action="#">
            <my-base-input label="unit-price" labelString="Unit Price: " inputType="number" placeholderString="&#8358; 0.00" stepValue="0.01"></my-base-input>
            <my-base-input label="carton-price" labelString="Carton Price: " inputType="number" placeholderString="&#8358; 0.00" stepValue="0.01"></my-base-input>
            <my-base-input label="half-carton-price" labelString="Half Carton Price: " inputType="number" placeholderString="&#8358; 0.00" stepValue="0.01"></my-base-input>
            <my-base-button class="block my-3 container shadow">Submit</my-base-button>
        </form>
    </div>
</template>