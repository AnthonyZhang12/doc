### 内置类型 (7 种)
- 基本类型： null, undefined, boolean, number, string, symbol
Node： typeof NaN -> number, NaN === NaN -> false
- 引用类型：object

### Typeof 
- typeof undefined // 'undefined'
- typeof null // 'object'
为什么会出现这种情况呢? 因为在 JS 的最初版本中，使用的是 32 位系统， 为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示 为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了， 但是对于这个 Bug 却是一直流传下来

### 四则运算
  - 只有当加法运算时，其中一方是字符串类型，就会把另一个也转换为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字
  

### 深拷贝
Json.parse(Json.stringify(object))
会忽略 undefined, 不能序列化函数，不能解决循环引用的对象
