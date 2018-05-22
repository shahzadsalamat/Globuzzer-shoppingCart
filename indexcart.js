const shop = [
  {
    name: "TRILENS",
    price: 99,
    quantity: 0,
	image: 'Box.jpg',
	description: "Complete set including Housing, Belt clip 5 x sets of cap magnets, 3 x Protective caps and a Frii Designs. Available for Canon EF, Nikon F or sony E/FE lenses. Import fees may apply outside of the EU."
  },
  {
    name: "2 x TRILENS",
    price: 179,
    quantity: 0,
	image: 'Box.jpg',
	description: " Two complete set including Housing, Belt clip 5 x sets of cap magnets, 3 x Protective caps and a Frii Designs. Available for Canon EF, Nikon F or sony E/FE lenses. Import fees may apply outside of the EU."
  }
  
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false,
    quantity: 1
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});