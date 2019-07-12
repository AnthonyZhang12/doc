# 前端算法
  - 去除重复的元素 [1,13,24,11,11,14,1,2]
    - 思路1: 利用 Object key 删除重复的
      ```javascript
      const repeatArray = [1,13,24,11,11,14,1,2];

      function removeDul(targetArray) {
        if (!targetArray || targetArray.length <= 1) {
          return targetArray;
        }

        const tempObj = {};
        const newArray = [];

        targetArray.forEach(item => {
          if (!tempObj[item]) {
            tempObj[item] = item;
            newArray.push(item);
          }
        });

        // Object.keys 返回的是 string 字符串
        console.log(newArray, Object.values(tempObj), Object.keys(tempObj));
        return newArray;
      }
      ```
    - 思路2: 利用 set
      ```javascript
      const repeatArray = [1,13,24,11,11,14,1,2];

      function removeDul(targetArray) {
        if (!targetArray || targetArray.length <= 1) {
          return targetArray;
        }

        return [...new Set(targetArray)]
      }

      removeDul(repeatArray)
      ```
  - 找出下列正数组的最大差值比如: 输入[10,5,11,7,8,9] 输出 6
    - 思路1，找出最大值与最小值，相减即可
    ```javascript
    const inputArray = [10,5,11,7,8,9];
    function getMaxDiff(inputArray) {
      // 也可以使用 apply
      // Math.max.apply(null, inputArray);
      const maxValue = Math.max.call(null, ...inputArray);
      const minValue = Math.min.call(null, ...inputArray);
      return maxValue - minValue;
    }

    console.log(getMaxDiff(inputArray));
    ```
    - 思路2，循环找出最大差值
    ```javascript
    const inputArray = [10,5,11,7,8,9];
    function getMaxDiff(inputArray) {
      if (!inputArray || inputArray.length === 0) {
        return [];
      }

      let minValue = inputArray[0];
      let maxDiff = 0;
      inputArray.forEach(item => {
        minValue = Math.min(item, minValue);
        maxDiff = Math.max(maxDiff, item - minValue);
      });

      return maxDiff;
    }

    console.log(getMaxDiff(inputArray));
    ```
  - 给出一段英文连续的英文字符窜，找出重复出现次数最多的字母，例如输入'dddddssssadfasdfsdgrrgdfg' 输出 'd'
    ```javascript
    function getMaxCountString(inputString) {
      if (!inputString || inputString.length === 0) {
        return inputString;
      }

      const tempObj = {};
      for (let i = 0; i < inputString.length; i++) {
        const item = inputString.charAt(i);
        if (tempObj[item]) {
          tempObj[item] = tempObj[item] + 1;
        } else {
          tempObj[item] = 1;
        }
      }
      let maxCount = 0;
      let maxChar = '';
      for (const char in tempObj) {
        if (maxCount < tempObj[char]) {
          maxCount = tempObj[char];
          maxChar = char;
        }
      }

      return maxChar;
    }
    console.log(getMaxCountString('dddddssssadfasdfsdgrrgdfg'))
    ```

  - 实现一个算法，随机生成指制定长度的字符串。 比如给定 长度 8 输出 4ldkfg9j
    ```javascript
    function generateRandomString(stringLength) {
      const allStrings = 'abcdefghigklmnopqrstuvwxyz1234567890'
      const totalLength = allStrings.length;
      let resultString = '';

      for(let i = 0; i < stringLength; i++) {
        resultString += allStrings.charAt(Math.floor(Math.random() * totalLength));
      }

      return resultString;
    }

    console.log(generateRandomString(40))
    ```
