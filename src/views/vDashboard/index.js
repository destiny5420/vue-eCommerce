import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "vDashboard",
  props: {},
  components: {
    Loading
  },
  data: function() {
    return {
      isLoading: false,
      loginData: {
        account: "paper.hsiao@gmail.com",
        password: "LOVEman0245"
      },
      createData: {
        title: "",
        category: null,
        sex: null,
        size: [
          { caption: "XS", state: false },
          { caption: "S", state: false },
          { caption: "M", state: false },
          { caption: "L", state: false },
          { caption: "XL", state: false }
        ],
        colors: [],
        origin_price: 0,
        price: 0,
        unit: "",
        image: "",
        description: "",
        content: "",
        is_enabled: 1,
        imageUrl: "",
        starScore: null,
        favorite: false
      },
      deleteData: {
        id: ""
      },
      viewData: {
        category: {
          options: [
            { value: null, text: "Please select category", disabled: true },
            { value: "T-Shirt", text: "T-Shirt" },
            { value: "Long-Sleeves", text: "Long Sleeves 長袖" },
            { value: "Tank-Tops", text: "Tank Tops 背心" },
            { value: "Dress-Shirt", text: "Dress Shirt 襯衫" }
            // {
            //   label: "Men",
            //   options: [
            //     { value: "T-Shirt", text: "T-Shirt" },
            //     { value: "Long-Sleeves", text: "Long Sleeves 長袖" },
            //     { value: "Tank-Tops", text: "Tank Tops 背心" },
            //     { value: "Dress-Shirt", text: "Dress Shirt 襯衫" }
            //   ]
            // },
            // {
            //   label: "Woman",
            //   options: []
            // },
            // {
            //   label: "Kids",
            //   options: []
            // }
          ]
        },
        sex: {
          options: [
            { value: null, text: "Please select sex", disabled: true },
            { value: "woman", text: "女生 Woman" },
            { value: "men", text: "男生 Men" },
            { value: "kids", text: "小孩 Kids" }
          ]
        },
        starScore: {
          options: [
            {
              label: "請選擇星星數",
              options: [
                {
                  value: null,
                  text: "Please select star score",
                  disabled: true
                },
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
    onLogoutHandler: function() {
      let api = `${process.env.VUE_APP_APIPATH}/logout`;
      this.axios.post(api).then(response => {
        console.log(response.data);

        if (response.data.success) {
          this.$router.push({
            name: "vLogin"
          });
        }
      });
    },
    onGetProductAllList: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.axios.get(api).then(response => {
        console.log(response);
      });
    },
    onCreateColorHandler: function() {
      this.createData.colors.push("#ffffff");
    },
    onCreateProduct: function() {
      let vm = this;
      vm.isLoading = true;
      let checkLogin = new Promise(function(resolve, reject) {
        let api = `${process.env.VUE_APP_APIPATH}/api/user/check`;

        vm.axios
          .post(api)
          .then(response => {
            resolve(response);
          })
          .catch(function(error) {
            reject(error);
          });
      });

      checkLogin.then(function(value) {
        if (value.data.success) {
          let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
          let data = {
            data: {
              title: vm.createData.title,
              category: vm.createData.category,
              origin_price: vm.createData.origin_price,
              price: vm.createData.price,
              unit: "美元",
              image: "",
              description: vm.createData.description,
              content: "",
              is_enabled: 1,
              imageUrl: vm.createData.imageUrl,
              starScore: vm.createData.starScore,
              favorite: vm.createData.favorite,
              sex: vm.createData.sex,
              size: vm.createData.size,
              colors: vm.createData.colors
            }
          };

          vm.axios
            .post(api, data)
            .then(response => {
              vm.isLoading = false;
              console.log(response.data);
            })
            .catch(function(error) {
              vm.isLoading = false;
              console.error(error);
            });
        } else {
          vm.isLoading = false;
          console.error("Please login before create product.");
        }
      });

      checkLogin.catch(function(value) {
        vm.isLoading = false;
        console.error("catch in promise reject: ", value);
      });
    },
    onDeleteProduct: function() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.deleteData.id}`;
      console.log(api);
      this.axios.delete(api).then(response => {
        console.log(response.data);
      });
    },
    onUploadFile: function() {
      const vm = this;
      const uploadFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.isLoading = true;
      this.axios
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response.data);
          this.isLoading = false;
          if (response.data.success) {
            vm.createData.imageUrl = response.data.imageUrl;
          } else {
            console.error(response.data.message);
          }
        });
    }
  },
  computed: {
    pictureAction: {
      get: function() {
        return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      }
    },
    stylePictureForm: {
      get: function() {
        return {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        };
      }
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
