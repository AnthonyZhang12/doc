call, apply 都是为了改变文件运行时的上下文（context）而存在的，就是为了改变函数体内部的 this 指向
call 和 apply 的区别是接收参数的方式不一样。都是立即调用
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

Array.prototype.push.apply(array1, array2); 
Math.max.apply(Math, numbers)

- bind()
return a new function
可以用于提前传入参数。实现偏函数

```javascript
function getList() {
  return Array.prototype.slice.call(arguments);
}

getList(1, 2, 3); // [1, 2, 3]

// 预定义参数37
const headerList = list.bind(undefined, -1);

headerList(); // [-1]
headerList(1, 2, 3); // [-1, 1, 2, 3]

```


