<!--
 * @Author        : turbo 664120459@qq.com
 * @Date          : 2022-12-26 12:58:58
 * @LastEditors   : turbo 664120459@qq.com
 * @LastEditTime  : 2022-12-26 15:50:57
 * @FilePath      : /turbo-number/README.md
 * @Description   : 
 * 
 * Copyright (c) 2022 by turbo 664120459@qq.com, All Rights Reserved. 
-->

### 给Number原型增加简易的高精度四则计算的方法


```typescript
import 'turbo-number';

console.log(0.1 + 0.2)
console.log(Number(0.1).add(0.2))

console.log(0.2 * 0.4)
console.log(Number(0.2).mul(0.4))

console.log(9.1 - 0.3)
console.log(Number(9.1).sub(0.3))

console.log(2.8 / 10)
console.log(Number(2.8).div(10))

```
