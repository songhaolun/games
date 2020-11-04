<template>
    <el-col class='piece' :style='bgcolor'>
    </el-col>
  </template>
  <script>
    export default {
      name: "itemMap",
      components: {
  
      },
      props: {
        value: {
            type: Number,
            default: 0
        },
        gameInfo: {

        }
      },
      data() {
        return {
          bgcolor: ''
        };
      },
      methods: {
  
      },
      mounted() {
        let cs = '' 
            switch (this.value ){
                case 0: 
                    cs += 'background: #fff;opacity:0.2;'
                    break;
                case 1: 
                    cs += 'background: #909399;'
                    break;
                case 2: 
                    cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-2.png');background-size: cover;"
                    break;
                case 3: 
                    cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-3.png');background-size: cover;"
                    break;
                case 4: 
                    cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-4.png');background-size: cover;"
                    break;
                case 5: 
                    cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-5.png');background-size: cover;"
                    break;
                case 6: 
                    cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-6.png');background-size: cover;"
                    break;
            }
            console.log(cs)
            this.bgcolor = cs
      },
      updated() {
      },
  
      computed: {
          style: function (){
            let cs = ''
            if (this.value > 0){
                cs += "font-size: "+ (80/ (this.value + '').length ) +"px;"
            }
            cs += 'color: #fff;'
            return cs
          },
          // bgcolor: function (){
          //     let cs = '' 
          //   switch (this.value ){
          //       case 0: 
          //           cs += 'background: #fff;opacity:0.2;'
          //           break;
          //       case 1: 
          //           cs += 'background: #909399;'
          //           break;
          //       case 2: 
          //           cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-2.png');background-size: "+this.bgs+";"
          //           break;
          //       case 3: 
          //           cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-3.png');background-size: "+this.bgs+";"
          //           break;
          //       case 4: 
          //           cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-4.png');background-size: "+this.bgs+";"
          //           break;
          //       case 5: 
          //           cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-5.png');background-size: "+this.bgs+";"
          //           break;
          //       case 6: 
          //           cs += "background: url('./static/pushBox/"+this.gameInfo.model+"-6.png');background-size: "+this.bgs+";"
          //           break;
          //   }
          //   console.log(cs)
          //   return cs
          // }
      },
      watch: {
  
      }
    };
  
  </script>
  <style scoped>
    .piece{
        width: 50px;
        height: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin: 2px;
        border-radius: 4px
    }
    .number-style{
        margin-left:auto; 
        margin-right:auto;
        font-weight: 600;
        line-height: 50px;
    }
  </style>
  