// 临时缓存
export const VStore = {
	state: {
		// key:value  建议 key = 自定义字符, value: any
	},
	// 设置值
	setValue(key, value = {}) {
		this.state[key] = value;
	},
	// 获取值
	getValue(key) {
		return this.state[key];
	},
    // 初始化值
	initValue(key, value = {}) {
		if (this.state[key]) {
			return this.getValue(key);
		} else {
			this.setValue(key, value);
			return value;
		}
	},
	clean() {
		this.state = {};
	},
};
