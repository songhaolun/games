import store from '@/store'

export function hasPermission (perms) {
  let hasPermission = false
  let permissions = store.state.user.perms
  for (let i = 0, len = permissions.length; i < len; i++) {
    if (permissions[i] === perms) {
      hasPermission = true
      break
    }
  }
  return hasPermission
}
