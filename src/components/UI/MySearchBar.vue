<template>
    <span class="flex space-x-0 shadow">
        <input type="search" class="md:w-full w-28 flex-shrink bg-gray-100 rounded-l shadow-inner appearance-none p-2 focus:outline-none" placeholder="Search For Products" />
        <button type="submit" class="p-2 focus:outline-none focus:shadow-outline bg-gray-100 rounded-r">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
</template>

<script>
export default {
    name: 'MySearchBar'
}
</script>