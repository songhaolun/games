<template>
  <div style="background: url('./static/bkg.jpg');height: 800px;background-size:cover; ">
    <el-row>
      <h1 style="color: #fff; font-size: 30px;margin: 10px">2048
        <span style="color: #fff;font-size: 15px;">v1.6</span></h1>
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=30284285&auto=1&height=32"></iframe>
        <el-card class="box-card">
          <el-input v-model='totalInfo.name'></el-input>
        </el-card>
    </el-row>
    <el-row>

      <el-col>
        <el-button size='mini' type='primary' @click='help'>游戏说明</el-button>
        <el-button size='mini' type='primary' @click='versionInfo'>更新日志</el-button>
        <el-button size='mini' type='danger' :disabled="!baseUtil.isNotNull(last)" @click='undo()'>😨悔棋</el-button>
        <el-button size='mini' type='primary' @click='restart'>重新开始</el-button>
        <el-button size='mini' type='primary' @click='RankMap'>计分板：{{gameInfo.score}}</el-button>

        <el-row>
          <div class="board" @keyup.left.native='left' @keyup.right.native='right' @keyup.up.native='up'
            @keyup.down.native='down'>
            <el-row v-for="(row,rindex) in board" :key='rindex' v-if='visGame'>
              <el-col v-for="(p,index) in row" :key="index" :span='6'>
                <piece :value='p'></piece>
              </el-col>

            </el-row>
          </div>
        </el-row>
      </el-col>




    </el-row>

    <el-dialog :visible.sync="visHelp">
      <h3 style="text-align:left">
        游戏规则：</br>
        游戏的规则很简单，你需要控制所有方块向同一个方向运动，两个相同数字方块撞在一起之后合并成为他们的和，</br>
        每次操作之后会随机生成一个2或者4，最终得到一个“2048”的方块就算胜利了。</br>
        技巧解析：</br>
        1、简单点来说就是尽量不要向上滑动就可以了。先得到较大的数放在右下角。例如第四行2-2-4-32。</br>
        两次想右滑动得到8-32。然后在上面肯定得到了2或4，向左滑动，放到左边，然后向下滑动，麻烦点的例如得到4-2-8-32。</br>
        此时需要考虑的就是在第三行第二个位置得到1个2，然后向下合并再向右合并就可以得到16-32了。同理，这样循环，小数不断积累得到更大的数。</br>
        步骤越来越多而已。</br>
        2、数越来越大以后，较大的数要依次靠着这个，如图64-128-256-512。(如果是256-64-256-512就难度很大了)按向右递增的规律，</br>
        这样如果在上面一行产生出一个64在64的上面，即可按下将64合为128，不断按右产生新的最大的数1024。然后同理，再产生512紧贴1024，</br>
        256紧贴512。</br>
        3、因为尽量不向上滑动，所以大的数必然在底下，靠大家自己的头脑稍微判断下，基本不会出太大的问题就可以达到这样效果。</br>
        因为还想靠在右下角，所有还要谨慎向左滑动，要产生所需要的数，最好先将最后一行填满，譬如2-2-256-512也可以，</br>
        这样第三行左右下就可以随意的滑动了， 产生所需要的数按下合并即可。</br>
        总结：</br>
        总的来说游戏玩法游规则很简单，就是把方块合并，合并的办法是其中一个数字靠边的时候，将另一个数字向四个方向的墙推过去。2和2可以合并成4，4和4合并成8，直至合成到2048，虽然看似简单，但是根本停不下啊。
      </h3>
    </el-dialog>

    <el-dialog :visible.sync="visVersionInfo">
      <h3 style="text-align:left">
        v1.0: 2048基本功能</br>
        v1.1：游戏说明及悔棋功能</br>
        v1.2：公测版上线！及部分UI优化</br>
        v1.3: 移动端上线！</br>
        v1.4: 可以在BGM中kill time了~</br>
        v1.5: 简易计分板以及版本说明</br>
        v1.6: 修复移动端错位问题</br>
        您的使用就我们前进的最大动力！
      </h3>
    </el-dialog>

    <el-dialog :visible.sync="visRankMap" center>
      <el-row>

        <el-card class="box-card" v-if='visGame'>
          <div slot="header" class="clearfix">
            <span>当前分数：{{gameInfo.score}}</span>
          </div>
          <div v-for="(o,index) in totalInfo.scoreList" :key="index" class="text-item">
            {{'第'+(index+1)+'名：' + o.name+ ' 分数：'+o.score }}
          </div>
        </el-card>
      </el-row>
    </el-dialog>

  </div>
</template>
<script>
  import piece from '@/views/game/piece'
  import time from '@/views/game/time'
  export default {
    name: "game",
    components: {
      piece,
      time
    },
    props: {},
    data() {
      return {
        score: 0,
        board: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
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
        totalInfo: {
          scoreList: [{
              name: '宋昊伦',
              score: 6096
            },
            {
              name: '陈俊杰',
              score: 2066
            },
            {
              name: '陶雨',
              score: 2048
            },
            {
              name: '杨博',
              score: 2048
            },
            {
              name: '菜鸟',
              score: 256
            },
            {
              name: '弱鸡？',
              score: 128
            },
            {
              name: '玩一半被妈妈喊走的同学',
              score: 64
            }
          ],
          name: '不愿意留下姓名的有志青年'
        },
        gameInfo: {
          score: 0
        }
      };
    },
    methods: {
      left() {
        console.log('left')
        this.merge('left')


        this.addNewItem()
      },
      right() {
        console.log('right')
        this.merge('right')

        this.addNewItem()
      },
      up() {
        console.log('up')
        this.merge('up')

        this.addNewItem()
      },
      down() {
        console.log('down')
        this.merge('down')

        this.addNewItem()
      },
      merge(target) {
        this.last = JSON.parse(JSON.stringify(this.board))

        let matrix = []

        //旋转
        switch (target) {
          case 'left':
            matrix = this.revolve(0, this.board)
            break
          case 'right':
            matrix = this.revolve(180, this.board)
            break
          case 'up':
            matrix = this.revolve(90, this.board)
            break
          case 'down':
            matrix = this.revolve(270, this.board)
            break

        }

        //向左合并
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (matrix[i][j] != 0) {
              //合并
              for (let k = j - 1; k >= 0; k--) {
                if (matrix[i][k] == matrix[i][j]) {
                  matrix[i][k] = matrix[i][k] + matrix[i][j]
                  matrix[i][j] = 0
                }
                if (matrix[i][k] > this.max && matrix[i][k] >= 32) {
                  this.max = matrix[i][k]
                  this.$notify({
                    duration: 10000,
                    offset: 100,
                    title: '提示',
                    message: '诶唷不错😀~居然达到了' + this.max + '分！也就比我差那么一点点啦~😏',
                    type: 'success'
                  })
                }
                if (matrix[i][k] > 0) {
                  break
                }
              }
              //清除空位
              for (let k = 0; k < j; k++) {
                if (matrix[i][k] == 0) {
                  matrix[i][k] = matrix[i][j]
                  matrix[i][j] = 0
                  break
                }
              }
            }
          }
        }

        console.log(matrix)

        //旋转复位
        switch (target) {
          case 'left':
            this.board = this.revolve(0, matrix)
            break
          case 'right':
            this.board = this.revolve(180, matrix)
            break
          case 'up':
            this.board = this.revolve(270, matrix)
            break
          case 'down':
            this.board = this.revolve(90, matrix)
            break

        }

      },
      revolve(degree, matrix) {
        let res = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
        if (degree == 0) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              res[i][j] = matrix[i][j]
            }
          }
        }
        if (degree == 90) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              res[i][j] = matrix[j][3 - i]
            }
          }
        }
        if (degree == 180) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              res[i][j] = matrix[3 - i][3 - j]
            }
          }
        }
        if (degree == 270) {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              res[i][j] = matrix[3 - j][i]
            }
          }
        }
        return res
      },

      addNewItem() {
        this.loading = true
        let space = 0
        let spaceList = []
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (this.board[i][j] == 0) {
              space++
              spaceList.push({
                i: i,
                j: j
              })
            }
          }
        }
        if (space == 0) {
          this.$confirm('游戏结束了?太菜了吧！要不要再来一局？', '😲😲😲', {
            confirmButtonText: '😃',
            cancelButtonText: '😔',
            type: 'warning'
          }).then(() => {
            this.restart()
            this.loading = false
          }).catch(() => {
            this.loading = false
          });
          return
        }
        this.gameInfo.score += 2
        let index = Math.floor(Math.random() * space);
        let point = spaceList[index]
        this.board[point.i][point.j] = 2
        console.log(this.board)
        this.refresh()
        this.loading = false
      },
      undo() {
        this.board = JSON.parse(JSON.stringify(this.last))
        this.last = null
        this.refresh()
      },
      restart() {

        let score = this.gameInfo.score
        for (let i = 0; i < this.totalInfo.scoreList.length; i++) {
          if (score > this.totalInfo.scoreList[i].score) {
            this.totalInfo.scoreList[i].name = this.totalInfo.name
            this.totalInfo.scoreList[i].score = score

            this.$notify({
              duration: 10000,
              offset: 100,
              title: '提示',
              message: '666居然上了英雄版！你的名字将被铭记',
              type: 'warning'
            })
            break
          }
        }

        this.gameInfo.score = 0
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            this.board[i][j] = 0
          }
        }
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
      this.$notify({
        duration: 10000,
        offset: 100,
        title: '提示',
        message: '使用上下左右控制棋盘，相同的数组可以碰撞相加！开始游戏吧😜😜',
        type: 'warning'
      })

      var _this = this;
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
    width: 400px;
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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
