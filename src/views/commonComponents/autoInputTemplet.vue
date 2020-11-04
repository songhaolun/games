<template>
  <div>
    <el-autocomplete v-model="row[info.value]" clearable :fetch-suggestions="search" placeholder="请输入搜索内容"
      popper-class="my-autocomplete" :trigger-on-focus="true" value-key="value" @select="handelSelect" :size="sized"
      :class="styled" :disabled="disabled">

      <template slot-scope="{ item }">

        <span class="addr">
          <div class="name" style="font-size: 12px;color: #b4b4b4">{{ item.key }}</div>
          {{ item.value }}
        </span>

      </template>
    </el-autocomplete>
  </div>
</template>
<script>
  export default {
    name: "autoInputTemplet",
    components: {},
    props: {
      row: {},
      info: {},
      oplist: {},
      form: {},
      disabled: {
        type: Boolean,
        default: false
      },
      styled: {
        type: String,
        default: "el-input-220"
      },
      sized: {
        type: String,
        default: "small"
      }
    },
    data() {
      return {
        option: []
      };
    },
    methods: {
      search(queryString, cb) {
        this.row[this.info.key] = ''
        let data = {
          searchTxt: queryString
        }
        if (this.baseUtil.isNotNull(this.info.url)) {
          if (this.info.url.indexOf(',') !== -1) { //多条url
            let urls = this.info.url.split(',');
            let dataTypes = [];
            if (this.info.dataType.indexOf(',') !== -1) { //多条dataType
              dataTypes = this.info.dataType.split(',');
            }
            var restaurants = [];
            for (let i = 0; i < urls.length; i++) {
              if (dataTypes[i] == 'gereral') {
                this.api({
                  url: urls[i],
                  method: this.info.method,
                  data: {
                    searchTxt: queryString,
                    companyCode: this.form.head.companyCode
                  }
                }).then((res) => {
                  for (var i = 0; i < res.length; i++) {
                    var item = res[i]
                    restaurants.push(item);
                    restaurants.slice(0, 20);
                  }
                }).catch((err) => {
                  this.option = [];
                })
              } else if (dataType[i] == 'security') {
                this.api({
                  url: urls[i],
                  method: this.info.method,
                  params: {
                    typeCode: 'SECURITY_FEE_TYPE',
                    parentCode: ''
                  }
                }).then((res) => {
                  for (var i = 0; i < res.length; i++) {
                    var item = res[i]
                    restaurants.push(item);
                    restaurants.slice(0, 20);
                  }
                }).catch((err) => {
                  this.option = [];
                })

              } else if (dataTypes[i] == 'inCompany') {
                this.api({
                  url: urls[i],
                  method: 'get',
                  params: {
                    filter: queryString
                  }
                }).then((res) => {
                  for (var i = 0; i < res.length; i++) {
                    var item = res[i]
                    restaurants.push(item);
                    restaurants.slice(0, 20);
                  }
                }).catch((err) => {
                  this.option = [];
                })
              }
            }
            this.option = restaurants
            cb(restaurants);
          } else {
            if (this.info.dataType == 'gereral') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.companyCode
                }
              }).then((res) => {
                this.option = []
                let temp = ''
                if ('transferToCorp' === this.info.key) {
                  temp = this.form.head.companyCode
                }
                for (var i = 0; i < res.length; i++) {
                  if (temp == res[i]) {
                    continue
                  }
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            }else if (this.info.dataType == 'funPayment') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.row.payment
                }
              }).then((res) => {
                this.option = []
                let temp = ''

                for (var i = 0; i < res.length; i++) {
                  if (temp == res[i]) {
                    continue
                  }
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            }else if (this.info.dataType == 'funDemander') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.row.demander
                }
              }).then((res) => {
                this.option = []
                let temp = ''

                for (var i = 0; i < res.length; i++) {
                  if (temp == res[i]) {
                    continue
                  }
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            }else if (this.info.dataType == 'stampTaxCfgProject') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.row.cpnCode
                }
              }).then((res) => {
                this.option = []
                let temp = ''

                for (var i = 0; i < res.length; i++) {
                  if (temp == res[i]) {
                    continue
                  }
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            }else if (this.info.dataType == 'costCenter') {
              let cetCodeType = ''
              if (this.baseUtil.inArray(this.form.head.businessType1, ['A03', 'A06'])) {
                cetCodeType = 7
              }
              if (this.baseUtil.inArray(this.form.head.businessType1, ['A02', 'A08'])) {
                cetCodeType = 9
              }
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.companyCode,
                  cetCodeType: cetCodeType
                }
              }).then((res) => {
                this.option = []

                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })

            } else if (this.info.dataType == 'order') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.companyCode,
                  orderType2: this.info.orderType2
                }
              }).then((res) => {
                this.option = []

                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })

            } else if (this.info.dataType == 'security') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                params: {
                  typeCode: 'SECURITY_FEE_TYPE',
                  parentCode: ''
                }
              }).then((res) => {
                this.option = []
                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            } else if (this.info.dataType == 'assignment') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.companyCode,
                  fincCode: this.row.account,
                }
              }).then((res) => {
                this.option = []

                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            } else if (this.info.dataType == 'inCompany') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                params: {
                  filter: queryString
                }
              }).then((res) => {
                this.option = []

                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            } else if (this.info.dataType == 'otherCompany') {
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.transferToCorp
                }
              }).then((res) => {
                this.option = []
                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                }
                var restaurants = this.option.slice(0, 20);
                cb(restaurants);
                // console.log(this.option)
              }).catch((err) => {
                console.log(err)
                cb([])
                this.option = [];
              })
            }
          }
        }
      },
      handelSelect() {
        this.row[this.info.key] = ''
        if (this.baseUtil.isNotNull(this.option)) {
          this.option.forEach(item => {
            if (item.value == this.row[this.info.value]) {
              this.row[this.info.key] = item.key
            }
          })
        }
        this.$emit('change')
      },

    },
    mounted() {
      // console.log(this.styled)
    },
    updated() {},
    computed: {},
    watch: {

    }
  };

</script>
