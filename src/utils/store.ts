// 临时缓存
export const VStore = {
  state: new Map(),
  // 设置值
  setValue(key: string, value = {}) {
    this.state.set(key, value);
  },
  // 获取值
  getValue(key: string) {
    return this.state.get(key);
  },
  // 初始化值
  initValue(key: string, value = {}) {
    if (this.getValue(key)) {
      return this.getValue(key);
    } else {
      this.setValue(key, value);
      return value;
    }
  },
  clean() {
    this.state = new Map();
  },
};
