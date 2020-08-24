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
        imageUrl: "",
        starScore: 0,
        favorite: false
      },
      deleteData: {
        id: ""
      },
      viewData: {
        category: {
          options: [
            {
              label: "Men",
              options: [
                { value: "T-Shirt", text: "T-Shirt" },
                { value: "Long-Sleeves", text: "Long Sleeves 長袖" },
                { value: "Tank-Tops", text: "Tank Tops 背心" },
                { value: "Dress-Shirt", text: "Dress Shirt 襯衫" }
              ]
            },
            {
              label: "Women",
              options: []
            },
            {
              label: "Kids",
              options: []
            }
          ]
        },
        starScore: {
          options: [
            {
              label: "請選擇星星數",
              options: [
                { value: 5, text: "五顆星" },
                { value: 4, text: "四顆星" },
                { value: 3, text: "三顆星" },
                { value: 2, text: "兩顆星" },
                { value: 1, text: "一顆星" }
              ]
            }
          ]
        }
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
          imageUrl: this.createData.imageUrl,
          starScore: this.createData.starScore,
          favorite: this.createData.favorite
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
    },
    onUploadFile: function() {
      const vm = this;
      const uploadFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.axios
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response.data);

          if (response.data.success) {
            vm.createData.imageUrl = response.data.imageUrl;
          } else {
            console.error(response.data.message);
          }
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
