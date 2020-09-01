import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "vShoppingDeliveryInfo",
  props: {},
  components: {},
  data: function() {
    return {
      firstNameValue: "",
      firstName: {
        title: "* FirstName",
        placeholder: "Hsiao"
      },
      lastNameValue: "",
      lastName: {
        title: "* LastName",
        placeholder: "Paper"
      },
      addressValue: "",
      address: {
        title: "* Address",
        placeholder: "Address"
      },
      cityValue: "",
      city: {
        title: "City",
        placeholder: "Taiwan"
      },
      phoneValue: "",
      phone: {
        title: "* Mobile Phone",
        placeholder: "0979588977"
      },
      emailValue: "",
      email: {
        title: "* Email",
        placeholder: "paper.hsiao@gmail.com"
      },
      stateValue: "",
      state: {
        title: "State",
        placeholder: "State"
      },
      postcodeValue: "",
      postcode: {
        title: "Postcode",
        placeholder: "Postcode"
      },
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
  validators: {
    firstNameValue: function(value) {
      return Validator.value(value).required();
    },
    lastNameValue: function(value) {
      return Validator.value(value).required();
    },
    addressValue: function(value) {
      return Validator.value(value).required();
    },
    phoneValue: function(value) {
      return Validator.value(value)
        .required()
        .digit()
        .regex("^09[0-9]{8}$", "Unvalid phone number.");
    },
    emailValue: function(value) {
      return Validator.value(value)
        .required()
        .email();
    }
  },
  methods: {
    onBackHandler: function() {
      console.log("-- onBackHandler --");
      this.$router.go(-1);
    },
    onContinueShopHandler: function() {
      this.$router.push({
        name: "vProducts",
        params: { id: "all-products" }
      });
    },
    onNextStepHandler: function() {
      console.log("-- onNextStepHandler --");

      this.$validate().then(function(success) {
        if (success) {
          alert("Validation succeeded!");
        }
      });
    },
    onDeliverySelect: function(index) {
      this.deliveryCurIndex = index;
    },
    onPaymentSelect: function(index) {
      this.paymentCurIndex = index;
    }
  },
  computed: {
    styleDeliveryOption: function() {
      return function(index) {
        return {
          border:
            index === this.deliveryCurIndex
              ? "2px solid #ffcb7d"
              : "2px solid rgba(136, 136, 136, 0.35)",
          opacity: index === this.deliveryCurIndex ? 1 : 0.5
        };
      };
    },
    stylePaymentOption: function() {
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
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {}
};
