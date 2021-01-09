<template>
    <div class="bg-gray-100 p-3 flex flex-row justify-between space-x-2">
        <img src="https://picsum.photos/300/300" alt="Some image" class="shadow h-28 rounded ml-1">
        <div>
            <h3 class="font-sans font-bold">Yaahu Old Pot</h3>
            <p class="italic font-sans">In Stock</p>
            <p class="italic font-sans text-pink-800">Out of Stock</p>
            <a href="#" class="pt-3">Remove <i class="far fa-trash-alt"></i></a>
        </div>
        <div>
            <p class="font-sans text-lg">Unit: Cartons</p>
            <span class="space-x-0 inline-flex pt-3">
                <p class="my-auto">Quantity:</p>
                <a href="#" class="my-auto focus:ring focus:border-gray-500 text-xs"><span class="bg-gray-100 p-2 rounded-l">-</span></a>
                <span class="bg-gray-100 p-2 my-auto text-xs">4</span>
                <a href="#" class="my-auto focus:shadow text-xs"><span class="bg-gray-100 p-2 rounded-r">+</span></a>
            </span>
        </div>
        <div>
            <p class="font-sans text-lg">Unit Price:</p>
            <p class="font-sans text-base font-bold">&#8358; 120.00</p>
            <p class="font-sans text-sm italic">x 3 pcs</p>
            <p class="font-sans text-base italic">Subtotal: &#8358; 360.00</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCartItem'
}
</script>