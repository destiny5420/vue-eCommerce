export default {
  name: "vDashboard",
  props: {},
  components: {},
  data: function() {
    return {
      loginData: {
        account: "paper.hsiao@gmail.com",
        password: "LOVEman0245"
      },
      createData: {
        title: "",
        category: "",
        origin_price: 0,
        price: 0,
        unit: "",
        image: "",
        description: "",
        content: "",
        is_enabled: 1,
        imageUrl: ""
      },
      deleteData: {
        id: ""
      }
    };
  },
  methods: {
    onLoginHandler: function() {
      let api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      let data = {
        username: this.loginData.account,
        password: this.loginData.password
      };

      this.axios.post(api, data).then(response => {
        console.log(response);
      });
    },
    onLogoutHandler: function() {
      let api = `${process.env.VUE_APP_APIPATH}/logout`;
      this.axios.post(api).then(response => {
        console.log(response);
      });
    },
    onGetProductAllList: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.axios.get(api).then(response => {
        console.log(response);
      });
    },
    onCreateProduct: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let data = {
        data: {
          title: this.createData.title,
          category: this.createData.category,
          origin_price: this.createData.origin_price,
          price: this.createData.price,
          unit: "美元",
          image: "",
          description: this.createData.description,
          content: "",
          is_enabled: 1,
          imageUrl: "",
          startScore: 4,
          favorite: true
        }
      };

      this.axios.post(api, data).then(response => {
        console.log(response);
      });
    },
    onDeleteProduct: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.deleteData.id}`;
      console.log(api);
      this.axios.delete(api).then(response => {
        console.log(response);
      });
    }
  },
  computed: {
    pictureAction: function() {
      return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
    },
    stylePictureForm: function() {
      return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
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
