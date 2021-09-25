<template>
  <div class="w-full h-screen text-3xl">

    <div class="text-center text-8xl mb-12">
      <span class="text-red-900">B</span>rock<span class="text-red-900"
        >FOS</span
      >
    </div>

    <div class="text-center mb-12">
      <p>Guten Morgen, was möchtest du heute Essen?</p>
    <div v-for="orderarray in orderarrays" :key="orderarray.ordererName"> 
      <span class="w-full text-xl"> {{orderarray.ordererName}} wird heute das Essen bestellen</span> <br/>
      <a :href="orderarray.ordererPaypal" target="_blank"> <span class="w-full text-xl">paypal:</span> </a>
       </div>

    </div>

    <div class="w-2/4 m-auto p-4">
    <div class="mb-12">
      <div v-if="!haveOrderer">
   <Orderer :parentData="myData" v-on:submit="onOrder"> </Orderer>
        </div>
       </div>
      <Form :parentData="myData" v-on:submit="onSubmit"> </Form>
    </div>

  <div class=" w-3/4 m-auto border-2 border-black">
  <div class="grid grid-cols-8 text-2xl mb-8 border-black border-b-2">
    <div class="mb-4 col-span-8 text-center text-4xl"> Warenkorb</div>
    <div class="col-span-1">
      Name:
      </div>
      <div class="col-span-4">
        Bestellung
        </div>
        <div class="col-span-1">Preis</div>
        <div class="col-span-1">Bezahlt?</div>
        <div class="col-span-1">Begleitung?</div>
</div>
  <div v-for="order in orders" :key="order.name"> 
    <Cartitem :ordername="order.name" :ordercontent="order.content" :orderprice="order.price" :orderpayed="order.payed" :orderaccompany="order.accompany"> </Cartitem>
  </div>
  </div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import form from "~/components/form.vue";

export default Vue.extend({
  components: { form },
    data(){
      return{
        orders: []as any,
        orderarrays: [] as any,
        haveOrderer: false,
      }
    },
    methods:{
      onSubmit(value:any){
       this.orders.push(value)
      },
      onOrder(value:any){
        this.orderarrays.push(value)
        this.haveOrderer = true
      },
    }
  });
</script>
