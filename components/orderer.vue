<template>
    <div>
        <form @submit.prevent v-on:submit="addPaypal">
            <div class="grid grid-cols-3 gap-1">
            <label class="block col-span-1">
                <span> Name </span>
                <input type="name" id="ordererName" class="form-input block mt-1 w-full border-black border-2" v-model="ordererName" required>
            </label>
            <label class="block col-span-1">
                <span> Paypal.me Link </span>
                <input type="name" id="ordererPaypal" class="form-input block mt-1 w-full border-black border-2" v-model="ordererPaypal" required>
            </label>
            <label class="inline-flex items-center col-span-1 pt-10">
                <button id="ordererButton" class="bg-blue-500 border-2 border-black">Sei Besteller</button>
            </label>
         </div>
            </form>
        </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return {
            ordererName:'',
            ordererPaypal:''
        }
    },
    methods:{
        addPaypal(){
            this.$emit('submit', {ordererName: this.ordererName, ordererPaypal: this.ordererPaypal})
        }
    }
});
</script>