<template>
  <div>
    <el-button :type="this.disabled == false?'primary' : 'info'" class="right-button" @click="openDialog"
      :disabled="disabled" size='mini' icon="el-icon-upload2">批量导入</el-button>


    <el-dialog title="批量导入" :visible.sync="visDialog" :close-on-click-modal="false" width="60%" center>
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      <!-- <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table> -->

    </el-dialog>
  </div>
</template>
<script>
  import
  UploadExcelComponent
  from "@/components/Excel/UploadExcelComponent";
  export default {
    name: "busSelecter",
    components: {
      UploadExcelComponent
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      opList: {}
    },
    data() {
      return {
        visDialog: false,
        headers: [],
        loading: false,

        tableData: [],
        tableHeader: []
      };
    },
    methods: {
      openDialog() {
        this.visDialog = true;
      },



      cancle() {
        this.visDialog = false;
      },
      beforeUpload(file) {
        const isLt1M = file.size / 1024 / 1024 < 50

        if (isLt1M) {
          return true
        }

        this.$message({
          message: 'Please do not upload files larger than 50m in size.',
          type: 'warning'
        })
        return false
      },
      handleSuccess({
        results,
        header
      }) {
        
        this.tableData = results
        this.tableHeader = header
        // console.log(this.tableData)
        this.$emit('importexcel',this.tableData)

        this.$notify({
          duration: 10000,
          offset: 100,
          title: '提示',
          message: '导入成功',
          type: 'success'
        })
        this.visDialog = false
      }
    },
    mounted() {},
    updated() {},

    computed: {},
    watch: {}
  };

</script>
