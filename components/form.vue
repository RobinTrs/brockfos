<template>
    <div>
      <label class="block mt-4">
  <span>Name</span>
  <input type="Name" class="form-input block mt-1 w-full  border-black border-2" placeholder="Robin Rieger">
</label>
<label class="block mt-4">
  <span>Textarea</span>
  <textarea class="form-textarea block mt-1 w-full  border-black border-2" rows="3" placeholder="Enter some long form content."></textarea>
</label>
      <label class="block mt-4">
  <span>Preis</span>
  <input type="Price" class="form-input mt-1 block w-full  border-black border-2" placeholder="14,99€">
    </label>
      <label class="inline-flex items-center mt-4 w-full">
        <input type="checkbox" class="form-checkbox h-8 w-8 text-indigo-600  border-2 border-black">
        <span class="ml-4">bezahlt?</span>
      </label>
      <label class="inline-flex items-center mt-4 w-full">
        <input type="checkbox" class="form-checkbox h-8 w-8 text-indigo-600  border-black border-2">
        <span class="ml-4">begleiten?</span>
      </label>
    <label class="inline-flex items-center mt-4">
        <button class="bg-green-500 border-2 border-black">Absenden</button>
        </label>
    </div>
    
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
