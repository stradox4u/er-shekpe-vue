<template>
    <div class="p-3 mx-3 mb-6 bg-gray-100">
        <div class="rounded-full">
            <img src="https://picsum.photos/300/300" alt="Some image" class="shadow w-60 mx-auto rounded-full mb-6">
        </div>
        <h3 class="font-sans font-bold">Yaahu Old Pot</h3>
        <hr class="mb-3">
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Unit Price: </h4><p>&#8358;120.00</p>
        </div>
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Carton Price: </h4><p>&#8358;120.00</p>
        </div>
        <div class="inline-flex space-x-4 float-left pb-3">
            <h4 class="font-sans font-bold text-left pl-4">Half Carton Price: </h4><p>&#8358;120.00</p>
        </div>
        <p class="font-sans italic clear-both">In Stock</p>
        <p class="font-sans text-pink-600 italic clear-both">Out of Stock</p>
        <div class="flex justify-between mt-3">
            <my-base-button class="bg-green-900 text-white">Unit(s)</my-base-button>
            <my-base-button class="bg-green-900 text-white">Carton(s)</my-base-button>
            <my-base-button class="bg-green-900 text-white">Half Carton</my-base-button>
        </div>
        <div class="flex justify-between mt-3">
            <span class="space-x-0 inline-flex">
                <p class="mr-3 my-auto">Quantity:</p>
                <a href="#" class="my-auto focus:ring focus:border-gray-500"><span class="bg-gray-100 p-2 rounded-l">-</span></a>
                <span class="bg-gray-100 p-2 my-auto">4</span>
                <a href="#" class="my-auto focus:shadow"><span class="bg-gray-100 p-2 rounded-r">+</span></a>
            </span>
            <my-base-button class="flex-grow ml-3">Add To Cart</my-base-button>
        </div>
    </div>
</template>

<script>
import MyBaseButton from './UI/MyBaseButton.vue'

export default {
  name: "MyItemCard",
  components: {
      MyBaseButton,
  }
};
</script>