# new 
- create empty object
- linked to prototype
- bind the this, execute constructor function
- return instance object 

```javascript
function new1(func) {
  // 创建一个继承自func.prototype的新对象
  var newObj = Object.create(func.prototype);
  // 截取new1函数第二个以及第二个之后的参数,在newObj作用域内执行改造函数func
  var returnObj = func.apply(newObj, Array.prototype.slice.call(arguments, 1));

  if ((typeof returnObj === "object" || typeof returnObj === "function") && ret !== null) {
      return returnObj;
  }
  //如果传入参数中的构造函数执行后的returnObj是“对象”类型(比如new1(Object)),那么这个对象会取代newObj作为返回的对象
  return newObj;
}
```

```javascript
function new2(func) {
  return function() {
    let newObj = {
      __proto__: func.prototype    // 新生成一个对象,且新对象的原型对象继承自构造对象的原型对象
    }
    var returnObj =func.apply(obj, arguments)   // 以第二次执行函数的参数,在obj作用域中执行func
    if ((typeof returnObj === "object" || typeof returnObj === "function") && returnObj !== null) {
      return returnObj;
    }   //同理,returnObj是“对象”类型(比如new1(Object)),那么这个对象会取代newObj作为返回的对象
    return newObj
  }
}
```
