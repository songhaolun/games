import {default as api} from '../../utils/api'
export default {
  state: {
    busPlate: '',
    busPlateTxt: '',
    changeDate: null,
    compId: '',
    compTxt: '',
    costCenter: '',
    costCenterTxt: 'null',
    createAt: null,
    createBy: '',
    createByTxt: '',
    currency: '',
    currencyTxt: '',
    deptId: '',
    deptTxt: '',
    email: '',
    empId: '',
    empLevel: '',
    empLevelTxt: '',
    empName: '',
    empNo: '',
    hisDept: '',
    lastModified: null,
    lastModifiedBy: '',
    lastModifiedByTxt: '',
    mainJob: '',
    mainJobTxt: '',
    phone: '',
    status: '',
    statusTxt: ''
  },
  getters: {

  },
  mutations: {
    setPerms (state, perms) {
      state.perms = perms
    },
    SET_USER: (state, data) => {
      for (var prop in state) {
        state[prop] = data[prop]
      }
    }
  },
  actions: {
    // 获取用户信息
    GetInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        this.api({
          url: '/rest/user/default',
          method: 'get'
        }).then((response) => {
          const data = response.data

          commit('SET_USER', data)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  // 前端 登出
  FedLogOut ({commit}) {
    return new Promise(resolve => {
      // commit('RESET_USER')
      // removeToken()
      resolve()
    })
  }
}
