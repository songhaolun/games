<template>
    <div class='piece' :style='bgcolor'>
        <span class='number-style' :style='style'>{{value>0?value:''}}</span>
    </div>
  </template>
  <script>
    export default {
      name: "piece",
      components: {
  
      },
      props: {
        value: {
            type: Number,
            default: 0
        }
      },
      data() {
        return {
            
        };
      },
      methods: {
  
      },
      mounted() {
  
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
          bgcolor: function (){
              let cs = '' 
            switch (this.value ){
                case 0: 
                    cs += 'background: #C0C4CC;'
                    break;
                case 2: 
                    cs += 'background: #E6A23C;'
                    break;
                case 4: 
                    cs += 'background: #409EFF;'
                    break;
                case 8: 
                    cs += 'background: #ffcc33;'
                    break;
                case 16: 
                    cs += 'background: #ff9933;'
                    break;
                case 32: 
                    cs += 'background: #ff6633;'
                    break;
                case 64: 
                    cs += 'background: #ff33ff;'
                    break;
                case 128: 
                    cs += 'background: #cc66ff;'
                    break;
                case 256: 
                    cs += 'background: #9966ff;'
                    break;
                case 512: 
                    cs += 'background: #6666ff;'
                    break;
                case 1024: 
                    cs += 'background: #99ff33;'
                    break;
                case 2048: 
                    cs += 'background: #ff0099;'
                    break;
                case 4096: 
                    cs += 'background: #cc0099;'
                    break;
                case 8192: 
                    cs += 'background: #990099;'
                    break;
                case 16384: 
                    cs += 'background: #660099;'
                    break;
            }

            return cs
          }
      },
      watch: {
  
      }
    };
  
  </script>
  <style scoped>
    .piece{
        width: 90px;
        height: 90px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin: 5px;
        border-radius: 4px
    }
    .number-style{
        margin-left:auto; 
        margin-right:auto;
        font-weight: 600;
        line-height: 90px;
    }
  </style>
  