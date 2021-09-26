<template>
  <div class="grid grid-cols-8 gap-2 text-xl">
    <div id="cartName" class="col-span-1">
      {{ordername}}
    </div>
    <div id="cartContent" class="col-span-4">
      {{ordercontent}}
    </div>
    <div id="cartPrice">
    <div  v-if='orderprice != ""' class="col-span-1">{{orderprice}}</div>

    <div v-else class="col-span-1">
     <form>
            <input id="cartPriceLater" type="textarea" class="form-input block w-full text-black h-8 border-2 border-black">
          </form>
      </div>
</div>
    <div id="cartPayed" class="col-span-1">
      <div v-if="orderpayed">
        bezahlt
        </div>
        <div v-else>
          <form>
            <input id="cartPayedLater" type="checkbox" class="form-checkbox h-8 w-8 text-indigo-600  border-2 border-black">
          </form>
        </div>
      </div>
    <div id="cartAccompany" class="col-span-1">
      <div v-if="orderaccompany">
        Ich begleite dich!
      </div>
      <div v-else>
        keine Zeit!
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({

  props:{
    ordername: String,
    ordercontent: String,
    orderprice: String,
    orderpayed:Boolean,
    orderaccompany:Boolean
  }
});
</script>
