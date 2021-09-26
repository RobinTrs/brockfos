<template>
    <div>
      <form @submit.prevent v-on:submit="sendData">
      <label class="block mt-4">
  <span>Name</span>
  <input type="name" id="orderName" class="form-input block mt-1 w-full  border-black border-2" v-model="name" placeholder="Robin Rieger" required>
</label>
<label class="block mt-4">
  <span>Textarea</span>
  <textarea id="orderContent" class="form-textarea block mt-1 w-full border-black border-2" rows="3" v-model="content" placeholder="Enter some long form content."></textarea>
</label>
      <label class="block mt-4">
  <span>Preis</span>
  <input type="Price" id="orderPrice" class="form-input mt-1 block w-full  border-black border-2" placeholder="14,99€" v-model="price">
    </label>
      <label class="inline-flex items-center mt-4 w-full">
        <input id="orderPayed" type="checkbox" class="form-checkbox h-8 w-8 text-indigo-600  border-2 border-black" v-model="payed">
        <span class="ml-4">bezahlt?</span>
      </label>
      <label class="inline-flex items-center mt-4 w-full">
        <input id="orderAccompany" type="checkbox" class="form-checkbox h-8 w-8 text-indigo-600  border-black border-2" v-model="accompany">
        <span class="ml-4">begleiten?</span>
      </label>
    <label class="inline-flex items-center mt-4">
        <button id="orderButton" class="bg-green-500 border-2 border-black">Absenden</button>
        </label>
        </form>
    </div>
    
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
 data(){
 return {
    name:'',
    content:'',
    price:'',
    payed:undefined,
    accompany:undefined,
 }
 },
   methods:{
    sendData(){
      this.$emit('submit', { name: this.name, content: this.content, price: this.price, payed: this.payed, accompany: this.accompany })
  },
}
})
</script>
