<template>
  <div style="text-align: left">
    <el-row>
      <el-form size="mini" v-loading="loading" :inline="true" label-position="left" @submit.native.prevent
        @keyup.enter.native="search">

        <el-form-item v-for='item in conditionInfo.queryInfo.conditionList' :key='item.key' :label='item.label '>
          <el-tooltip placement="top" effect="light" :disabled=' item.desc == null || item.desc.length == 0 '>
            <div slot="content">{{item.desc}}</div>

            <el-input :ref="'input-'+item.key" v-model="item.value" class="el-input-220">
            </el-input>

          </el-tooltip>
        </el-form-item>

      </el-form>
    </el-row>
    <el-row>
      <el-button type='primary' size='mini' @click='search()'>查询</el-button>
      <el-button type='primary' size='mini' @click='addItems()'>新增</el-button>
      <el-button v-if='!conditionInfo.unEditable' type='primary' size='mini' @click='editItems()'>编辑</el-button>
      <el-button type='primary' size='mini' @click='deleteItems()'>删除</el-button>
      <el-button type='primary' size='mini' @click='save()'>保存</el-button>

      <el-button v-if="conditionInfo.processDefSubmit" @click='processSumbit()' icon='el-icon-check' type='success'
        size='mini'>
        发布</el-button>


      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange"
        :current-page="currentPage" :page-sizes="[10, 20, 40, 100]" :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper" :total="total" style="float:right;">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "formTemplet",
    components: {},
    props: {
      conditionInfo: {},
      cfgInfo: {},
      contro: {}

    },
    data() {
      return {
        total: 0,
        pagesize: 20,
        currentPage: 1,
        loading: false
      };
    },
    methods: {
      search() {
        let apiInfo = {
          url: this.conditionInfo.queryInfo.url,
          method: this.conditionInfo.queryInfo.method
        }
        let params = {}
        this.conditionInfo.queryInfo.conditionList.forEach(element => {
          params[element.key] = element.value
        });

        if (this.conditionInfo.queryInfo.dataType == 'data') {
          apiInfo.data = params
        } else {
          apiInfo.params = params
        }

        this.loading = true
        this.$emit('loadingchange')
        this.api(
          apiInfo
        ).then((res) => {
          this.loading = false
          this.$emit('loadingchange')
          this.cfgInfo[this.conditionInfo.cfgName].list = res
          this.initPageInfo()
        }).catch((err) => {
          this.loading = false
          this.$emit('loadingchange')
          console.log(err)
        })

      },
      addItems() {
        let item = JSON.parse(JSON.stringify(this.conditionInfo.temp))
        item.status = 'new'
        item.createBy = this.contro.employeeId
        item.createByTxt = this.contro.displayname
        this.cfgInfo[this.conditionInfo.cfgName].currList.push(item)
      },
      deleteItems() {
        if (!this.baseUtil.isNotNull(this.cfgInfo[this.conditionInfo.cfgName].selections) ||
          this.cfgInfo[this.conditionInfo.cfgName].selections.length == 0) {
          this.$notify({
            duration: 10000,
            offset: 100,
            title: '提示',
            message: '请选择行项目!',
            type: 'warning'
          })
          return
        }

        this.$confirm('此操作将永久删除选中项目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          let deleteList = []
          for (let i = 0; i < this.cfgInfo[this.conditionInfo.cfgName].selections.length; i++) {
            let item = this.cfgInfo[this.conditionInfo.cfgName].selections[i]
            if (item.status == 'new') {
              this.baseUtil.deleteFromArray(this.cfgInfo[this.conditionInfo.cfgName].currList, item)
            } else {
              deleteList.push(item)
            }
          }
          if (deleteList.length > 0) {
            this.api({
              url: this.conditionInfo.deleteUrl,
              method: 'post',
              data: deleteList
            }).then((res) => {
              this.$notify({
                duration: 10000,
                offset: 100,
                title: '提示',
                message: '删除成功！',
                type: 'success'
              })
              this.cfgInfo[this.conditionInfo.cfgName].selections = []
              this.search()
            }).catch((err) => {
              this.$notify({
                duration: 10000,
                offset: 100,
                title: '提示',
                message: '删除失败！' + err,
                type: 'warning'
              })
            })
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })



      },
      editItems() {
        this.cfgInfo[this.conditionInfo.cfgName].selections.forEach(item => {
          if (!this.baseUtil.isNotNull(item.status) || item.status != 'new') {
            item.status = 'edit'
          }
        })
      },
      save() {

        let createList = []
        let editList = []
        this.cfgInfo[this.conditionInfo.cfgName].currList.forEach(item => {
          if (item.status == 'edit') {
            editList.push(item)
            item.modifyBy = this.contro.employeeId
            item.modifyByTxt = this.contro.displayname
          }
          if (item.status == 'new') {
            createList.push(item)
            item.modifyBy = this.contro.employeeId
            item.modifyByTxt = this.contro.displayname
          }
        })
        let preTaskOver = false

        if (createList.length > 0) {
          this.api({
            url: this.conditionInfo.createUrl,
            method: 'post',
            data: createList
          }).then((res) => {
            if (preTaskOver) {
              this.$notify({
                duration: 10000,
                offset: 100,
                title: '提示',
                message: '保存成功!',
                type: 'success'
              })
              this.search()
            }
            preTaskOver = true
          }).catch((err) => {
            this.$notify({
              duration: 10000,
              offset: 100,
              title: '提示',
              message: '保存失败!' + err,
              type: 'warning'
            })
          })
        } else {
          preTaskOver = true
        }
        if (editList.length > 0) {
          this.api({
            url: this.conditionInfo.editUrl,
            method: 'post',
            data: editList
          }).then((res) => {
            if (preTaskOver) {
              this.$notify({
                duration: 10000,
                offset: 100,
                title: '提示',
                message: '保存成功!',
                type: 'success'
              })
              this.search()
            }
            preTaskOver = true
          }).catch((err) => {
            this.$notify({
              duration: 10000,
              offset: 100,
              title: '提示',
              message: '保存失败!' + err,
              type: 'warning'
            })
          })
        } else {
          preTaskOver = true
        }
        this.cfgInfo[this.conditionInfo.cfgName].selections = []



      },

      handleCurrentPageChange(val) {
        this.currentPage = val
        this.getPage()
      },
      handleSizeChange(val) {
        this.pagesize = val
        this.getPage()
      },
      initPageInfo() {
        if (!this.baseUtil.isNotNull(this.cfgInfo[this.conditionInfo.cfgName].list)) {
          return
        }
        this.total = this.cfgInfo[this.conditionInfo.cfgName].list.length
        this.currentPage = 1
        this.getPage()
      },
      getPage() {
        this.cfgInfo[this.conditionInfo.cfgName].currList = this.cfgInfo[this.conditionInfo.cfgName].list
          .slice(this.pagesize * (this.currentPage - 1), this.pagesize * (this.currentPage))
        this.cfgInfo[this.conditionInfo.cfgName].selections = []
      },
      handleSelect(val) {
        this.cfgInfo[this.conditionInfo.cfgName].selections = val
      },

      //========================================
      processSumbit() {
        let submitList = []
        if (!this.baseUtil.isNotNull(this.cfgInfo[this.conditionInfo.cfgName].selections) ||
          this.cfgInfo[this.conditionInfo.cfgName].selections.length == 0) {
          // this.$notify({
          //   duration: 10000,
          //   offset: 100,
          //   title: '提示',
          //   message: '请选择行项目!',
          //   type: 'warning'
          // })
          // return
          submitList = ['']

        } else {
          this.cfgInfo[this.conditionInfo.cfgName].selections.forEach(item => {
            submitList.push(item.processDefId)
          })
        }

        this.loading = true
        this.oneByOneSubMit(submitList).then((res) => {
          this.loading = false
          this.$notify({
            duration: 10000,
            offset: 100,
            title: '提示',
            message: '发布成功!',
            type: 'success'
          })
        }).catch((err) => {
          this.loading = false
          this.$notify({
            duration: 10000,
            offset: 100,
            title: '提示',
            message: '发布失败!',
            type: 'error'
          })
        })

      },
      oneByOneSubMit(submitList) {
        return new Promise((resolve, reject) => {
          if (!this.baseUtil.isNotNull(submitList) || submitList.length == 0) {
            resolve()
            return
          }
          let processDefId = submitList[0]
          this.api({
            url: '/GalaxyFSSC/processDeploy/createDefResource',
            method: 'post',
            params: {
              processDefId: processDefId
            }
          }).then((res) => {
            submitList.splice(0, 1)
            this.oneByOneSubMit(submitList).then(_ => {
              resolve()
            }).catch((err) => {
              reject(err)
            })
          }).catch((err) => {
            reject(err)
          })


        })
      }

    },
    mounted() {
      this.initPageInfo()
    },
    updated() {},

    computed: {},
    watch: {

    }
  };

</script>
