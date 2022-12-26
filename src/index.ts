/**
 * 拓展Number原型
 */
declare global {
    interface Number {
        /**
       * 加法
       * @param arg
       */
        add(arg: number): number;
        /**
         * 减法
         * @param arg
         */
        sub(arg: number): number;
        /**
         * 乘法
         * @param arg
         */
        mul(arg: number): number;
        /**
         * 除法
         * @param arg
         */
        div(arg: number): number;
    }
}

/**
 * 加法函数，用来得到精确的加法结果
    说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    调用：accAdd(arg1,arg2)
    返回值：arg1加上arg2的精确结果
 */
export const accAdd = (arg1: number, arg2: number) => {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

Number.prototype.add = function (arg: number) {
    return accAdd(arg, this.valueOf());
}


/**
 * 减法函数，用来得到精确的减法结果
 * @param arg1 
 * @param arg2 
 * @returns 
 */
export const accSub = (arg1: number, arg2: number) => {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

Number.prototype.sub = function (arg: number) {
    return accSub(this.valueOf(), arg);
}

/**
 * 乘法函数，用来得到精确的乘法结果
    说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
    调用：accMul(arg1,arg2)
    返回值：arg1乘以arg2的精确结果
 * @param arg1 
 * @param arg2 
 * @returns 
 */
export const accMul = (arg1: number, arg2: number) => {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

/**
 * 给Number类型增加一个mul方法，调用起来更加方便。 
 */
Number.prototype.mul = function (arg: number) {
    return accMul(arg, this.valueOf());
}

/**
 *  除法函数，用来得到精确的除法结果
    说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
    调用：accDiv(arg1,arg2)
    返回值：arg1除以arg2的精确结果
 */
export const accDiv = (arg1: number, arg2: number) => {
    let t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return Number(r1 / r2).mul(Math.pow(10, t2 - t1))
}

/**
 * 给Number类型增加一个div方法，调用起来更加方便。 
 */
Number.prototype.div = function (arg: number) {
    return accDiv(this.valueOf(), arg);
}

export default {
    add: accAdd,
    sub: accSub,
    mul: accMul,
    div: accDiv,
    Number
}