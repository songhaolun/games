<template>
  <div style="background: url('./static/bkg2.jpg');height: 800px;background-size:cover; ">
    <el-row>
      <h1 style="color: #fff; font-size: 30px;margin: 10px">推箱子?
        <span style="color: #fff;font-size: 15px;">v1.1</span></h1>
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52
        src="//music.163.com/outchain/player?type=2&id=30284285&auto=1&height=32">
      </iframe>
    </el-row>
    <el-row>

      <el-col>
        <el-button size='mini' type='primary' @click='help'>游戏说明</el-button>
        <el-button size='mini' type='primary' @click='versionInfo'>更新日志</el-button>
        <el-select v-model="gameInfo.model" placeholder="请选择" size='mini' @change='restart'>
            <el-option v-for="item in gameInfo.modelOption" :key="item.key" :label="item.value" :value="item.key">
            </el-option>
        </el-select>
        <el-select v-model="gameInfo.mapIndex" placeholder="请选择" size='mini' @change='restart'>
          <el-option v-for="item in gameInfo.mapOption" :key="item.key" :label="item.value" :value="item.key">
          </el-option>
        </el-select>
        <el-button size='mini' type='danger' :disabled="!baseUtil.isNotNull(last)" @click='undo()'>😨悔棋</el-button>
        <el-button size='mini' type='primary' @click='restart'>开始新游戏</el-button>

        <el-row>
          <div class="board" @keyup.left.native='left' @keyup.right.native='right' @keyup.up.native='up'
            @keyup.down.native='down' v-if='visGame' >
            <el-row v-for="(row,rindex) in board" :key='rindex'type="flex" justify='center'>

              <mapItem :game-info='gameInfo' v-for="(p,index) in row" :key="index" :value='p'></mapItem>

            </el-row>
          </div>
        </el-row>
      </el-col>




    </el-row>

    <el-dialog :visible.sync="visHelp">
      <h3 style="text-align:left">
        游戏规则：</br>
        游戏的规则很简单，你需要控制任务推动箱子 到达目的地，不能吧箱子推向箱子或者墙上，当然人也是不能穿墙的~</br>
      </h3>
    </el-dialog>

    <el-dialog :visible.sync="visVersionInfo">
      <h3 style="text-align:left">
        v1.0: 推箱子基本功能</br>
        v1.1: 新增故事线</br>
        您的使用就我们前进的最大动力！
      </h3>
    </el-dialog>


  </div>
</template>
<script>
  import mapItem from '@/views/pushBox/mapItem'
  import {
    maps
  } from '@/views/pushBox/maps'
  export default {
    name: "game",
    components: {
      mapItem
    },
    props: {},
    data() {
      return {
        score: 0,
        board: [],
        last: null,
        // [
        //   [4, 2, 8192, 16],
        //   [32, 64, 128, 2048],
        //   [256, 512, 8, 2],
        //   [2, 1024, 2, 4096]
        // ],
        visGame: true,
        loading: false,
        max: 0,
        visHelp: false,
        visVersionInfo: false,
        visRankMap: false,
        gameInfo: {
          score: 0,
          mapIndex: 0,
          mapOption: [],
          characters: [],
          model: 1,
          modelOption: [
              {key : 0,value: '陶雨推俊杰'},
              
              {key : 1,value: '韩斌吃羊肉'},
              
              {key : 2,value: '晓东推国星'}
          ]
        },
      };
    },
    methods: {
      left() {
        console.log('left')
        this.pushBox('left')

      },
      right() {
        console.log('right')
        this.pushBox('right')

      },
      up() {
        console.log('up')
        this.pushBox('up')

      },
      down() {
        console.log('down')
        this.pushBox('down')

      },
      pushBox(target) {

        let matrix = []
        let p = [0, 0]
        let p1 = [0, 0]
        let p2 = [0, 0]
        for (let i = 0; i < this.board.length; i++) {
          for (let j = 0; j < this.board[i].length; j++) {
            if (this.board[i][j] == 2 || this.board[i][j] == 6) {
              p = [i, j]
            }
          }
        }
        switch (target) {
          case 'left':
            p1 = [p[0], p[1] - 1]
            p2 = [p[0], p[1] - 2]
            break
          case 'right':
            p1 = [p[0], p[1] + 1]
            p2 = [p[0], p[1] + 2]
            break
          case 'up':
            p1 = [p[0] - 1, p[1]]
            p2 = [p[0] - 2, p[1]]
            break
          case 'down':
            p1 = [p[0] + 1, p[1]]
            p2 = [p[0] + 2, p[1]]
            break
        }
        if (
          this.board[p1[0]][p1[1]] == 0 || this.board[p1[0]][p1[1]] == 4
        ) {
          this.last = JSON.parse(JSON.stringify(this.board))

          if (this.board[p1[0]][p1[1]] == 0) {
            this.board[p1[0]][p1[1]] = 2
          } else {
            this.board[p1[0]][p1[1]] = 6
          }

          if (this.board[p[0]][p[1]] == 2) {
            this.board[p[0]][p[1]] = 0
          } else {
            this.board[p[0]][p[1]] = 4
          }

          this.refresh()
          this.checkSuccess()
        }

        if (
          (this.board[p1[0]][p1[1]] == 3 || this.board[p1[0]][p1[1]] == 5) && (this.board[p2[0]][p2[1]] == 0 || this
            .board[p2[0]][p2[1]] == 4)
        ) {
          this.last = JSON.parse(JSON.stringify(this.board))

          if (this.board[p[0]][p[1]] == 2) {
            this.board[p[0]][p[1]] = 0
          } else {
            this.board[p[0]][p[1]] = 4
          }

          if (this.board[p1[0]][p1[1]] == 3) {
            this.board[p1[0]][p1[1]] = 2
          } else {
            this.board[p1[0]][p1[1]] = 6
          }

          if (this.board[p2[0]][p2[1]] == 0) {
            this.board[p2[0]][p2[1]] = 3
          } else {
            this.board[p2[0]][p2[1]] = 5
          }

          this.refresh()
          this.checkSuccess()
        }




      },


      undo() {
        this.board = JSON.parse(JSON.stringify(this.last))
        this.last = null
        this.refresh()
      },
      checkSuccess() {
        let hasBox = false
        for (let i =0;i< this.board.length;i++){
            for (let j=0;j< this.board[i].length;j++){
                if (this.board[i][j] == 3){
                    hasBox = true
                }
            }
        }
        if (!hasBox){
            this.$confirm('太厉害了！成功过关！是否下一关？', '😲😲😲', {
            confirmButtonText: '😃',
            cancelButtonText: '😔',
            type: 'warning'
          }).then(() => {
            this.gameInfo.mapIndex++
            this.restart()
            this.loading = false
          }).catch(() => {
            this.loading = false
          });
        }
      },
      restart() {

        this.board = JSON.parse(JSON.stringify(maps[this.gameInfo.mapIndex]))
        this.refresh()
      },
      refresh() {
        this.visGame = false
        this.$nextTick(_ => {
          this.visGame = true
        })
      },
      help() {
        this.visHelp = true
      },
      versionInfo() {
        this.visVersionInfo = true
      },
      RankMap() {
        this.visRankMap = true
      }
    },
    mounted() {
      this.gameInfo.mapOption = []
      for (let i = 0; i < maps.length; i++) {
        this.gameInfo.mapOption.push({
          key: i,
          value: '第' + (i + 1) + '关'
        })
      }

      this.restart()

      var _this = this;
      //添加键盘事件
      document.onkeydown = function (e) {
        let key = window.event.keyCode;
        if (_this.loading) {
          return
        }
        if (key == 37) {
          _this.left();
        }
        if (key == 38) {
          _this.up();
        }
        if (key == 39) {
          _this.right();
        }
        if (key == 40) {
          _this.down();
        }
      };

      //添加滑动事件
      this.baseUtil.EventUtil.listenTouchDirection(document,
        true, _this.up, _this.right, _this.down, _this.left)

    },
    updated() {

    },

    computed: {},
    watch: {

    }
  };

</script>
<style scoped>
  .board {
    margin-left: auto;
    margin-right: auto;

  }

  .box-card {
    width: 380px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    margin: 5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .text-item {
    /* text-align: left; */

  }

</style>
