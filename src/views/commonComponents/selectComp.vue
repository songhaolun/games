<template>
  <div>
    <el-select v-if="!isRemote" v-model="row[tokey]" placeholder="请选择" :size='size' :disabled='disabled'
      @change='change'  filterable clearable :class='styled'>
      <el-option v-for="item in option" :key="item[getkey]" :label="item[getvalue]" :value="item[getkey]">
      </el-option>
    </el-select>


    <el-select v-if="isRemote" v-model="row[tokey]" placeholder="请选择" :size='size' :disabled='disabled' @change='change'
      filterable remote  reserve-keyword  :remote-method="remoteMethod" :loading="loading"   clearable :class='styled'>
      <el-option v-for="item in option" :key="item[getkey]" :label="item[getvalue]" :value="item[getkey]">
      </el-option>
    </el-select>
  </div>
</template>
<script>
  export default {
    name: "selectComp",
    components: {},
    props: {
      row: {},
      options: {},
      tokey: {
        type: String,
        default: 'key'
      },
      tovalue: {
        type: String,
        default: 'default'
      },
      getkey: {
        type: String,
        default: 'key'
      },
      getvalue: {
        type: String,
        default: 'value'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'mini'
      },
      isRemote: {
        type: Boolean,
        default: false
      },
      styled: {
        type: String,
        default: 'w-100-per'
      },
      form: {},
      infos: {}
    },
    data() {
      return {
        loading: false,
        option: []
      };
    },
    methods: {
      change() {
        if (this.tovalue != 'default') {
          this.row[this.tovalue] = ''
          this.option.forEach(element => {
            if (element[this.getkey] == this.row[this.tokey]) {
              this.row[this.tovalue] = element[this.getvalue]
            }
          })
        }

        this.$emit('change', this.row)
      },
      remoteMethod(query) {
        let params = this.infos.params
        params[this.infos.filterAtt] = query
        // console.log(this.infos)
        // console.log(this.form)
        if (this.baseUtil.isNotNull(this.infos.companyAtt)) {
          params[this.infos.companyAtt] = this.form.head.companyCode
        }
        // console.log(params)

        this.loading = true;
        let apiInfo = {
          url: this.infos.url,
          method: this.infos.method,
        }
        if (this.infos.dataType == 'data'){
          apiInfo.data = params
        }else{
          apiInfo.params = params
        }



        this.api(
          apiInfo
        ).then((res) => {
          this.loading = false

          this.option = []
          for (var i = 0; i < res.length; i++) {
            var item = res[i]
            this.option.push(item);
            this.option.slice(0, 20);
          }

        }).catch((err) => {
          this.loading = false
          this.option = []
          console.log(err)
        })




      }
    },
    mounted() {
      if (this.baseUtil.isNotNull(this.options)){
        this.option = JSON.parse(JSON.stringify(this.options))
      }
      if (this.isRemote ){
        this.remoteMethod('')
      }

      // console.log(this)
    },
    updated() {},

    computed: {},
    watch: {

    }
  };

</script>
