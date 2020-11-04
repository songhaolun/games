<template>
    <div>
      <el-select v-model="row[info.key]"  filterable remote reserve-keyword placeholder="请输入搜索内容" clearable
                 :remote-method="remoteMethod" :class="styled" :disabled="disabled" size="small" @change="handelSelect">
        <el-option v-for="item in option" :key="item.key" :label="item.value" :value="item.key">
          <template>
            <span style="float: left">{{ item.key }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </template>
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
      name: "selectTemplet",
      props: {
        row: {},
        info: {},
        oplist: {},
        form: {},
        disabled: {
          type: Boolean,
          default: false
        },
        styled:{
          type: String,
          default: "el-input-220"
        }
      },
      data() {
        return {
          option: []
        };
      },
      mounted() {
        this.remoteMethod('')
      },
      methods: {
        remoteMethod(queryString) {
          if(this.baseUtil.isNotNull(this.info.url)){
            if (this.info.dataType ==  'gereral'){
              this.api({
                url: this.info.url,
                method: this.info.method,
                data: {
                  searchTxt: queryString,
                  companyCode: this.form.head.companyCode
                }
              }).then((res) => {
                this.option = []
                for (var i = 0; i < res.length; i++) {
                  var item = res[i]
                  this.option.push(item);
                  this.option =this.option.slice(0, 20);
                }
              }).catch((err) => {
                this.option = [];
              })
            }else if(this.info.dataType == 'inCompany'){
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
                  this.option =this.option.slice(0, 20);
                }
              }).catch((err) => {
                this.option = [];
              })
            }
          }
        },
        handelSelect() {
          this.row[this.info.value] =''
          if (this.baseUtil.isNotNull(this.option)) {
            this.option.forEach(item => {
              if (item.key == this.row[this.info.key]) {
                this.row[this.info.value] = item.value
              }
            })
          }
          this.$emit('change')
        },
      }
    }
</script>

<style scoped>

</style>
