<template>
  <div class="w-full h-screen text-3xl">

    <div class="text-center text-8xl mb-12">
      <span class="text-red-900">B</span>rock<span class="text-red-900"
        >FOS</span
      >
    </div>

    <div class="text-center mb-12">
      <p>Guten Morgen, was möchtest du heute Essen?</p>
      <span class="text-xl"> Bisher wurde noch kein Besteller gewählt </span>
    </div>
    <div class="text-center mb-4">
      <button class="border-2 border-black bg-blue-500 p-2">Besteller</button>
      </div>
    <div class="w-2/4 m-auto p-4">
      <Form/>
    </div>

  <div class=" w-3/4 m-auto border-2 border-black">
    <div class="text-center mb-4"> Warenkorb</div>
    <Cartitem/>
  </div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import form from "~/components/form.vue";

export default Vue.extend({
  components: { form },});
</script>
