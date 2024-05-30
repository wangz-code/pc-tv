// 本地缓存
const LocalKey = "LocalStore_Key";
export const LocalStore = {
  state: new Map(),
  // 设置值
  setValue(key: string, value = {}) {
    this.state.set(key, value);
    localStorage.setItem(LocalKey, JSON.stringify(Array.from(this.state)));
  },
  // 获取值
  getValue(key: string) {
    return this.state.get(key);
  },
};

const state = localStorage.getItem(LocalKey);
if (state != null) LocalStore.state = new Map(JSON.parse(state));

console.log("LocalStore log==>", LocalStore);
