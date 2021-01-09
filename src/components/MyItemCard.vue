<template>
    <div class="p-3 mx-3 mb-6 bg-gray-100">
        <!-- Product Edit Button -->
        <my-base-button class="mb-2 shadow">Edit Product</my-base-button>
        <!-- Product Image -->
        <div class="rounded-full">
            <img src="https://picsum.photos/300/300" alt="Some image" class="shadow w-60 mx-auto rounded-full mb-6">
        </div>
        <!-- Product Name -->
        <h3 class="font-sans font-bold text-center">Yaahu Old Pot</h3>
        <hr class="mb-3">
        <!-- Product Details -->
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Unit Price: </h4><p>&#8358;120.00</p>
        </div>
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Carton Price: </h4><p>&#8358;120.00</p>
        </div>
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Half Carton Price: </h4><p>&#8358;120.00</p>
        </div>
        <p class="font-sans italic clear-both text-center">In Stock</p>
        <p class="font-sans text-pink-600 italic text-center">Out of Stock</p>
        <!-- Add to Cart -->
        <div class="flex justify-between mt-3">
            <form action="#">
                <span class="space-x-0 inline-flex">
                    <p class="my-auto">Quantity:</p>
                    <a href="#" class="my-auto focus:ring focus:border-gray-500 text-xs"><span class="bg-gray-100 p-2 rounded-l">-</span></a>
                    <span class="bg-gray-100 p-2 my-auto text-xs">4</span>
                    <a href="#" class="my-auto focus:shadow text-xs"><span class="bg-gray-100 p-2 rounded-r">+</span></a>
                </span>
                <select name="unit" id="unit" class="bg-green-900 text-white p-1 rounded focus:bg-gray-500">
                    <option value="units">Units</option>
                    <option value="cartons">Cartons</option>
                    <option value="half-carton">Half Carton</option>
                </select>
                <my-base-button class="text-xs ml-2 shadow">Add To Cart</my-base-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "MyItemCard",
  components: {

  }
};
</script>