export default {
  name: "vCheckoutPage",
  props: {},
  components: {},
  data: function() {
    return {
      test: true,
      deliveryCurIndex: 0,
      deliveryOption: [
        {
          imageUrl: "https://i.postimg.cc/c4GK8MMF/store-01.png",
          price: "7.50"
        },
        {
          imageUrl: "https://i.postimg.cc/YqNvNGdM/store-02.png",
          price: "15.00"
        },
        {
          imageUrl: "https://i.postimg.cc/Dw28xvNs/store-03.png",
          price: "4.99"
        },
        {
          imageUrl: "https://i.postimg.cc/2S23Mppt/store-04.png",
          price: "12.79"
        }
      ],
      paymentCurIndex: 0,
      paymentOption: [
        { imageUrl: "https://i.postimg.cc/ZnDmxWTc/mayment-00.png" },
        { imageUrl: "https://i.postimg.cc/7ZH12b5c/mayment-01.png" },
        { imageUrl: "https://i.postimg.cc/BnF32ZRT/mayment-02.png" },
        { imageUrl: "https://i.postimg.cc/65gw74b6/mayment-03.png" }
      ]
    };
  },
  methods: {
    onBackHandler: function() {
      let vm = this;
      vm.$router.go(-1);
    },
    onCheckOutHandler: function() {
      this.$store.dispatch("checkoutPage/CheckOut");
    },
    onContinueShopHandler: function() {
      this.$router.push({
        name: "vProducts",
        params: { id: "all-products" }
      });
    }
  },
  computed: {
    pageInfo: {
      get: function() {
        // console.log("----> ", this.$store.state.checkoutPage.itemData);
        return this.$store.state.checkoutPage.itemData;
      }
    },
    styleDeliveryOption: {
      get: function() {
        return function(index) {
          let selectedColor = "2px solid #ffcb7d";
          let unSelectedColor = "2px solid rgba(136, 136, 136, 0.35)";
          // console.log("pageInfo: ", this.pageInfo);
          return {
            border: this.pageInfo
              ? index === this.pageInfo.user.deliveryIndex
                ? selectedColor
                : unSelectedColor
              : unSelectedColor,
            opacity: this.pageInfo
              ? index === this.pageInfo.user.deliveryIndex
                ? 1
                : 0.5
              : 0.5
          };
        };
      }
    },
    stylePaymentOption: {
      get: function() {
        return function(index) {
          return {
            border:
              index === this.paymentCurIndex
                ? "2px solid #ffcb7d"
                : "2px solid rgba(136, 136, 136, 0.35)",
            opacity: index === this.paymentCurIndex ? 1 : 0.5
          };
        };
      }
    },
    styleImage: {
      get: function() {
        return function(link) {
          return {
            "background-image": `url(${link})`
          };
        };
      }
    }
  },
  watch: {
    $route: {
      handler: function(newName) {
        // console.log("-- watch / newName: ", newName, " / oldName: ", oldName);
        // this.conditionBar.title = newName.params.id;
        // this.$store.dispatch("GetProductList");
        this.$store.commit(
          "checkoutPage/SET_CHECKOUT_ITEM_ID",
          newName.query.id
        );
        this.$store.dispatch("checkoutPage/GetItemData");
      },
      deep: true
    }
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    let vm = this;
    this.$store.commit("checkoutPage/SET_CHECKOUT_ITEM_ID", vm.$route.query.id);
    this.$store.dispatch("checkoutPage/GetItemData");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
